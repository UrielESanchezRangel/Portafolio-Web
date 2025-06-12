function cambiarTema() {
    document.body.classList.toggle("oscuro");
  }
  
  const footer = document.getElementById("footer-text");
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} - Portafolio Web`;
  