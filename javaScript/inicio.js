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

      if(valorPesquisa === ""){
        jogo.style.display = 'block';
      }
      
    });
    
  }