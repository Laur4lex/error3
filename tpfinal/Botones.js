class Botones {

  constructor() {

  }



  boton( x, y, rad, pantallaSig) {
    fill(183, 174, 96);
    ellipse(x, y, rad, rad);

    this.dentro = dist(mouseX, mouseY, x, y);
    if ( this.dentro < rad ) {
      cuento.pantallas=pantallaSig;
      cuento.camino=0;
    }
  }

  botonRosa( x, y, rad, pantallaSig) {
    fill(214, 168, 187);
    ellipse(x, y, rad, rad);

    this.dentro = dist(mouseX, mouseY, x, y);
    if ( this.dentro < rad ) {
      cuento.pantallas = pantallaSig;
      cuento.camino=0;
    }
  }
}
