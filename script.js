// gerar nunero aleatorios para o pc pegar

let computador = Math.floor( Math.random() *3 +1)
console.log(computador)

// receber numero informador pelo usuários

const button = document.getElementById("armazeneButton")
button.onclick = function () {
   let numeroJogador = parseInt ( document.getElementById("input").value)
    let computador = Math.floor( Math.random() *3 +1)


    console.log(computador, numeroJogador)
    analiseResultado(computador, numeroJogador)
}


function analiseResultado( ){


}


// Quais as formas de inputs existentes no JavaScript

/*
    metodo input

    

*/





// gerar numeros aletoros para o jogara 

// relacionar os numeros do elementos

// forma do usuario escolher

// resulado de quem ganhou ou deu empate
