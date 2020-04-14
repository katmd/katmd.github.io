const menuButton = document.getElementById("menu-button")
const sideNav = document.getElementById("side-nav")
const sideNavOverlay = document.getElementById("side-nav-overlay")
const main = document.getElementById("main")
const body = document.body

/* Open and close side nav menu */
function openNav() {
  menuButton.innerHTML = "&times;";
  menuButton.style.fontSize = "4em";
  menuButton.style.color = "#A16C72"
  menuButton.setAttribute("onclick", "closeNav()");
  sideNav.style.width = "300px";
  sideNavOverlay.style.display = "block";
}

function closeNav() {
  menuButton.innerHTML = "&#9776";
  menuButton.style.fontSize = "3em";
  menuButton.style.color = "rgb(101, 197, 176)"
  menuButton.setAttribute("onclick", "openNav()");
  sideNav.style.width = "0";
  sideNavOverlay.style.display = "none";
}

/* Show and hide project details */
// Check if screen size is over the max width to display project details as overlay on project image. Otherwise, allows project details to be shown by default under project image.
let mediaQuery = window.matchMedia("(max-width: 564px)")

function projDescDisplay() {
  let projDescs = Array.from(document.getElementsByClassName("project-desc"))
  if (mediaQuery.matches) {
    projDescs.forEach(desc => {
      desc.style.display = "flex"
    })
  } else {
    projDescs.forEach(desc => {
      desc.style.display = "none"
    })
  }
};

window.onresize = projDescDisplay;

function focusProj(projContainer) {
  if (!mediaQuery.matches) {
    projContainer.querySelector(".project-desc").style.display = "flex"
  }
}

function unfocusProj(projContainer) {
  if (!mediaQuery.matches) {
    projContainer.querySelector(".project-desc").style.display = "none"
  }
}
