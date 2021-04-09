window.onload = function () {
  window.scrollTo(0, 0);
  document.getElementById("loader-wrapper").style.opacity = "0";
  document.getElementById("loader-wrapper").style.display = "none";
  document.getElementById("body").style.height = "auto";
  document.getElementById("body").style.overflow = "auto";
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
  var labelOne = document.getElementById("label-tabOne");
  var labelTwo = document.getElementById("label-tabTwo");
  var labelThree = document.getElementById("label-tabThree");

  var checkBox = document.getElementById("feature-tab1-btn");
  var featureTabOne = document.getElementById("tab-1");
  var featureTabTwo = document.getElementById("tab-2");
  var featureTabThree = document.getElementById("tab-3");
  if (checkBox.checked == true) {
    featureTabOne.style.display = "flex";
    featureTabOne.style.flexDirection = "row";
    featureTabTwo.style.display = "none";
    featureTabThree.style.display = "none";
    // Lable
    labelOne.style.fontWeight = "600";
    labelTwo.style.fontWeight = "500";
    labelThree.style.fontWeight = "500";
  } else {
    featureTabOne.style.display = "flex";
    featureTabOne.style.flexDirection = "row";
    featureTabTwo.style.display = "none";
    featureTabThree.style.display = "none";
    // Lable
    labelOne.style.fontWeight = "600";
    labelTwo.style.fontWeight = "500";
    labelThree.style.fontWeight = "500";
  }
}

function checkboxTabTwo() {
  var labelOne = document.getElementById("label-tabOne");
  var labelTwo = document.getElementById("label-tabTwo");
  var labelThree = document.getElementById("label-tabThree");

  var checkBox = document.getElementById("feature-tab2-btn");
  var featureTabOne = document.getElementById("tab-1");
  var featureTabTwo = document.getElementById("tab-2");
  var featureTabThree = document.getElementById("tab-3");
  if (checkBox.checked == true) {
    featureTabOne.style.display = "none";
    featureTabTwo.style.display = "flex";
    featureTabTwo.style.flexDirection = "row";
    featureTabThree.style.display = "none";
    // Lable
    labelOne.style.fontWeight = "500";
    labelTwo.style.fontWeight = "600";
    labelThree.style.fontWeight = "500";
  } else {
    featureTabOne.style.display = "none";
    featureTabTwo.style.display = "flex";
    featureTabTwo.style.flexDirection = "row";
    featureTabThree.style.display = "none";
    // Lable
    labelOne.style.fontWeight = "500";
    labelTwo.style.fontWeight = "600";
    labelThree.style.fontWeight = "500";
  }
}

function checkboxTabThree() {
  var labelOne = document.getElementById("label-tabOne");
  var labelTwo = document.getElementById("label-tabTwo");
  var labelThree = document.getElementById("label-tabThree");

  var checkBox = document.getElementById("feature-tab3-btn");
  var featureTabOne = document.getElementById("tab-1");
  var featureTabTwo = document.getElementById("tab-2");
  var featureTabThree = document.getElementById("tab-3");
  if (checkBox.checked == true) {
    featureTabOne.style.display = "none";
    featureTabTwo.style.display = "none";
    featureTabThree.style.display = "flex";
    featureTabThree.style.flexDirection = "row";
    // Lable
    labelOne.style.fontWeight = "500";
    labelTwo.style.fontWeight = "500";
    labelThree.style.fontWeight = "600";
  } else {
    featureTabOne.style.display = "none";
    featureTabTwo.style.display = "none";
    featureTabThree.style.display = "flex";
    featureTabThree.style.flexDirection = "row";
    // Lable
    labelOne.style.fontWeight = "500";
    labelTwo.style.fontWeight = "500";
    labelThree.style.fontWeight = "600";
  }
}

function warning() {
  window.scroll({ top: 0, behavior: "smooth" });
  document.getElementById("close-button").style.display = "flex";
  document.getElementById("close-button").style.height = "auto";
  document.getElementById("container").style.opacity = "50%";
}

function closeWarning() {
  document.getElementById("close-button").style.display = "none";
  document.getElementById("container").style.opacity = "100%";
}
