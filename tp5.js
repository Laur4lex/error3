//https://youtu.be/Tl0LX0OClb4
function setup() {
  estados = new Pantallas(); //objeto pan
  createCanvas(600, 600)
}


function draw() {
  estados.dibujar();//variable estado + método dibujar
}

function keyTyped() {
  if (estados.estado == 3) {
    if (key === 'r') {

      estados.reiniciar_();
    } else if (key === 'c') {

      estados.Creditos();
    }
  }
  if (estados.estado == 4) {
    if (key === 'r') {

      estados.reiniciar_();
    }
  }
}
