class Obstaculo {

  constructor() {
    this.aguja =  loadImage("img/Aguja_P.png");
    this.mano =  loadImage("img/Mano_soltando_aguja.png");
    this.x = (random(width));
    this.y = -(random(0, height));
    this.anch =10;
    this.alt = 200;
    this.vel = 0.8;
    this.oleadas =0;
  }

  actualizar() { 
    this.y += this.vel;
    if (this.y >= height) {
      this.reiniciar();
    }
  }

  dibujar() { //Método
    this.actualizar();
    push();
    stroke(1);
    image(this.mano, this.x, -110, 300, 300);
    image(this.aguja, this.x, this.y, this.anch, this.alt);
    pop();
  }

  reiniciar() { 
    this.x = (random(width));
    this.y = -(random(0, height));
    this.tam =80;
    this.vel = 0.9;
    this.oleadas++;
  }
  
  reiniciarOleada(){
  this.oleadas=0;
  }
}
