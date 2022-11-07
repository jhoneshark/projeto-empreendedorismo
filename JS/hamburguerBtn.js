document.getElementById("hamburguerBtn").addEventListener("click", () => {
  document.getElementById("hamburguerBtn").classList.toggle("ativo");

  document.getElementsByClassName("navMenu")[0].classList.toggle("mostrar");
});
