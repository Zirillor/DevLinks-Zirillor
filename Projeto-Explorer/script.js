function toggleMode() {
  const html = document.documentElement
  //Esse comando resume todo o "if" que fiz em baixo

  html.classList.toggle("light")

  /*
  if (html.classList.contains('light')) {
    html.classList.remove('light') 
    } else {
      html.classList.add('light')
    }
  */

  //Pegar a tag img
  const img = html.querySelector(".avatar img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver em light mode, mudar a imagem para light
    img.setAttribute("src", "./assets/avt-1por1-praia.jpg")
    img.setAttribute("alt", "Murillo sério de óculos escuros na praia")
  } else {
    // se não estiver em light mode, voltar para a imagem padrão
    img.setAttribute("src", "./assets/avt-1por1-dark.jpg")
    img.setAttribute("alt", "Murillo sorrindo de moletom preto")
  }
}
