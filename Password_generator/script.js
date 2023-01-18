const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let passOne = document.querySelector("#pass-1")
let passTwo = document.querySelector("#pass-2")
let incNum = document.querySelector("#inc-num")
let incSym = document.querySelector("#inc-sym")
let warnEl = document.querySelector(".warn")
let passLen  =document.querySelector("#num-len")

function generate() {
    passOne.textContent = " "
    passTwo.textContent = " "
    if(passLen.value>=8 && passLen.value<=20){
        createPass()
        warnEl.style.opacity = "0"
    }else{
        warnEl.style.opacity = "1"
    }
    
 
}

function createPass(){
    if(incNum.checked && !incSym.checked){
        const characters = [...alphabets, ...numbers]
        passGen(characters)
       
    }else if(!incNum.checked && incSym.checked){
        const characters = [...alphabets, ...symbols]
        passGen(characters)
    }else if(incNum.checked && incSym.checked){
        const characters = [...alphabets, ...symbols, ...numbers]
        passGen(characters)
    }else{
        passGen(alphabets)
    }
}

function passGen(characters){
    for(let i=0;i<passLen.value;i++){
        let num1 = Math.floor(Math.random() * characters.length)
        let num2 = Math.floor(Math.random() * characters.length)
        passOne.textContent += characters[num1]
        passTwo.textContent += characters[num2]
    }
}

const pu1 = document.querySelector(".x")
const pu2 = document.querySelector(".y")

passOne.addEventListener("click",()=>{
    pu1.classList.add('active')
    navigator.clipboard.writeText(passOne.innerText)
})

passTwo.addEventListener("click",()=>{
    pu2.classList.add('active')
    navigator.clipboard.writeText(passTwo.innerText)
})

pu1.addEventListener("animationend",()=>{
    pu1.classList.remove('active')
})

pu2.addEventListener("animationend",()=>{
    pu2.classList.remove('active')
})

function copyFromClipboard(pass){
  
}


// Darkmode switch


// const toggleSwitch = document.querySelector('#night-mode');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

// radios.checked===true

const toggleSelector = document.querySelector("#night-mode");

function toggler(e){
    if(e.target.checked){
        document.documentElement.setAttribute("data-theme", "dark")
    }else{
        document.documentElement.setAttribute("data-theme", "light")
    }
}

toggleSelector.addEventListener('change', toggler,false)