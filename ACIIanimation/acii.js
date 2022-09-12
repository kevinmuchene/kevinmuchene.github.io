window.onload = function () {
  "use strict";

  let animationDelay;

  document
    .getElementById("animation")
    .addEventListener("change", displayAnimation);
  document
    .getElementById("fontsize")
    .addEventListener("change", changeFontSize);
  document.getElementById("start").addEventListener("click", startAnimation);
  document.getElementById("stop").addEventListener("click", stopAnimation);
  document.getElementById("turbo").addEventListener("change", function () {
    if (document.getElementById("start").hasAttribute("disabled")) {
      clearInterval(animationDelay);
      const animation = document.getElementById("animation").value;
      const timeout = this.checked ? 50 : 250;
      animationDelay = createAnimationInterval(animation, timeout);
    }
  });

  function displayAnimation() {
    const animation = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[animation];
  }

  function changeFontSize() {
    document.getElementById("text-area").style.fontSize =
      document.getElementById("fontsize").value;
  }

  function startAnimation() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;
    clearInterval(animationDelay);

    const animation = document.getElementById("animation").value;
    const isTurbo = document.getElementById("turbo").checked;
    const timeout = isTurbo ? 50 : 250;
    animationDelay = createAnimationInterval(animation, timeout);
  }

  const createAnimationInterval = (animation, timeout) => {
    const frames = ANIMATIONS[animation].split("=====");
    let index = -1;
    return setInterval(function () {
      ++index;
      if (index >= frames.length) {
        index = 0;
      }
      document.getElementById("text-area").value = frames[index];
    }, timeout);
  };

  function stopAnimation() {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    clearInterval(animationDelay);
  }
};
