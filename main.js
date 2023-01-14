const cardMoto = [
    {
      title: "Scooter Elétrica Voltz EV1",
      paragraph:
        "O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
      img: "/assets/imagem1.png",
    },
    {
      title: "Honda CB 500X",
      paragraph:
        "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
      img: "/assets/imagem2.png",
    },
  ];

// definindo uma variavel com estado inicial
let index = 0;
let carouselItems = document.querySelectorAll(".card-item") //seleciona os elementos de classe card-item
let modalCard = document.querySelector("#modal")

// função do botão da direita
goNext = () => {
    if(index === carouselItems.length-1){
        index = 0; //volta pro primeiro elemento caso chegue no final do array
    }
    else{
        index++;
    }

    carouselItems[index].scrollIntoView({behavior: "smooth"});
}

// função do botão da esquerda
goBack = () => {
    if(index === 0){
        index = carouselItems.length-1; //caso tente ir para esquerda no primeiro elemento, ele vai pro último card
    }
    else{
        index--;
    }
    carouselItems[index].scrollIntoView({behavior: "smooth"});
}

showModal = (index) => {
    modalCard.innerHTML = "";
    modalCard.innerHTML = `
    <div class="modal-card">
    <button  onclick="closeModal()"><img src="assets/close-btn.png" alt="Fechar janela"></button>
    <h1>${cardMoto[index].title}</h1>
    <p>${cardMoto[index].paragraph}</p>
    <img src="${cardMoto[index].img}" alt="Foto da Moto">
    <button>Quero Assinar!</button>
    </div>`

    modalCard.style.visibility = "visible";
}

closeModal = () => {
    modalCard.style.visibility = "hidden";
  }