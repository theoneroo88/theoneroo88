/**
 * Define Global Variables
 * 
*/

const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// function to build navigation menu
const navBuilder = () => {
    sections.forEach(section => {
      let a = document.createElement("a");
      let li = document.createElement("li");
      a.setAttribute("href", "#" + section.id);
      a.textContent = section.dataset.nav;
      li.appendChild(a);
      a.addEventListener("click", (e) => {
        e.preventDefault();
        section.scrollIntoView({behavior: "smooth"})
      })
      nav.appendChild(li);
    });
};
// build the nav
navBuilder();

// function to activate sections on scroll location
function setActiveState() {
  sections.forEach(section => {
    const box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}

// Set active state on scroll anchor
document.addEventListener("scroll", function() {
  setActiveState();
});

