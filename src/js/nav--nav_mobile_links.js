// Confirm this JavaScript file was successfully imported.
console.log("😊 NAV--NAV_MOBILE_LINKS.JS: SUCCESSFULLY IMPORTED!")

// GRMA https://stackoverflow.com/questions/53539461/how-do-i-use-vanilla-javascript-to-write-a-toggle-function-i-wrote-in-jquery 

const navMobileHamburger = document.querySelector("#nav__mobile_hamburger");
const navMobileLinks = document.querySelector("#nav__mobile_links");
const navMobileLinksToggle = document.querySelector("#nav__mobile_toggle");


// Show NavMobileLinks when NavMobile hamburger icon is clicked. 

navMobileHamburger.addEventListener("click", ()=>{
  console.log("--- NavMobile hamburger icon clicked.");
  navMobileLinks.classList.toggle("nav__mobile_open");
  navMobileLinksToggle.classList.toggle("nav__site_hidden");
  console.log("--- NavMobileLinks display toggled.");
});

// Close NavMobileLinks when any link within it is clicked.

// GRMA https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/

document.querySelectorAll(".nav__mobile_link").forEach(link => {
  link.addEventListener('click', event => {
    console.log("--- NavMobileLinks link clicked.");
    navMobileLinks.classList.toggle("nav__mobile_open");
    navMobileLinksToggle.classList.toggle("nav__site_hidden");
    console.log("--- NavMobileLinks display toggled.")
  })
})

