function mostrarArticulo(event) {
  event.preventDefault();
  document.getElementById("articuloCompleto").style.display = "block";
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    let target = this.getAttribute("data-target");
    document.querySelectorAll(".content-section").forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(target).style.display = "block";
  });
});
