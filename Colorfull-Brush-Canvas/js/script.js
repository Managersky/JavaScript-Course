const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = "multiply";

let isDrawing = false; //check when mouse is down-click, if is true we can draw
let lastX = 0;
let lastY = 0;
let hsl = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return; //stop fn from running when they aren't moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hsl}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); //start from
    ctx.lineTo(e.offsetX, e.offsetY); //go to
    ctx.stroke();
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hsl++;
    if (hsl >= 360) {
        hsl = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);