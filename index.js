var Setadireita = window.document.getElementById("Setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samntha")
var Bruna = window.document.getElementById("Bruna")
var Setaesquerda = window.document.getElementById("Setaesquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    Setaesquerda.style = "display:flex; margin-top:125px"
    Setadireita.style = "display.none"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    Setaesquerda.style = "display:none"
    Setadireita.style = "display:flex"
}

