const closeButtonEL = document.getElementById("mobile-menu-buttons-close");
const showButtonEL = document.getElementById("mobile-menu-buttons-menu");
const menuEl = document.getElementById("nav-links");

closeButtonEL.addEventListener("click", ()=>{
    menuEl.style.width = "0px";
});

showButtonEL.addEventListener("click", () =>{
    menuEl.style.width = "200px"
})