var canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0.1)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.2)';
c.fillRect(300, 300, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(450, 350, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(150, 400);
c.lineTo(70, 500);
c.strokeStyle = 'red';
c.stroke();

// Arc, Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.stroke();
c.fillStyle = 'rgba(255, 0, 0, 0.2)';
c.fill();

// Random Circles
for (var i = 0; i < 300; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.fillStyle = 'rgba(0, 0, 255, 0.5)';
    c.fill();
}