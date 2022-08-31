
// let tabButtons = document.querySelectorAll('.tab-button')
// tabButtons.forEach( (element , idx) => {
//     element.addEventListener('click', function(){
//         removeOrange()
//         removeShow()
//         element.classList.add('orange')
//         document.querySelectorAll('.tab-content')[idx].classList.add('show')
//     })
// })

function removeOrange() {
    document.querySelectorAll('.tab-button').forEach(element => {
        element.classList.remove('orange')
    })
}

function removeShow() {
    document.querySelectorAll('.tab-content').forEach(element => {
        element.classList.remove('show')
    })
}

document.querySelector('.list').addEventListener('click', function (e) {
    removeOrange()
    removeShow()

    let idx = parseInt(e.target.dataset.id)

    document.querySelectorAll('.tab-button')[idx].classList.add('orange')
    document.querySelectorAll('.tab-content')[idx].classList.add('show')

})

let car = {
    name : '소나타',
    price : 10000
}

let nodes = document.querySelectorAll('span')
nodes[0].textContent = car.name
nodes[1].textContent = car.price

var pants = [28, 30, 32]
var shirts = [95, 100, 105] 

let selector = document.querySelector('select')
let options = document.querySelectorAll('select')[1]
selector.addEventListener('change', function(){
    console.log(selector.value)
    if(selector.value === '셔츠'){
        options.classList.remove('hide')
    }
    else if(selector.value === '바지'){
        //let pantsOption = '<option> 28 </option> <option> 30 </option>'
        //options.innerHTML = pantsOption        
        options.classList.remove('hide')
        options.innerHTML = ''

        pants.forEach(element => {
            let opt = document.createElement('option')
            opt.textContent = element
            options.append(opt)
        })
    }
    else{
        options.classList.add('hide')
    }
})

let p = document.createElement('p')
p.innerHTML = 'p tag'
document.querySelector('#test').appendChild(p)

let template = '<p> 안녕 </p>'
document.querySelector('#test').insertAdjacentHTML('beforeend', template)


let obj = { name : 'lee', age : 20}
for (var key in obj){
    console.log(`key : ${key}, val : ${obj[key]}`)
}