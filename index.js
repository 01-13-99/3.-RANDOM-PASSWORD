const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")

let lengthPassword = 15

function randomItem(){
  let getRandomCharacter = Math.floor(Math.random()*characters.length)
  return characters[getRandomCharacter]
}

function createPassword(){
  let getPassword = " "

  for(let i = 0; i < lengthPassword; i++){
    getPassword += randomItem()
  }

  return getPassword 
}


let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
  firstPassword.textContent = createPassword()
  secondPassword.textContent = createPassword()
})