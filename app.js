let listaDeNumeroSorteados=[]; 
let numeroLimite=10;
// cria-se esta variavel para atribuir um numero 
let numeroSecreto=gerarNumeroAleatorio();
let tentativas=1;
// outra forma de colocar itens dentro do sistema deve ser escrito desta forma
//let titulo = document.querySelector('h1');
//titulo.innerHTML= 'Jogo do número secreto';
//let paragrafo=document.querySelector('p');
//paragrafo.innerHTML='Escolha um número entre 1 e 30'; 
//desta forma a chama-se a funcao para executar ela dentro do sistema 

function exibirMensagemInicial(){
    exibirTextoNatela('h1','Jogo do número secreto');
    exibirTextoNatela('p','Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function exibirTextoNatela(tag,texto){
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
}
//Aqui onde serve para chamar a funcao mas note tem que passar dos parametros 
// aqui deve-se chamar a mensagem fora da funcao
 

// notamos que podemos ver o botao sendo clicado isto vai aparecer no console.log como apresentado no codigo
function verificarChute() {
    //  aqui mostra que o valor colocado no input que esta no html vai ser usado no chute
    let chute=document.querySelector('input').value;
    console.log('O botao foi usado');
    // nesta parte ele vai comparar os numeros que deve ser usado
    if (chute==numeroSecreto){
        exibirTextoNatela('h1', 'Acertou');
        // nesta parte monstra como colocar a mensagem na tela 
        let palavraTentativa= tentativas > 1 ? 'tentativas': 'tentativa';
        // nesta parte se coloca as mensagens
        let mensagemTentativas= `Voce achou o numero secreto com ${tentativas} ${palavraTentativa}`;
        // nesta parte passa a mensagem na tela e foi passado como parametro para o paragrafo 
        exibirTextoNatela('p', mensagemTentativas); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNatela('p', 'O numero secreto é menor');
        }else {
            exibirTextoNatela('p', 'O numero secreto é maior');
        }
        tentativas+=1;
        // chama a funcao para limpa
        limparCampo();
    }
}
// usa-se o return para colocar na varialvel numero secreto 
function gerarNumeroAleatorio(){
    let Numeroescolhido=parseInt(Math.random ()*numeroLimite+1);
    let quantidadeDeElementosNaLista=listaDeNumeroSorteados.length;
    
    if (quantidadeDeElementosNaLista==numeroLimite){
        listaDeNumeroSorteados=[];
    }
    if(listaDeNumeroSorteados.includes(Numeroescolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumeroSorteados.push(Numeroescolhido);
        console.log(listaDeNumeroSorteados);
        return Numeroescolhido;
    }
} 
// funcao para limpa o campo 
function limparCampo(){
    chute= document.querySelector('input');
    chute.value=''; 
}
// nesta parte cria a funcao para reiniciar entretanto ela ja comporta outras funcao
function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); 
}
// 