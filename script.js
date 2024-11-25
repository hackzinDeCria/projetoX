const storyData = {
  start: {
    text: "Escolha sua jornada: para qual cidade deseja viajar?",
    image: "inicio.jpg",
    buttons: [
      { text: "Rio de Janeiro", action: "rio" },
      { text: "Amazonas", action: "amazonas" }
    ]
  },
  rio: {
    text: "Você começa sua jornada no Rio de Janeiro, subindo o Pico da Tijuca ao amanhecer para encontrar a primeira pista.",
    image: "rio.jpg",
    buttons: [
      { text: "Procurar a pista no topo do pico", action: "topo" },
      { text: "Desistir e voltar para casa", action: "start" }
    ]
  },
  topo: {
    text: "No topo do Pico da Tijuca, você encontra uma antiga inscrição apontando que a próxima pista está localizada no Amazonas.",
    image: "topo.jpg",
    buttons: [{ text: "Seguir para o Amazonas", action: "amazonas" }]
  },
  amazonas: {
    text: "No Amazonas, a busca pela cidade perdida se intensifica. Você se depara com um rio bifurcado.",
    image: "amazonas.jpg",
    buttons: [
      { text: "Seguir pelo rio à esquerda", action: "esquerda" },
      { text: "Seguir pelo rio à direita", action: "direita" }
    ]
  },
  direita: {
    text: "O rio à direita termina em uma área pantanosa. Apesar de belas vistas, não há sinais da cidade perdida aqui.",
    image: "pantano.jpg",
    buttons: [{ text: "Retornar e tentar o outro rio", action: "esquerda" }]
  },
  esquerda: {
    text: "Retornando e escolhendo o rio à esquerda, você finalmente encontra a cachoeira escondida e as inscrições que levam à cidade perdida.",
    image: "cachoeira.jpg",
    buttons: [{ text: "Explorar a cidade perdida", action: "fim" }]
  },
  fim: {
    text: "Parabéns! Você encontrou a cidade perdida e completou sua jornada!",
    image: "cidade_perdida.jpg",
    buttons: [{ text: "Jogar novamente", action: "start" }]
  }
};

function nextPage(page) {
  const story = storyData[page];
  document.getElementById("story-text").textContent = story.text;
  document.getElementById("story-image").src = story.image;
  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";
  story.buttons.forEach(button => {
    const btn = document.createElement("button");
    btn.textContent = button.text;
    btn.onclick = () => nextPage(button.action);
    buttonsDiv.appendChild(btn);
  });
}

// Inicia a história
nextPage("start");
