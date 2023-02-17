const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não ter tanta certeza.",
  "É decididamente assim, senão assim não será.",
  "Não conte com isso, meu padawan.",
  "Dúvidas, sem!",
  "Pergunte novamente mais tarde, mestre comer, comer faz bem, padawan.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Certamente que sim!!!",
  "Sim, mas pode melhorar.",
  "Definitivamente!",
  "Tudo e mais um pouco!",
  "Minhas fontes dizem que sim!",
  "Estou prevendo que sim!",
  "Adcione mais créditos para continuar a consulta.",
  "Sim, e para não esquecer, O Lula 'ladrão!",
  "Talvez não.",
  "Você tirou a sorte grande!",
  "Essa está difícil é !",
  "Boa, com certeza!", 
  "E será em breve!",
  "Irei consultar outra bola de cristal...",
  "Irei me concentar melhor, volte mais tarde",
  "Serviço temporariamente fora de serviço",
  "Contate o suporte",
  "Para ver o restante, deposite outra ficha",
  "É a Força que está com você!",

]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 7000)
}