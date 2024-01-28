/* 

1.Objetivo: Quando o usuario do site clicar no botão de selecionar plataformas deve abrir uma caixa com os botões de seleção de plataformas.

      Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele.
      
      Passo 2 - pegar o elemento do conteudo que precisa ser mostrado
      
      Passo 3 - pegar o clique do usuário no JS

      Passo 4 - quando o usuário clicar adcionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo dele apareça


2.Objetivo: Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteudo deve ser escondido.

      Passo 1 - verificar se o botao ja esta aberto, se sim, devemos remover a classe ativo pra que ele seja escondido novamente

*/

//Objetivo: Quando o usuario do site clicar no botão de selecionar plataformas deve abrir uma caixa com os botões de seleção de plataformas.

//Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele.
//FORMA QUE EU SENIOR FARIA O CODIGO
const botao = document.querySelector('.btn-plataforma')
const elementoPlataformas = document.querySelector(
  '.btn-plataforma .plataformas');

  botao.addEventListener("click", () => {
      elementoPlataformas.classList.toggle("ativo");
  });



// FORMA QUE UM INICIANTE FARIA O CODIGO
  /* const botao = document.querySelector('.btn-plataforma')
  const elementoPlataformas = document.querySelector(
    '.btn-plataforma .plataformas');

    botao.addEventListener("click" , () => {
      const botaEstaAberto = elementoPlataformas.classList.contains("ativo");

      if(botaEstaAberto) {
          elementoPlataformas.classList.remove("ativo");
      }else{
          elementoPlataformas.classList.add("ativo");
      }
    })
    */