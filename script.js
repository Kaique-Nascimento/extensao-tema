var mudar = false;
var estado = document.getElementById("estado");
var botao = document.getElementById("mudacor");
botao.addEventListener("click", function() {
  if (!mudar) {
    chrome.tabs.executeScript({
      code: 'var elements = document.getElementsByTagName("*"); for (var i = 0; i < elements.length; i++) { elements[i].style.color = "white"; elements[i].style.backgroundColor = "black"; document.getElementsByTagName("img").style = "background-color:white"}'
    });
    mudar = true;
    estado.innerText = "Tema Escuro";
  } else {
    chrome.tabs.reload();
    mudar = false;
    estado.innerText = "Tema Claro";
  }
      /*
else{
    chrome.tabs.executeScript({
        code: 'var elements = document.getElementsByTagName("*"); for (var i = 0; i < elements.length; i++) { elements[i].style.color = "black"; elements[i].style.backgroundColor = "white"}'
      });
}
*/
});
