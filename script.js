
/*  ##### LEGENDA VALORES GERADOS PELO COMPUTADOR
1 - PAPEL
2 - TESOURA
3 - PEDRA

*/
const figuras = document.querySelectorAll('figure')
let pontuacaoComputador = 0
let pontuacaoJogador = 0
let pontuacaoEmpate = 0

let resultado = document.createElement('h3')
let pontuacao = document.createElement('h3')
let escolhaJogador   = document.createElement('h1')
let escolhaComputador   = document.createElement('h1')

    for (let i = 0; i < figuras.length; i++) {
      
        figuras[i].addEventListener('click', (e) => {
            const computador = Math.floor(Math.random() * 3 + 1)
            const escolhaUsario = parseInt(figuras[i].id) 

            if ((computador === 1 && escolhaUsario === 3) || (computador === 3 && escolhaUsario === 2) || (computador === 2 && escolhaUsario === 1)) {
               
                escolhasJogadorComputador(escolhaUsario, computador)
                
               
                resultado.innerText = ' O computador venceu !';

                document.getElementById('resultado').appendChild(resultado)                

                pontuacaoComputador += 1

                console.log(computador, escolhaUsario, pontuacaoComputador)

                contadorComputador(pontuacaoComputador)

            } else if ((computador === 3 && escolhaUsario === 1) || (computador === 2 && escolhaUsario === 3) || (computador === 1 && escolhaUsario === 2)){

                escolhasJogadorComputador(escolhaUsario, computador)
               
                resultado.innerText = ' O usuário venceu';
                document.getElementById('resultado').appendChild(resultado)
                console.log(computador, escolhaUsario)
                pontuacaoJogador += 1
                console.log(computador, escolhaUsario, pontuacaoJogador)                
                contadorJogagor(pontuacaoJogador)               

            }else if ( computador === escolhaUsario){

                escolhasJogadorComputador(escolhaUsario, computador)
                resultado.innerText = ' Empate';
                document.getElementById('resultado').appendChild(resultado)
                pontuacaoEmpate += 1
                contadorEmpate(pontuacaoEmpate)
            }
            
        })
     
    }

function contadorEmpate(pontosAtuis) {

    pontuacao.innerText = pontosAtuis
    document.getElementById('pontuacaoEmpate').appendChild(pontuacao)
}

function contadorJogagor(pontosAtuis) {

    pontuacao.innerText = pontosAtuis
    document.getElementById('pontuacaoJogador').appendChild(pontuacao)
}

function contadorComputador(pontosAtuis) {

    pontuacao.innerText = pontosAtuis
    document.getElementById('pontuacaoComputador').appendChild(pontuacao)
}

function escolhasJogadorComputador(jogador, computador){

                 escolhaJogador.innerText = jogador
                 escolhaComputador.innerText = computador
                document.getElementById('jogador').appendChild(escolhaJogador)
                document.getElementById('computador').appendChild(escolhaComputador)


}





