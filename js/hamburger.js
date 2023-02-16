function myFunction() {
  var x = document.getElementById("hamburger-wrapper");
  var b = document.getElementById("hamburger-button")
  if (x.style.display === "none") {
    x.style.display = "flex";
    b.style.display = "none"
  } else {
    x.style.display = "none";
    x.style.flexDirection = "column";
    x.style.alignItems = "center"
  }
}

function closeMenu() {
  var x = document.getElementById("hamburger-wrapper");
  var b = document.getElementById("hamburger-button")
  if (x.style.display === "flex") {
    x.style.display = "none";
    b.style.display = "flex";
  }
}