const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navBar = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    navBar.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}
