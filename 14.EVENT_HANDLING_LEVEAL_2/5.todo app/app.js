const li = document.querySelectorAll("li");
li.forEach((items) => {
  items.addEventListener("click", () => {
    items.style.color = "crimson";
  });
});

const btn = document.querySelector("#additem");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let tast = prompt("What you want to do ?");
  ul.innerHTML += `<li> ${tast}</li>`;
});
