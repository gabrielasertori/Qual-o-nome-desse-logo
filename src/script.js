//Uma função que, ao apertar o botão, verifica se aquele é o botão certo, se sim, retorna "você acertou no h3", se não, retorna "você errou no h3".

var h3s = [document.querySelector("#b0"), document.querySelector("#b1"), document.querySelector("#b2"), document.querySelector("#b3"), document.querySelector("#b4"), document.querySelector("#b5"), document.querySelector("#b6"), document.querySelector("#b7"), document.querySelector("#b8"), document.querySelector("#b9")]

var botoesTrue = [document.querySelector("#true0"), document.querySelector("#true1"), document.querySelector("#true2"), document.querySelector("#true3"), document.querySelector("#true4"), document.querySelector("#true5"), document.querySelector("#true6"), document.querySelector("#true7"), document.querySelector("#true8"), document.querySelector("#true9")]

var botoesFalse = [document.querySelector("#false0"), document.querySelector("#false1"), document.querySelector("#false2"), document.querySelector("#false3"), document.querySelector("#false4"), document.querySelector("#false5"), document.querySelector("#false6"), document.querySelector("#false7"), document.querySelector("#false8"), document.querySelector("#false9")]

var pontos = 0


function verifica(correto, a) {
      if (correto == true) {
        var escreve = h3s[a]
        escreve.innerHTML = "Correto"
        pontos++
        botoesFalse[a].disabled = true
        botoesTrue[a].disabled = true

        var proximo = h3s[a]
        proximo.scrollIntoView({behavior: "smooth"})

        var resultadoHtml = document.querySelector("#result")
        resultadoHtml.innerHTML = "Pontuação: " + pontos
      } else {
        var escreve = h3s[a]
        escreve.innerHTML = "Incorreto"
        botoesFalse[a].disabled = true
        botoesTrue[a].disabled = true
        var proximo = h3s[a]
        proximo.scrollIntoView({behavior: "smooth"})
      }
}