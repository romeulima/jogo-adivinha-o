const button = document.querySelector(".button")
const inputNumber = document.querySelector(".input")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const button2 = document.querySelector('.other-button')
let randomNumber = String(Math.round(Math.random() * 10))
let attempts = 1


button.addEventListener('click', handleTryClick)

button2.addEventListener('click', handleResetClick)


function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function handleResetClick(){
    randomNumber = String(Math.round(Math.random() * 10))
    toggleScreen()
    attempts = 1
} 

function handleTryClick(e){
    e.preventDefault()
    switch(inputNumber.value){
        case(randomNumber):
            let pluOrSing;
            
            if(attempts == 1){
                pluOrSing = 'a'
            }else{
                pluOrSing = 'as'
            }

            screen2.querySelector('h2').innerText = `Acertou em ${attempts} tentativ${pluOrSing}`
            toggleScreen()
        break;
        case(""):
            attempts = attempts
            alert("Digite um número, por favor!")
        break;
        default:
            attempts++
    }
        inputNumber.value = ""
}