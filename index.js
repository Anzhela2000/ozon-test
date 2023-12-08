const progress = document.querySelector(".progress__bar");
const inputValue = document.querySelector(".progress__input");
const animation = document.querySelector(".progress__checkbox_animation");
const hide = document.querySelector(".progress__checkbox_hide");

function setProgress(percent) {
  progress.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(#2259f4 ${percent}%, #bfbfbf 0)`;
}

function toggleAnimation() {
  animation.classList.toggle("switch-on");
  progress.classList.toggle("progress__bar_animated");
}

function hideProgress() {
  hide.classList.toggle("switch-on");
  progress.classList.toggle("progress__bar_hidden");
}

inputValue.addEventListener("change", (event) => {
  setProgress(event.target.value);
});

hide.addEventListener("click", hideProgress);

animation.addEventListener("click", toggleAnimation);
