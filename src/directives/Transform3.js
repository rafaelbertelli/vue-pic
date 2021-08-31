import Vue from "vue";

Vue.directive("meu-transform3", {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener("dblclick", function() {
      let effect;
      let increment = binding.value || 90;
      let animated = binding.modifiers.animated || false;
      let reverse = binding.modifiers.reverse || false;

      if (animated) el.style.transition = "transform 0.5s";

      if (!binding.arg || binding.arg === "rotate") {
        if (reverse) {
          current -= increment;
        } else {
          current += increment;
        }

        effect = `rotate(${current}deg)`;
      } else {
        if (binding.arg === "scale") {
          effect = `scale(${increment})`;
        }
      }

      el.style.transform = effect;
    });
  }
});
