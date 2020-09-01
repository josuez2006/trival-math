import result from './iconoSetting.js'

const random = (size) => {
    return Math.ceil(Math.random()*size)
}


const generateAcount = () => {
    let randomNumber1
    let randomNumber2
    if(result[0] === 'sumar'){
        randomNumber1 = random(result[4] * 5)
        randomNumber2 = random(result[4] * 5)
        return [randomNumber1 , '+' , randomNumber2].join(' ')
    }
    if(result[1] === 'multiplicar'){
        randomNumber1 = random(result[4])
            randomNumber2 = random(result[4])
            return [randomNumber1 , '*' , randomNumber2].join(' ') 
    }
    if(result[2] === 'restar'){
        randomNumber1 = random(result[4] * 10)
            randomNumber2 = random(result[4] * 10)
            while(randomNumber1 < randomNumber2) {
                randomNumber1 = random(result[4] * 10)
            }
            return [randomNumber1 , '-' , randomNumber2].join(' ')
    }
    if(result[3] === 'dividir'){
        randomNumber1 = random(result[4] * 10)
            randomNumber2 = random(result[4] * 10)
            while(randomNumber1 % randomNumber2 !== 0) {
                randomNumber1 = random(result[4] * 10)
                randomNumber2 = random(result[4] * 10)
            }
            return [randomNumber1 , '/' , randomNumber2].join(' ')
    }
}


let acount = generateAcount()
const newAcount = () => {
    acount = generateAcount()
}
export {acount , random , newAcount}
export default newAcount