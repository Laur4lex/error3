class Fondos{
 constructor(){
   //Cargar img
    this.Fondo = loadImage("img/Fondo.jpg");
    this.inicio = loadImage("img/Play.jpg");
    this.perdiste = loadImage("img/perdiste.jpg");
    this.creditos = loadImage("img/Creditos.jpg");
}

//Métodos de la clase fondos
F_Inicio() { 
    image(this.inicio, 0, 0, width, height);
  }

   F_Juego() {
    image(this.Fondo, 0, 0, width, height);
  }

   F_Perdiste() {
    image(this.perdiste, 0, 0, width, height);
  }

   Creditos() {
    image(this.creditos, 0, 0, width, height);
  }



}
