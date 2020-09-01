import {acount,newAcount} from './acount.js'
import {generateAnsewers} from './ansewers.js'

const question = document.querySelector('.container__question')
const ansewerButtons = document.querySelectorAll('.container__ansewer')
const containerReset = document.querySelector('.container__reset')

const theAcount = () => {
    question.innerHTML = acount
    let {ansewers,rightAnsewerPosition} =  generateAnsewers()
    let ansewersText = ansewers
    let ansewerCount = 0
    ansewerButtons.forEach(ansewerButton => {
        ansewerButton.innerHTML = ansewersText[ansewerCount]
        ansewerCount++
    })
    return [ansewersText,rightAnsewerPosition]
} 
let ansewers = theAcount()
let ansewersText = ansewers[0]
let rightAnsewerPosition = ansewers[1]

ansewerButtons.forEach(ansewerButton => {
    ansewerButton.addEventListener('click' , (e) => {

        if(containerReset.children.length === 0) {
            let ansewersText = ansewers[0]
            let rightAnsewerPosition = ansewers[1]
            // to warn to user if he win or he lost
            const result = document.createElement('DIV')
            if(e.target.textContent == ansewersText[rightAnsewerPosition]) {
                result.textContent = 'Correcto'
                result.classList.add('right')
            }else {
                result.textContent = 'Incorrecto'
                result.classList.add('mistake')
            }
            containerReset.append(result)
    
            const reset = document.createElement('BUTTON')
            reset.textContent = 'Intentar de nuevo'
            reset.classList.add('reset')
            containerReset.append(reset)
    
            reset.addEventListener('click', () => {
                // // update the acount
                question.innerHTML = newAcount()
                result.remove()
                reset.remove()
                ansewers = theAcount()
            })
        }
    })
})
   

