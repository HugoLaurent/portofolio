const navButton = document.querySelectorAll("li");
const insideTest = document.querySelector('li').innerText.split();
const result = document.querySelector('li');



for (let i = 0; i < navButton.length; i++) {
    const test = navButton[i].innerText.split();
}

const test = navButton[1].innerText.split();
console.log(test);

insideTest.innerText = "";
let i = 0;



function ajoutDeLettre() {
  if(i < result.innerText){
    result.style.color = "red"
  i++;
  } 
}



setInterval(function(){
  ajoutDeLettre();
}
, 3000 )