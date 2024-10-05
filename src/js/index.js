function menu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    menu.style.top = "4.3rem";
  } else {
    menu.style.top = "-100%";
  }
}
