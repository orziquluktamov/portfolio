var body = document.querySelector("body");
var aboutMe = document.querySelector(".about-me");
var aboutContainer = document.getElementById("about");
var contactContainer = document.getElementById("contact");
var headerOpacity = document.querySelector(".header");
var headerText = document.querySelectorAll(".navbar, .header__text-box, .header__projects-button");
var closeButton = document.querySelector(".about-me__contact-close");
var openButton = document.querySelectorAll(".open-contact");
var preloader = document.querySelector(".preloader");

///////////////////////////////////////////////////////////////////////////////////////////////////


window.addEventListener("DOMContentLoaded", (event) => {

    //forEach to attach Event Listeners to About Me, Skills and Contact button
    openButton.forEach(openButton => {
       openButton.addEventListener( "click", function(){
           //Opening About Me Window and hidding Body ScrollBar
            body.style.overflow = "hidden";
            aboutMe.classList.add("about-me-open");
            aboutContainer.classList.replace("about-me__about-container-closed", "about-me__about-container");
            contactContainer.classList.replace("about-me__contact-container-closed", "about-me__contact-container");
            headerOpacity.classList.add("header-dark");

            //forEach Loop for Header Divs / Navigation
            headerText.forEach(headerText => {
                headerText.style.visibility = "hidden";
            });
        });
    });
});

window.addEventListener("DOMContentLoaded", (event) => {

    //Event Listener for X button on About Me Page
    document.querySelector(".about-me__contact-close").addEventListener("click", function(){
        //Enabling Body ScrollBar when About Me window is closed
        body.style.overflow = "visible";
        aboutMe.classList.remove("about-me-open");
        aboutContainer.classList.replace("about-me__about-container", "about-me__about-container-closed");
        contactContainer.classList.replace("about-me__contact-container", "about-me__contact-container-closed");
        headerOpacity.classList.remove("header-dark");

        //forEach Loop for Header Divs / Navigation
        headerText.forEach(headerText => {
            headerText.style.visibility = "visible";
        });
    });
});


//Preloader functionality
window.addEventListener("load", function() {
    preloader.style.display = "none";
});
