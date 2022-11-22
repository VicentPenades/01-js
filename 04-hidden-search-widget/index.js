const button1 = document.querySelector(".button1");
const container = document.querySelector(".container-main");

button1.addEventListener("click", () => {
  container.classList.toggle("active");
  input1.focus();
});
