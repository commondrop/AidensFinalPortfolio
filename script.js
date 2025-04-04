const body = document.querySelector('.body');
const darkBtn = document.querySelector('.button');
const text = document.querySelectorAll('.text');
const hoverTextElement = document.querySelector('.hover-text');
const link = document.querySelectorAll('.link');
const hero = document.querySelector(".hero");
const svg = document.querySelector(".svg");
const dark = document.querySelectorAll(".dark");
const line = document.querySelectorAll('.line');
const linkcolor = document.querySelectorAll(".linkcolor");
const hovercard = document.querySelectorAll(".hovercard");



darkBtn.addEventListener('click', function() {
    body.classList.toggle("dark-mode");

    dark.forEach(function(element){
        element.classList.toggle("dark-mode", body.classList.contains("dark-mode"));
    })
    text.forEach(function(element) {
        element.classList.toggle("dark-mode", body.classList.contains("dark-mode"));
    });
    link.forEach(function(element){
        element.classList.toggle("dark-mode", body.classList.contains("dark-mode"));
    });
    line.forEach(function(element){
        element.classList.toggle("dark-mode", body.classList.contains("dark-mode"));
    });
    hero.classList.toggle("dark-mode", body.classList.contains("dark-mode"));
    svg.classList.toggle("dark-mode", body.classList.contains("dark-mode"));
    linkcolor.forEach(e => {
        e.classList.toggle("dark-mode");
    })
    hovercard.forEach(e => {
        e.classList.toggle("dark-mode");
    })
});
hoverTextElement.addEventListener('mouseover', function() {
    hoverTextElement.textContent = "😲";
});
hoverTextElement.addEventListener('mouseout', function() {
    hoverTextElement.textContent = "😁";
});
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
    scrollToTopBtn.classList.remove("hide");
  } else {
    scrollToTopBtn.classList.add("hide");
    setTimeout(() => scrollToTopBtn.classList.remove("show"), 300);
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});




