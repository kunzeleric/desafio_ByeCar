//variável auxiliar com informações para a div de detalhes da moto (Saiba mais)
const moreInfo = [
  {
    title: "Scooter Elétrica Voltz EV1",
    paragraph:
      "O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "./assets/imagem1.png",
  },
  {
    title: "Honda CB 500X",
    paragraph:
      "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "./assets/imagem2.png",
  },
];

// Variáveis
let index = 0;
let elementosLista = document.querySelectorAll(".card-moto");
let infoDetail = document.querySelector("#details");

moveList = (position) => {
  index += position;
  console.log(index);
  if (index < 0) index = elementosLista.length - 1;
  else if (index > elementosLista.length - 1) index = 0;

  elementosLista[index].scrollIntoView({ behavior: "smooth" });
};

closeWindow = () => {
  infoDetail.style.visibility = "hidden";
};

knowMore = (index) => {
  infoDetail.innerHTML = "";
  infoDetail.innerHTML = `
    <div class="aux-window">
    <button><img src="assets/close-btn.png" onclick="closeWindow()"/></button>
    <h1>${moreInfo[index].title}</h1>
    <p>${moreInfo[index].paragraph}</p>
    <img src="${moreInfo[index].img}"/>
    <button>Quero Assinar!</button>
    </div>`;

  infoDetail.style.visibility = "visible";
};
