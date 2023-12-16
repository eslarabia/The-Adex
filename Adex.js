// # Strict Mode
"use strict";

const addEventOneElement = function (element , type , listener) {
    if (element.length > 1) {
        for (let i = 0; i < element.length; i++) {
            element[i].addEventListener(type , listener);
        }
    } else {
        element.addEventListener(type , listener);
    }
}


const navbar = document.querySelector("[data-navbar]");
const service = document.querySelector("[data-service-nav]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    service.classList.toggle("active");
    this.classList.toggle("active");
}

addEventOneElement(navToggler , "click" , toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    service.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOneElement(navbarLinks , "click" , closeNav);


const carousel = document.querySelector(".carousel");

let isDragging = false , startX , startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    startX = e.pageX;
    carousel.classList.add("dragging");
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = e.pageX;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousemove" , dragging);
carousel.addEventListener("mousedown" , dragStart);
document.addEventListener("mouseup" , dragStop);



const header = document.querySelector("[data-container]");
const primary = document.querySelector(".btn-primary");
const head = document.querySelector(".logo");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");

const links = document.querySelectorAll(".link-screen")[0];
const link = document.querySelectorAll(".link-screen")[1];
const linkOne = document.querySelectorAll(".link-screen")[2];
const linkTwo = document.querySelectorAll(".link-screen")[3];
const linkThree = document.querySelectorAll(".link-screen")[4];


window.addEventListener("scroll" , function () {
    if (this.window.scrollY > 50) {
        header.classList.add("active");
        head.classList.add("active");
        menu.classList.add("active");
        close.classList.add("active");
        links.classList.add("active");
        link.classList.add("active");
        linkOne.classList.add("active");
        linkTwo.classList.add("active");
        linkThree.classList.add("active");
        primary.classList.add("active");
    } else {
        header.classList.remove("active");
        head.classList.remove("active");
        menu.classList.remove("active");
        close.classList.remove("active");
        links.classList.remove("active");
        link.classList.remove("active");
        linkOne.classList.remove("active");
        linkTwo.classList.remove("active");
        linkThree.classList.remove("active");
        primary.classList.remove("active");
    }
});


let numOne = document.querySelectorAll(".num-stats .num");
let section = document.querySelector("#stats");

let started = false;

window.onscroll = () => {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            numOne.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}


const nav = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll" , function () {
    if (this.window.scrollY > 50) {
        nav.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        nav.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});