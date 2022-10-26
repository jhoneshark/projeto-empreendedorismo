// Botão carrinho na navbar.
let abrirCarrinhoBtn = document.getElementById("abrirCarrinhoBtn").addEventListener("click", mostrarEsconderCarrinho);
// Botão "x" no carrinho.
let fecharCarrinhoBtn = document.getElementById("fecharCarrinhoBtn").addEventListener("click", mostrarEsconderCarrinho);

// Abre o carrinho caso esteja fechado, e fecha caso esteja aberto.
function mostrarEsconderCarrinho(){
    let carrinho = document.getElementById("botao__carinho")
    carrinho.classList.toggle("carrinhoAberto");
}


function AddCarrinho(produto, qtd, valor, posicao) {
    localStorage.setItem("produto" + posicao, produto);
    localStorage.setItem("qtd" + posicao, qtd);
    valor = valor * qtd;
    localStorage.setItem("valor" + posicao, valor);
    alert("Produto adicionado ao carrinho!");
}