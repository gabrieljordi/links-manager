function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de Perfil de Gabriel Jordi Clara")
  } else {
    img.setAttribute("alt", "Foto de Perfil de Gabriel Jordi")
  }
}

let clicks = 0

document.getElementById("clickArea").onclick = () => {
  clicks++

  // A cada clique, verifica se o número de cliques chegou a 5
  if (clicks === 7) {
    document.getElementById("secretMessage").style.display = "block"
    document.getElementById("click").style.pointerEvents = "none" // Desabilita o botão após 5 cliques
    console.log("Easter egg desbloqueado! 🎉")
  }
}
