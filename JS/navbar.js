
// try catch é utilizado para não ter erro com os outros arquivos html, pois as funções presentes nele apenas funcionam no index.html
try {
  
  // Mostra ou esconde o dropdown dos destaques da navbar na home section
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



// AutoScroll para a section desejada de acordo com o botão clicado nos destaques da navbar da home section
let promocaoBtn = document.getElementById("promocaoBtn");
promocaoBtn.addEventListener("click", () =>{autoscroll("promocao")})

let maisVendidosBtn = document.getElementById("maisVendidosBtn");
maisVendidosBtn.addEventListener("click", () =>{autoscroll("maisVendidos")});


} catch (error) {
  console.log(error);
  console.log("Dropdown da navbar não localizado");
}


function autoscroll(section){

  switch (section) {
    case "promocao":

      let promocaoSection = document.getElementsByClassName("produtosDestaqueSection")[0];

      promocaoSection.scrollIntoView(false);
      break;

    case "maisVendidos":

      let maisVendidosSection = document.getElementsByClassName("maisVendidosSection")[0];

      maisVendidosSection.scrollIntoView(true);
      break
  
    default:
      break;
  }
}