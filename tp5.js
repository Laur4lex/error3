//https://youtu.be/veChKAhc2hA
let estados;
let fondos;
let obstaculo;
let mosca;
function setup() {
estados = new Pantallas();
fondos = new Fondos();
obstaculo = new Obstaculo();
mosca = new Mosca();

createCanvas(600, 600)
}


function draw() {
 estados.dibujar();
 
 }

 function keyTyped() {
    
    if (key === 'r') {
        mosca.reiniciar();
      estados.reiniciar_();
    } else if (key === 'c') {
        mosca.reiniciar();
      estados.Creditos();
    }

    

  }
