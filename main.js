
// definindo uma variavel com estado inicial
let index = 0;
let carouselItems = document.querySelectorAll(".card-item") //seleciona os elementos de classe card-item

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