//https://youtu.be/Ct6q_2aeSZQ
let estados=0; 
let contador=0;
let tiempoLimite = 1000;

let imagenes = [5]; 
let fondo; 
let dorso;  

// imagenes random
let img;
let r1;
let r2;
let r3;
let r4;
let r5;
let r6;
let r7;
let r8;
let r9;
let r10;
let r11;
let r12;

//CONDICIONES
let desconocido;

let condicion1;
let condicion2;
let contador2 =0;


//POSICIONES de dorso
let c1 = 25;
let c2 = 225;
let c3 = 425;
let c4 = 625;
let c5 = 825;
let c6 = 1025;

let c7 = 25;
let c8 = 225;
let c9 = 425;
let c10 = 625;
let c11 = 825;
let c12 = 1025;

let T=0;

let d1 = 25;
let d2 = 225;
let d3 = 425;
let d4 = 625;
let d5 = 825;
let d6 = 1025;

let d7 = 25;
let d8 = 225;
let d9 = 425;
let d10 = 625;
let d11 = 825;
let d12 = 1025;

let click=false;

//PELOAD
function preload() {
  fondo = loadImage('img/fondo.jpg');

  imagenes[0] = loadImage('img/1.jpg');

  imagenes[1] = loadImage('img/2.jpg');

  imagenes[2] = loadImage('img/3.jpg');

  imagenes[3] = loadImage('img/4.jpg');

  imagenes[4] = loadImage('img/5.jpg');

  imagenes[5] = loadImage('img/6.jpg');

  dorso = loadImage('img/0.jpg');
}



function setup() {
  createCanvas(1300, 700); 
  
  numeroR = random(2, 4); 
  img =  floor(numeroR); // redondeo para abajo

  ellipseMode(RADIUS);

  //RANDOM controlado
  r1 = img;
  r2 = img+1; 
  r3 = img+2;
  r4 = img+3;
  r5 = img-1;
  r6 = img-3;

  r7 = img;
  r8 = img+1 ;
  r9 = img+2 ;
  r10 = img+3 ;
  r11 = img-1 ;
  r12 = img-3 ;

  if (r4 > 5) {
    r4=1;
  } else if (r6 < 0) {
    r6=0;
  }

  if (r10 > 5) {
    r10=1;
  } else if (r12 < 0) {
    r12=0;
  }
  
}


function draw() {
 
  console.log(condicion1,condicion2); 
  
  contador++;
  
  if (contador % 2 ) {
   click=false;  // Clik
  }

  if (estados == 0) {
    tiempoLimite=1000;
    background(10);
    textSize(80);
    fill(255);
    textAlign(CENTER);
    text("Memoria de Tostadas", width/2, height/2);
    fill(255,0,0);
    ellipse(width/2, 500, 100, 100);
    textSize(60);
    fill(0);
    text("Play", width/2, 510);

    let ApreteElBoton = dist(mouseX, mouseY, width/2, 500);

    if (ApreteElBoton < 100 && click==true) {
      estados =1;
      contador=0;
    }
  }


  if (estados==1) {
    image(fondo, 0, 0, width, height);
    Carta();
    text("Tiempo" + tiempoLimite, width/2, 670)
      if (contador>=50) {   //pos original del dorso
      tiempoLimite--;
      T+=10;
      Dorso();
    }
    if (tiempoLimite<0) {
        estados=4;
    }
  }

  if (estados == 2) {

    background(10);
    textSize(80);
    fill(255);
    textAlign(CENTER);
    text("Bien Hecho!", width/2, height/2);
    fill(255);
    ellipse(500, 500, 80, 80);
    ellipse(800, 500, 80, 80);
    textSize(30);
    fill(0);
    text("Volver \n a intentar", 500, 490)
      text("Creditos", 800, 510)


      let ApreteElBoton1 = dist(mouseX, mouseY, 500, 500);

    let ApreteElBoton2 = dist(mouseX, mouseY, 800, 500);

    if (ApreteElBoton1 < 80 && click==true) {

      d1 = 25;
      d2 = 225;
      d3 = 425;
      d4 = 625;
      d5 = 825;
      d6 = 1025;

      d7 = 25;
      d8 = 225;
      d9 = 425;
      d10 = 625;
      d11 = 825;
      d12 = 1025;

      estados =0;
      contador=0;
    }


    if (ApreteElBoton2 < 80 && click==true) {
      estados=3;
    }
  }
  if (estados == 4) {

    background(10);
    textSize(80);
    fill(255);
    textAlign(CENTER);
    text("Vuelve a Intentarlo", width/2, height/2);
    fill(255);
    ellipse(500, 500, 80, 80);
    fill(255);
    ellipse(800, 500, 80, 80);
    textSize(30);
    fill(0);
    text("Volver \n a intentar", 500, 490)
      text("Creditos", 800, 510)


      let ApreteElBoton1 = dist(mouseX, mouseY, 500, 500);

    let ApreteElBoton2 = dist(mouseX, mouseY, 800, 500);

    if (ApreteElBoton1 < 80 && click==true) {
      tiempoLimite=1000;
      d1 = 25;
      d2 = 225;
      d3 = 425;
      d4 = 625;
      d5 = 825;
      d6 = 1025;

      d7 = 25;
      d8 = 225;
      d9 = 425;
      d10 = 625;
      d11 = 825;
      d12 = 1025;

      estados =0;
      contador=0;
    }


    if (ApreteElBoton2 < 80 && click==true) {
      estados=3;
    }
  }


  if (estados == 3) {
    background(10);
    textSize(80);
    fill(255);
    textAlign(CENTER);
    text("Laura Ocampo", width/2, height/2);
    fill(255);
    ellipse(width/2, 500, 100, 100);
    textSize(50);
    fill(0);
    text("Reiniciar", width/2, 510);

    let ApreteElBoton = dist(mouseX, mouseY, width/2, 500);

    if (ApreteElBoton < 100 && click==true) {

      d1 = 25;
      d2 = 225;
      d3 = 425;
      d4 = 625;
      d5 = 825;
      d6 = 1025;

      d7 = 25;
      d8 = 225;
      d9 = 425;
      d10 = 625;
      d11 = 825;
      d12 = 1025;


      estados =0;
      contador=0;
    }
  }
}

function mousePressed() {
  click=true;
}
