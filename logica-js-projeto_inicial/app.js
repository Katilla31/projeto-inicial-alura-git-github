alert ("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 160
let numeroSecreto = parseInt (Math.random() * numeroMaximo +1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;


// While significa enquanto, no caso do jogo secreto ao inserir esse comando, significa que estou dizendo que enquanto
// o chute não for igual ao número secreto, as tentativas não irão parar
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}!`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
      if (chute > numeroSecreto) {
          alert (`O número secreto é menor que ${chute}.`);
      } else {
          alert (`O número secreto é maior que ${chute}.`);
     }
     //tentativas = tentativas +1
     tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas >1) {
// alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//  alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
