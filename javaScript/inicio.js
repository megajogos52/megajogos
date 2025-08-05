function pesquisar() {
  var valorPesquisa = document.getElementById('termo').value.toLowerCase();
  valorPesquisa = valorPesquisa.replace(/ /g, "-");
  console.log(valorPesquisa);

  const jogos = document.querySelectorAll('.jogo');

  jogos.forEach(jogo => {
    // Remove todos primeiro
    jogo.style.display = 'none';

    // Se a div contém a classe pesquisada, mostra
    if (jogo.classList.contains(valorPesquisa)) {
      jogo.style.display = 'block';
    }

    if (valorPesquisa === "") {
      jogo.style.display = 'block';
    }

  });

}

function mostrar(nome) {
  esconderTodos();
  mudarTitulo(nome);
  var elementos = document.getElementsByClassName(nome);
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block';
  }
}

function esconderTodos() {
 var elementos = document.querySelectorAll('.apps, .jogos');
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'none';
  }
}

function mudarTitulo(nome){
  var titulo = document.getElementById('titulo');

  titulo.textContent = (nome + ' disponíveis').toUpperCase();
}