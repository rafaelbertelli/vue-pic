import Vue from "vue";

Vue.directive("meu-transform", {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener("dblclick", function() {
      let increment = 90;
      let animated = false;

      if (binding.value) {
        increment = binding.value.increment;
        animated = binding.value.animated;
      }

      if (animated) el.style.transition = "transform 0.5s";

      current += increment;
      el.style.transform = `rotate(${current}deg)`;
    });
  }
});
