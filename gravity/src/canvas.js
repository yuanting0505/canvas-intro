// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Ball(x, y, dy, radius, color, ay) {
    this.x = x
    this.y = y
    this.dy = dy
    this.radius = radius
    this.color = color
    this.ay = ay
}

Ball.prototype.update = function() {
    if(this.y + this.radius > innerHeight) {
        this.dy = -this.dy * 0.97
    } else {
        this.dy += this.ay
    }
    this.y += this.dy
    this.draw()
}

Ball.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

// Implementation
let balls
function init() {
    balls = []

    for (let i = 0; i < 5; i++) {
        let x = Math.random() * innerWidth
        let y = Math.random() * innerHeight
        let dy = Math.random() * 5
        let radius = Math.random() * 50
        let color = getRandomColor()
        let ay = 1
        var ball = new Ball(x, y, dy, radius, color, ay);
        balls.push(ball);
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    balls.forEach((ball) => {
     ball.update();
    });
}

init()
animate()
