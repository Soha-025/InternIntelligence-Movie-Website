// script.js – JavaScript for all the website pages

document.addEventListener("DOMContentLoaded", function () {
  console.log("Page Loaded:", document.title);

  // ===== INDEX PAGE =====
  if (document.title.includes("Moviewind")) {
    console.log("Homepage loaded");
    // Add homepage-specific features here if needed
  }

  // ===== CONTACT PAGE FUNCTIONALITY =====
  if (document.title.toLowerCase().includes("contact")) {
    const form = document.querySelector("form");

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent successfully!");
        form.reset();
      });
    }
  }

  // ===== ABOUT PAGE =====
  if (document.title.toLowerCase().includes("about")) {
    console.log("About page loaded");
    // Can add animations or interactive effects here later
  }

  // ===== PRIVACY PAGE =====
  if (document.title.toLowerCase().includes("privacy")) {
    console.log("Privacy Policy page loaded");
  }

  // ===== DISCLAIMER PAGE =====
  if (document.title.toLowerCase().includes("disclaimer")) {
    console.log("Disclaimer page loaded");
  }

  // ===== SCROLL TO TOP ON LOAD =====
  window.scrollTo({ top: 0, behavior: "smooth" });
});
