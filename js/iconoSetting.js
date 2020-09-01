import newAcount from './acount.js'
import newTheAcount from './main.js'
let result = ['sumar' , 'multiplicar' , 'restar' , 'dividir',10]
let windowClose = true

// relacionado con la apertura de la ventana
document.querySelector('.header__icon').addEventListener('click' , (e) => {
    let icon = e.target 
    icon.classList.add('header__icon--active')

    const window = e.target.nextElementSibling
    const windowConfim = document.getElementById('windowConfirm')
    const windowCancel = document.getElementById('windowCancel')

    setTimeout(() => {
        window.style.display = 'grid'
    } , 500)

    windowCancel.addEventListener('click' , (e) => {
        e.preventDefault()
        window.style.display = 'none'
        icon.classList.remove('header__icon--active')
        
    })
    
    windowConfim.addEventListener('click' , (e) => {
        e.preventDefault()

        if(windowClose){

            window.style.display = 'none'
            icon.classList.remove('header__icon--active')
            
            result.splice(0,5)
    
            if(window.sumar.checked === true){
                result.push('sumar')
            }else {
                result.push('')
            }
            if(window.multiplicar.checked === true){
                result.push('multiplicar')
            }else {
                result.push('')
            }
            if(window.restar.checked === true){
                result.push('restar')
            }else {
                result.push('')
            }
            if(window.dividir.checked === true){
                result.push('dividir')
            }else {
                result.push('')
            }
            
            if(window.sizeNumber.value !== ''){
                result.push(Number(window.sizeNumber.value))
            }else{
                result.push('')   
            }
            newAcount()
            newTheAcount()
        }
    })

})



//  apertura de ventanas de la ventana
const iconoIteraccion = (element,array,id,type) => {
    const container = document.createElement('DIV')
    container.id = id
    container.classList.add('window__select')

    array.forEach((element,index) => {
        const div = document.createElement('DIV')
        const input = document.createElement('INPUT')
        input.classList.add('window__operation')
        input.setAttribute('type' , type)
        input.id = element
        input.value = element
        if(input.getAttribute('type') === 'radio'){
            input.name ='sizeNumber'
            if(index === 0) {
                input.checked = true
            }
        }else{
            input.checked = true
            input.name = element
        }
        const label = document.createElement('LABEL')
        label.setAttribute('for' , element)
        const textContent = document.createTextNode(element)
        label.append(textContent)

        div.append(input)
        div.append(label)

        container.append(div)
    })

    element.parentElement.append(container)
   
    document.getElementById(id).classList.add('dispel')
    // document.getElementById(id).style.display = 'none'
    let dbclick = false 
    element.addEventListener('click' , () => {
        
        if(!dbclick){
            
            if(id === 'containerSubWindow') {
                windowClose = false
                document.getElementById(id).classList.remove('dispel')
                
                document.getElementById('containerSubWindow2').classList.add('dispel')
                
            }else {
                document.getElementById(id).classList.remove('dispel')

                document.getElementById('containerSubWindow').classList.add('dispel')
            }
            dbclick = true
        }else {
            const span = document.createElement('SPAN')
            if(form.children[1].lastChild.children[0].firstChild.checked === false && 
                form.children[1].lastChild.children[1].firstChild.checked === false &&
                form.children[1].lastChild.children[2].firstChild.checked === false &&
                form.children[1].lastChild.children[3].firstChild.checked === false) {
                 const textContent = document.createTextNode('seleccione alguno')
                 span.append(textContent)
                 span.classList.add('error')
                 form.children[1].lastChild.append(span)
             }else {
                span.remove()
                windowClose = true
                document.getElementById(id).classList.add('dispel')
            
                dbclick = false
            }
        }
    })
}

const iconoOperacion = document.getElementById('iconoOperacion')
const iconoTamaño = document.getElementById('iconoTamaño')
iconoIteraccion(iconoOperacion,['sumar' , 'multiplicar' , 'restar' , 'dividir'],'containerSubWindow','checkbox')
iconoIteraccion(iconoTamaño,[10 , 100 , 1000 , 10000],'containerSubWindow2','radio')


export default result 