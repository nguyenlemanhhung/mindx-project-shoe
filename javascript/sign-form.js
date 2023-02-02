// switch form

const signInSwitch = document.querySelector("#sign-in-switch");
const signUpSwitch = document.querySelector("#sign-up-switch");
const wrapper = document.querySelector(".wrapper");

const signInHeader = document.querySelector('.sign-in-header');
const signUpHeader = document.querySelector('.sign-up-header');


signInSwitch.addEventListener("click", () => {
  wrapper.classList.remove("sign-up-mode");
  console.log("click")
});

signUpSwitch.addEventListener("click", () => {
  wrapper.classList.add("sign-up-mode");
  console.log("click1")

});

// show form

signUpHeader.addEventListener("click", () => {
  wrapper.classList.add("sign-up-mode");
});

signInHeader.addEventListener("click", () => {
  wrapper.classList.remove("sign-up-mode");
});