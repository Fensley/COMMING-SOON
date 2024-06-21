const btn = document.getElementById("btn");
const myform = document.getElementById("myform");
const input = document.querySelector("input");
const item = document.querySelector(".item");
const svgg = document.querySelector("img");
const navitem = document.querySelector(".nav");
const btn2 = document.querySelector(".btn2");
myform.addEventListener("submit", (e) => {
  e.preventDefault();
});
btn.addEventListener("click", () => {
  console.log("i got click");
  input.value = "thank you!";
  item.style.display = "none";
  svgg.style.display = "block";
  btn2.style.display = "block";
});
navitem.addEventListener("click", () => {
  item.style.display = "block";
  svgg.style.display = "none";
  input.value = "Enter your email";
  btn2.style.display = "none";
});
btn2.addEventListener("click", () => {
  alert("an comfimation email have been send to you include all the details.");
  svgg.style.display = "none";
  input.value = "Enter your email";
  btn2.style.display = "none";
  item.style.display = "block";
});
