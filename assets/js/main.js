document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav li a");

  function onScroll() {
    const scrollPos = window.scrollY + 440;

    sections.forEach((section) => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach((link) => {
          link.parentElement.classList.remove("active");
          if (link.getAttribute("href").substring(1) === section.getAttribute("id")) {
            link.parentElement.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);

  });