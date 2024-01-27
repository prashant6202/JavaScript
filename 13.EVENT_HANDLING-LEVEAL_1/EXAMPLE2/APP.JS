function changeColor() {
  this.style.color = "red";
}
function init() {
  let x = document.getElementById("myDiv");
  x.onclick = changeColor;
}
window.onload = init;
