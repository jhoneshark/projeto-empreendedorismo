document.getElementById("produtosListaDropDown").addEventListener("mouseenter", ()=>{
    document.getElementById("produtosListaDropDownUl").classList.add("mostrar");
});

document.getElementById("produtosListaDropDown").addEventListener("mouseleave", ()=>{
    document.getElementById("produtosListaDropDownUl").classList.remove("mostrar");
})