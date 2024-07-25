// Main JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  fetch("/src/components/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      // After inserting header.html, load and execute header.js
      loadScript("/src/js/components/header.js");
    })
    .catch((error) => console.error("Error fetching header.html:", error));

  // Load Footer
  fetch("/src/components/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
      // After inserting footer.html, load and execute footer.js
      loadScript("/src/js/components/footer.js");
    })
    .catch((error) => console.error("Error fetching footer.html:", error));

  function loadScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }
});