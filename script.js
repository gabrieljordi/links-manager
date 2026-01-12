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
    img.setAttribute("alt", "Gabriel Jordi Light Profile Photo")
  } else {
    img.setAttribute("alt", "Gabriel Jordi Profile Photo")
  }
}

let clicks = 0

document.getElementById("clickArea").onclick = () => {
  clicks++

  if (clicks === 7) {
    document.getElementById("secretMessage").style.display = "block"
    document.getElementById("click").style.pointerEvents = "none"
  }
}
