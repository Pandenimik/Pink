const button = document.querySelector(".burger-toggle");
const navList = document.querySelector(".main-nav__list");
const pageHeader = document.querySelector(".page-header");
const toggleNav = function () {
  navList.classList.toggle("main-nav__list--closed");
  pageHeader.classList.toggle("page-header--opened-nav");
  button.classList.toggle("opened-nav");
};

button.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleNav();
});
