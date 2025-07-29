$(document).ready(function() {
  $("#header").load("components/header.html");
  $("#footer").load("components/footer.html");
});

 const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav li a");

  function onScroll() {
    let scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(link => {
          link.parentElement.classList.remove("active");
          if (link.getAttribute("href").substring(1) === section.getAttribute("id")) {
            link.parentElement.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);