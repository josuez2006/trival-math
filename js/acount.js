const random = (size) => {
    return Math.ceil(Math.random()*size)
}


const generateAcount = () => {
    let randomNumber1
    let randomNumber2
    const randomSign =  random(4)
    switch(randomSign) {
        case 1 :
            randomNumber1 = random(50)
            randomNumber2 = random(50)
            return [randomNumber1 , '+' , randomNumber2].join(' ')
        case 2 :
            randomNumber1 = random(100)
            randomNumber2 = random(100)
            while(randomNumber1 < randomNumber2) {
                randomNumber1 = random(100)
            }
            return [randomNumber1 , '-' , randomNumber2].join(' ')
        case 3 :
            randomNumber1 = random(10)
            randomNumber2 = random(10)
            return [randomNumber1 , '*' , randomNumber2].join(' ')
        case 4 :
            
            randomNumber1 = random(100)
            randomNumber2 = random(100)
            while(randomNumber1 % randomNumber2 !== 0) {
                randomNumber1 = random(10)
                randomNumber2 = random(10)
            }
            return [randomNumber1 , '/' , randomNumber2].join(' ')
    }
}


let acount = generateAcount()
const newAcount = () => {
    acount = generateAcount()
}
export {acount , random , newAcount}