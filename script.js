// Smooth scroll for button

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

}

// Form validation

function validateForm() {

  let name = document.getElementById("name").value.trim();

  let email = document.getElementById("email").value.trim();

  let message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === "") {

    alert("Please fill in all fields.");

    return false;

  }

  if(!email.includes("@")) {

    alert("Please enter a valid email.");

    return false;

  }

  alert("Message sent successfully!");

  return true;

}

// Navbar scroll effect

window.addEventListener("scroll", function() {

  const navbar = document.getElementById("navbar");

  if(window.scrollY > 50) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});

// Reveal sections on scroll

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSections);

function revealSections() {

  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {

    const boxTop = section.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {

      section.classList.add("show");

    }

  });

}

// Initial call

revealSections();