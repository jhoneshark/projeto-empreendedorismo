document.getElementById("hamburguerBtn").addEventListener("click", () => {
  document.getElementById("hamburguerBtn").classList.toggle("ativo");

  document.getElementsByClassName("navMenu")[0].classList.toggle("mostrar");
});

  try {
    
    document
    .getElementById("produtosListaDropDown")
    .addEventListener("mouseenter", () => {
      
    document.getElementById("produtosListaDropDownUl").classList.add("mostrar");
    });

  document
  .getElementById("produtosListaDropDown")
  .addEventListener("mouseleave", () => {

    document.getElementById("produtosListaDropDownUl").classList.remove("mostrar");
  });

  } catch (error) {
    console.log(error);
  }