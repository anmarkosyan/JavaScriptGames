//alert("hello")

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");
//drew graphics using canvas,in this case rectangles,
//if you want to add some colors do it first

//at first clear rectangle for changed positions
ctx.clearRect(0,0,800,600);

ctx.fillStyle = "#f00";
ctx.fillRect(20,20,100,100);

ctx.fillStyle = "#00f"
ctx.fillRect(370,260,50,50);