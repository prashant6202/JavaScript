const ul = document.querySelector("ul");
const li = ul.querySelectorAll("li");
li.forEach((items) => {
  items.addEventListener("click", () => {
    items.style.color = "crimson";
  });
});
