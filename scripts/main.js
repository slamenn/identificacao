let meuTitulo = document.querySelector('h1');
let identificador = document.querySelector('h3');
let identificacaoCorreta = ('Breno', 'Jhonatan');

function defineIdendificacao() {
    let minhaIdentificacao = prompt('Por favor, identifique-se.');
    localStorage.setItem('identificacao', minhaIdentificacao);
}

if(!localStorage.getItem('identificacao')) {
    defineIdentificacao();
  } else {
      if ('identificacao' = identificacaoCorreta) {
        alert('Bem-vindo', + identificacao);
      } else {
        alert('Identificação negada, por favor, retire-se', + identificacao);
      }
  }

  identificador.onclick = function() {defineIdentificacao();
}