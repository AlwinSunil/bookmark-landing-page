window.onload = function () {
  window.scrollTo(0, 0);
  document.getElementById("loader-wrapper").style.opacity = "0";
  document.getElementById("loader-wrapper").style.display = "none";
  document.getElementById("body").style.height = "auto";
  document.getElementById("body").style.overflow = "scroll";
};

function navbarToggle() {
  document.getElementById("nav-mobile-active").style.display = "flex";
  document.getElementById("nav-logo-nonactive").style.display = "none";
}

function navbarClose() {
  document.getElementById("nav-mobile-active").style.display = "none";
  document.getElementById("nav-logo-nonactive").style.display = "block";
}

function checkboxTabOne() {
  var checkBox = document.getElementById("feature-tab1-btn");
  var featureTabOne = document.getElementById("tab-1");
  var featureTabTwo = document.getElementById("tab-2");
  var featureTabThree = document.getElementById("tab-3");
  if (checkBox.checked == true) {
    featureTabOne.style.display = "block";
    featureTabTwo.style.display = "none";
    featureTabThree.style.display = "none";
  } else {
    featureTabOne.style.display = "block";
    featureTabTwo.style.display = "none";
    featureTabThree.style.display = "none";
  }
}

function checkboxTabTwo() {
  var checkBox = document.getElementById("feature-tab2-btn");
  var featureTabOne = document.getElementById("tab-1");
  var featureTabTwo = document.getElementById("tab-2");
  var featureTabThree = document.getElementById("tab-3");
  if (checkBox.checked == true) {
    featureTabOne.style.display = "none";
    featureTabTwo.style.display = "block";
    featureTabThree.style.display = "none";
  } else {
    featureTabOne.style.display = "none";
    featureTabTwo.style.display = "block";
    featureTabThree.style.display = "none";
  }
}

function checkboxTabThree() {
  var checkBox = document.getElementById("feature-tab3-btn");
  var featureTabOne = document.getElementById("tab-1");
  var featureTabTwo = document.getElementById("tab-2");
  var featureTabThree = document.getElementById("tab-3");
  if (checkBox.checked == true) {
    featureTabOne.style.display = "none";
    featureTabTwo.style.display = "none";
    featureTabThree.style.display = "block";
  } else {
    featureTabOne.style.display = "none";
    featureTabTwo.style.display = "none";
    featureTabThree.style.display = "block";
  }
}

function warning() {
  window.scroll({ top: 0, behavior: "smooth" });
  document.getElementById("close-button").style.display = "block";
  document.getElementById("close-button").style.height = "auto";
  document.getElementById("container").style.opacity = "50%";
}

function closeWarning() {
  document.getElementById("close-button").style.display = "none";
  document.getElementById("container").style.opacity = "100%";
}