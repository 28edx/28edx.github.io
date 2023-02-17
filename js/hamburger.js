function myFunction() {
  const hbwrapper = document.getElementById("hamburger-wrapper");
  const hbbutton = document.getElementById("hamburger-button")
  if (hbwrapper.style.display === "none") {
    hbwrapper.style.display = "flex";
    hbwrapper.style.flexDirection = "column";
    hbwrapper.style.alignItems = "flex-start";
    hbwrapper.style.fontSize = "30px";
    hbbutton.style.display = "none"
  } else {
    hbwrapper.style.display = "none";
  }
}

function closeMenu() {
  const hbwrapper = document.getElementById("hamburger-wrapper");
  const hbbutton = document.getElementById("hamburger-button")
  if (hbwrapper.style.display === "flex") {
    hbwrapper.style.display = "none";
    hbbutton.style.display = "flex";
  }
}