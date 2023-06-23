/*
    Student Name: Jess Repanshek
    File Name: script.js
    Project: AMP Project
    Date: 5/31/2023
*/

function scrollResize() {
        let logo = document.getElementById('logo');
        let header = document.getElementById('amp-logo');
        let viewportWidth = window.innerWidth;

        if(viewportWidth < 1000) {
            if(window.scrollY==0) {
                logo.style.width = 150 + "px";
                logo.style.transform = "scale(1, 1)";
                header.style.height = 150 + "px";
            } else {
                logo.style.width = 100 + "px";
                logo.style.transition = ".1s ease-in .1s";
                header.style.height = "100px";
                header.style.transition = ".25s ease-in";
            }
        }   
}

function toggleMenu() {
    let menu = document.querySelector(".menu");
    let menuItems = document.querySelectorAll(".menuItem");
    let closeIcon = document.querySelector(".closeIcon");
    let menuIcon = document.querySelector(".menuIcon");    

    
    if (menu.classList.contains("showMenu")) {
            menu.classList.remove("showMenu");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
          } else {
            menu.classList.add("showMenu");
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
          }
}

function more1() {
    let dots = document.getElementById("dots1");
    let moreText = document.getElementById("more1");
    let btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function more2() {
    let dots = document.getElementById("dots2");
    let moreText = document.getElementById("more2");
    let btnText = document.getElementById("myBtn2");


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function more3() {
    let dots = document.getElementById("dots3");
    let moreText = document.getElementById("more3");
    let btnText = document.getElementById("myBtn3");


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function init() {
    let hamburger = document.querySelector(".hamburger");
    let closeIcon = document.querySelector(".closeIcon");

    closeIcon.style.display = "none";

    window.addEventListener("scroll", scrollResize);
    hamburger.addEventListener("click", toggleMenu);
    
    
}
        
        

        

//Hamburger menu function
/* function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("pht-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
} */