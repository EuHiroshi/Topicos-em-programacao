const test = 'ola.mundo ola todos'

function contaPalavras(texto){
  // Divide o texto em palavras, considerando espaços e pontuação
  let palavras = texto.toLowerCase().match(/\b(\w+)\b/g);
  console.log(palavras)

  
  // Usa um objeto para contar a frequência de cada palavra
  let contagem = palavras.reduce((acumulador, palavra) => {
    acumulador[palavra] = (acumulador[palavra] || 0) + 1;
    return acumulador;
  }, {});
  
  return contagem;
}

console.log(contaPalavras(test))