// Menu Toggle

function menuToggle () {
    let getToggle = document.getElementById("menu");

    if (getToggle.style.display === "none") {
        getToggle.style.display = "block";
    } else {
        getToggle.style.display = "none";
    }
}

// Change colors

let changeBack = document.querySelector(".bodystyle");
let home = document.querySelector(".home");
let red = document.querySelector(".red");
let orange = document.querySelector(".ora");
let yellow = document.querySelector(".yel");
let green = document.querySelector(".gre");
let blue = document.querySelector(".blu");
let indigo = document.querySelector(".ind");
let violet = document.querySelector(".vio");

home.addEventListener("click", () => changeBack.style.backgroundColor = "azure");
red.addEventListener("click", () => changeBack.style.backgroundColor = "red");
orange.addEventListener("click", () => changeBack.style.backgroundColor = "orange");
yellow.addEventListener("click", () => changeBack.style.backgroundColor = "yellow");
green.addEventListener("click", () => changeBack.style.backgroundColor = "green");
blue.addEventListener("click", () => changeBack.style.backgroundColor = "blue");
indigo.addEventListener("click", () => changeBack.style.backgroundColor = "indigo");
violet.addEventListener("click", () => changeBack.style.backgroundColor = "violet");



