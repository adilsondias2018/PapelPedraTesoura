
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

 pontuacao.textContent = pontuacaoComputador
 document.getElementById('pontuacaoComputador').appendChild(pontuacao)

    for (let i = 0; i < figuras.length; i++) {

        console.log ('Fora event click acima ' +   pontuacaoComputador, pontuacaoEmpate, pontuacaoJogador);


        figuras[i].addEventListener('click', (e) => {
            const computador = Math.floor(Math.random() * 3 + 1)
            const escolhaUsario = parseInt(figuras[i].id)
            console.log(computador, escolhaUsario)      
                              

            if ((computador === 1 && escolhaUsario === 3) || (computador === 3 && escolhaUsario === 2) || (computador === 2 && escolhaUsario === 1)) {

               
               
                resultado.innerText = ' O computador venceu !';

                document.getElementById('resultado').appendChild(resultado)
                

                pontuacaoComputador += 1

                console.log(computador, escolhaUsario, pontuacaoComputador)

                // contadorComputador(pontuacaoComputador)



                

            } else if ((computador === 3 && escolhaUsario === 1) || (computador === 2 && escolhaUsario === 3) || (computador === 1 && escolhaUsario === 2)){

                resultado.innerText = ' O usuário venceu';
                document.getElementById('resultado').appendChild(resultado)
                console.log(computador, escolhaUsario)
                pontuacaoJogador += 1
                console.log(computador, escolhaUsario, pontuacaoJogador)                
                // contadorJogagor(pontuacaoJogador)               

            }else if ( computador === escolhaUsario){

                resultado.innerText = ' Empate';
                document.getElementById('resultado').appendChild(resultado)
                pontuacaoEmpate += 1
                // contadorEmpate(pontuacaoEmpate)
            }


               

            console.log ('Final for ' +   pontuacaoComputador, pontuacaoEmpate, pontuacaoJogador);

            
        })

        console.log ('Fora event click abaixo ' +   pontuacaoComputador, pontuacaoEmpate, pontuacaoJogador);

      
            
            
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

contadorEmpate(pontuacaoEmpate)
contadorJogagor(pontuacaoJogador)
contadorComputador(pontuacaoComputador)  


