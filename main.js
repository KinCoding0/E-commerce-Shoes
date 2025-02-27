let showImage = document.getElementById("show-image");
document.getElementById("small-img").querySelectorAll("img").forEach(e => {
  e.addEventListener("click", () => {
    showImage.src = e.src;
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const menuContainer = document.querySelector(".menu");

  hamburger.addEventListener("click", function() {
    menuContainer.classList.toggle("active");
  });
});
AOS.init();
