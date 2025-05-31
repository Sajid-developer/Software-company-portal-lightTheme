// console.log("I am working...")

const menu=document.querySelector(".navBar .nav-links");
const menuIcon=document.querySelector("#menu-icon");
const hamburger=document.querySelector(".navBar .hamburger-icon");
    hamburger.addEventListener("click", ()=>{
        menu.classList.toggle("showHide");
        menuIcon.classList.toggle("bx-x");
    });