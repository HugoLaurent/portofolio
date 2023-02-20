const mainTitle = document.querySelector("main h1")
const splitText = mainTitle.innerText.split('');

mainTitle.innerHTML = '';
i = 0
setInterval(function(){
    AjoutDeLettre();
    setTimeout(function(){
        pAppear()
    }, 3000)
}
  , 100 )

function AjoutDeLettre(){
    if(i < splitText.length){
        mainTitle.innerHTML += splitText[i];
    i++;
    }
}

const animationParagraphe = document.querySelector("article p")

function pAppear() {
    animationParagraphe.classList.add("after-animation")
}