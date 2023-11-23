document.addEventListener('DOMContentLoaded', function () {
    const titleElement = document.querySelector('.ud-hero-title');
    const text = titleElement.innerText;
    titleElement.innerText = '';

    function typeWriterEffect(index) {
      if (index < text.length) {
        titleElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
          typeWriterEffect(index);
        }, 100); // Ajuste o valor do intervalo conforme necessário
      }
    }

    // Inicie o efeito de máquina de escrever quando a página carregar
    typeWriterEffect(0);
  
// Adicione o próximo caractere a cada 100 milissegundos (ajuste conforme necessário)
addNextCharacter();

// Chame a função a cada 100 milissegundos (ajuste conforme necessário)
setInterval(addNextCharacter, 10);
});

  