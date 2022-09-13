let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100
canvas.height = window.innerHeight - 100

let imgObs = new Image()
imgObs.src = './cactus.png'
let imgDino = new Image()
imgDino.src = './dinosaur.png'

/**
 * Q. 점프 여러번 금지?
Q. 공룡이 달리는 것처럼 보이게?
Q. 배경 다가오는건?
Q. 장애물이 나타나는 간격을 랜덤하게?
Q. 점수표기는?
Q. 시간 지날 때 점수도 오르는 기능은?
 */
let dino = {
    x : 10, 
    y : 200,
    width : 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green'
        //ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(imgDino, this.x, this.y)
    },
    moveX(){
        x += 1
    }
}

class Obstacle{
    constructor(){
        this.x = 500
        this.y = 200
        this.width = 50
        this.height = 50
    }

    draw() {
        ctx.fillStyle = 'red'
        //ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(imgObs, this.x, this.y)
    }
}

let timer = 0
let obstacles = []
let jump = false
let jumpTimer = 0
let animation
function everyFrame(){
    //실행횟수는 모니터 fps에 따라 다름
    animation =  requestAnimationFrame(everyFrame)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //dino.x++;
    if(jump){
        dino.y--
        jumpTimer++
    }
    
    if(jump == false){
        if(dino.y < 200){
            dino.y++
        }
    }

    if(jumpTimer > 80){
        jump = false
        jumpTimer = 0
        console.log(jumpTimer)
    }

    dino.draw()

    if(timer % 120 === 0){
        let obstacle = new Obstacle()
        obstacles.push(obstacle)
    }

    obstacles.forEach( (element, idx, o) =>{
        //x좌표가 0미만이면 제거
        if(element.x < 0){
            o.splice(idx, 1)
        }

        element.x--;

        collision(dino, element)
        element.draw()
    })
    timer++
}

everyFrame()


document.addEventListener('keydown', function(e){
    if(e.code == 'Space'){
        jump = true
    }
})

function collision(dino, obs){
    let diffX = obs.x - (dino.x + dino.width)
    let diffY = obs.y - (dino.y + dino.height)
    if(diffX  < 0 && diffY < 0){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        cancelAnimationFrame(animation)
        console.log()
    }
}