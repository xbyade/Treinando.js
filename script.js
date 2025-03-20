let adivinheN = Math.floor(Math.random() * 10) + 1;
let palpite = 0;

while(palpite !== adivinheN){
    palpite = parseInt(prompt("Digite um numero de 1 a 10"))

    if(palpite === adivinheN){
        console.log(`parabens voce acertou, o numero é: ${adivinheN}`)
        document.body.innerHTML = `Parabéns! Você acertou, o número é: <strong>${adivinheN}</strong>`;
    }else{
        console.log(`Mais sorte na proxima!`);
    }
}