const menuButton = document.getElementById("menu-button")
const sideNavMenu = document.getElementById("side-nav-menu")
const main = document.getElementById("main")
const body = document.body

/* Open and close side nav menu */
function openNav() {
  menuButton.innerHTML = "&times;";
  menuButton.style.fontSize = "4em";
  menuButton.style.color = "#A16C72"
  menuButton.setAttribute("onclick", "closeNav()");
  sideNavMenu.style.width = "300px";
  main.style.marginRight = "300px";
  body.style.backgroundColor = "rgba(20, 120, 90, 0.6)";
}

function closeNav() {
  menuButton.innerHTML = "&#9776";
  menuButton.style.fontSize = "3em";
  menuButton.style.color = "rgb(101, 197, 176)"
  menuButton.setAttribute("onclick", "openNav()");
  sideNavMenu.style.width = "0";
  main.style.marginRight= "0";
  body.style.backgroundColor = "#BFFFF1";
}

/* Show and hide project details */
function focusProj(projContainer) {
  projContainer.querySelector(".project-desc").style.display = "flex"
}

function unfocusProj(projContainer) {
  projContainer.querySelector(".project-desc").style.display = "none"
}
