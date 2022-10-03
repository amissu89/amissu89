// import Breath from './breath.js'
// export default class Breath5 extends Breath{
//     constructor(type, long, count){
//         super(type, long, count)

//         this.initElement()
//     }

// }

console.log('breath-5.js!!!')

const canvas = document.getElementById('canvas_5')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 600
let countdown = 3
ctx.font = '48px serif';

console.log({'width' : canvas.width, 'height' : canvas.height})

const centerX = canvas.width/2
const centerY = canvas.height/2

let introPromise = new Promise(function(resolve, reject){
    for(let i= 3; i != -1; i--){
        setTimeout(function(){
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.fillText(countdown.toString(), centerX, centerY)
            if(countdown == 0){
                resolve()
            }
            countdown--
        }, i* 1000)
    }
})

let size = 50
introPromise.then(function(){
    console.log('resolve')
    ctx.clearRect(0,0, canvas.width, canvas.height)
    //원을 점진적으로 키우면서 5.5초간 그리기
    drawCircle(ctx, size)
    //원을 점진적으로 줄이면서 5.5초간 그리기
}).catch(function(){
    console.log('reject')
}).finally(function(){
    console.log('finally')
})

function drawCircle(ctx, r){
    ctx.beginPath()
    ctx.arc(centerX, centerY, r, 0, Math.PI*2, true)
    ctx.stroke()
}