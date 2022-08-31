
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