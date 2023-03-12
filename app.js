const hamburger= document.querySelector(".hamburger");
const navlists= document.querySelector(".navlists");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navlists.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navlists.classList.remove("active");

}))