const id = document.querySelector(".id");
const pas = document.querySelector(".pas");
const btn = document.querySelector(".btn");
let init = false;
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (id.value == 12010111171 && pas.value == "97859zxccxzz") {
    init = true;
    window.location.href = "https://learnatta.github.io/markYPU/";
  }
});
