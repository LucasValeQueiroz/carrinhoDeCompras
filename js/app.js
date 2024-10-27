//Variáveis universais 
let subtotal = 0;
let listaProdutos = document.getElementById('lista-produtos').innerHTML = '';
let totalCarrinho = document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
  //recuperar valores nome do produto, quantidade e valor 
  let produto = document.getElementById('produto');
  let nomeProduto = produto.value.split('-')[0];
  let valorUnitario = produto.value.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;
  //calcular o preço,o nosso subtotal 
  let preco = valorUnitario * quantidade;
  let listaProdutos = document.getElementById('lista-produtos');

  
  if (quantidade == '' || quantidade == null|| quantidade == '0'){
      alert(`Não inseriu a quantidade do produto ${nomeProduto}`);
  }else {
      //adicionar no carrinho
      listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
      </section>`  ;
      subtotal += preco;
      //atualizar o valor total
      let totalCarrinho = document.getElementById('valor-total');
      totalCarrinho.textContent = `R$ ${subtotal}`;
      document.getElementById('quantidade').value = 0;    
  }  
}
function limpar() {
  //Limpar carrinho de compras       
  subtotal = 0;
  listaProdutos = document.getElementById('lista-produtos').innerHTML = '';
  totalCarrinho = document.getElementById('valor-total').textContent = 'R$ 0';
}