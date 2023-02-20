const mainTitle = document.querySelector("main h1")
const splitText = mainTitle.innerText.split('');
const animationParagraphe = document.querySelector("article p")
const endOfFunction = new Event("endEvent");

mainTitle.innerHTML = '';
i = 0

titleAppear()

function titleAppear() {
    setInterval(function(){
        AjoutDeLettre();
       
        // setTimeout(function(){
        //     pAppear()
        // }, 3000)
        
    }
    , 100 )
    
}

document.addEventListener("endEvent", () => {
    pAppear();
})


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
}