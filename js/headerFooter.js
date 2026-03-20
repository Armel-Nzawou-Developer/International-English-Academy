fetch("header.html")
  .then((Response) => Response.text())
  .then((headerData) => {
    document.getElementById("header").innerHTML = headerData;
    // Run the function highlight AFTER injection of the header
    highlightActiveLink();
  });


  //function for active page
  function highlightActiveLink() {
    const currentPath = window.location.pathname.replace(/\/$/, ""); // normalize
    const navLinks = document.querySelectorAll("#header a");

    navLinks.forEach((link) => {
      const linkPath = new URL(
        link.href,
        window.location.origin,
      ).pathname.replace(/\/$/, "");
      console.log("Comparing:", currentPath, "vs", linkPath); // debug

      // Exact match OR parent match
      if (currentPath === linkPath || currentPath.startsWith(linkPath)) {
        link.classList.add("active");
      }
    });
  }


fetch("footer.html")
  .then((Response) => Response.text())
  .then((footerData) => {
    document.getElementById("footer").innerHTML = footerData;
  });


  ////Top Arrow Bottom///

// Get the button
let mybutton = document.getElementById("topArrowBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
