// Variables

const mainTitle = document.querySelector("section h1")
const splitText = mainTitle.innerText.split('');
const animationParagraphe = document.querySelector("article p")
const endOfFunction = new Event("endEvent");
const footer = document.querySelector("footer")

mainTitle.innerHTML = '';
let i = 0

// DOM

document.addEventListener("endEvent", () => {
    pAppear();
})

setInterval(function(){
    AjoutDeLettre();
 }
, 100 )
    

// FUNCTION


function AjoutDeLettre(){
    if(i < splitText.length){
        mainTitle.innerHTML += splitText[i];
    i++;
    } else {
        document.dispatchEvent(endOfFunction)
    }
}

function pAppear() {
    animationParagraphe.classList.add("after-animation")
    footer.classList.add('footer-after')
}

// mainTitle.innerHTML = "";
// let i = 0;

// // DOM

// document.addEventListener("endEvent", () => {
//   pAppear(animationParagraphe);
// });

// // INIT

// setInterval(function () {
//   i = AjoutDeLettre(i, mainTitle, splitText);
// }, 100);

// //FUNCTION

// function AjoutDeLettre(counter, titleElement, splitText) {
//   if (counter < splitText.length) {
//     //pour ne plus utiliser i j'utilise counter.
//     //mais pour changer la valeur de i en dehors de la fonction

//     titleElement.innerHTML += splitText[counter];
//     counter++;
//     return counter;
//   } else {
//     document.dispatchEvent(endOfFunction);
//   }
// }

// function pAppear(poragrapheElement) {
//   poragrapheElement.classList.add("after-animation");
// }