window.onload = function () {
  window.scrollTo(0, 0);
  document.getElementById("loader-wrapper").style.opacity = "0";
  document.getElementById("loader-wrapper").style.display = "none";
};

function navbarToggle() {
  document.getElementById("nav-mobile-active").style.display = "flex";
  document.getElementById("nav-logo-nonactive").style.display = "none";

}

function navbarClose() {
  document.getElementById("nav-mobile-active").style.display = "none";
  document.getElementById("nav-logo-nonactive").style.display = "block";
}
