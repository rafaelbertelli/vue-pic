import Vue from "vue";

Vue.directive("meu-transform2", {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener("dblclick", function() {
      let increment = binding.value || 90;
      let animated = binding.modifiers.animated || false;
      let reverse = binding.modifiers.reverse || false;

      if (animated) el.style.transition = "transform 0.5s";

      if (reverse) {
        current -= increment;
      } else {
        current += increment;
      }

      el.style.transform = `rotate(${current}deg)`;
    });
  }
});
