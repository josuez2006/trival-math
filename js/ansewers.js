import {acount,random} from './acount.js'

const generateAnsewers = () => {
    let ansewers = []
    let rightAnsewerPosition = random(3)

    for(let i = 0 ; i < 4 ; i++) {
        
        if(rightAnsewerPosition === i) {
            ansewers.push(rightAnsewer())
        }else {
            ansewers.push(random(100))
        }
    }
    return {ansewers,rightAnsewerPosition}
}


const rightAnsewer = () => {
    // convertirlo de 'n + n' en [n '+' n]
    let acountArray = acount.split(' ')
    acountArray[0] = Number(acountArray[0])
    acountArray[2] = Number(acountArray[2])
    switch(acountArray[1]) {
        case '+' :
            return acountArray[0] + acountArray[2]
        case '-' :
            return acountArray[0] - acountArray[2]
        case '*' :
            return acountArray[0] * acountArray[2]
        case '/' :
            return acountArray[0] / acountArray[2]
    }
}

export {generateAnsewers}