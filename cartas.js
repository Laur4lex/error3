
function Carta() {

  image(imagenes[r8], c1, 10, 150, 300);
  image(imagenes[r10], c2, 10, 150, 300);
  image(imagenes[r12], c3, 10, 150, 300);
  image(imagenes[r11], c4, 10, 150, 300);
  image(imagenes[r9], c5, 10, 150, 300);
  image(imagenes[r7], c6, 10, 150, 300);


  image(imagenes[r1], c7, 320, 150, 300);
  image(imagenes[r3], c8, 320, 150, 300);
  image(imagenes[r4], c9, 320, 150, 300);
  image(imagenes[r2], c10, 320, 150, 300);
  image(imagenes[r5], c11, 320, 150, 300);
  image(imagenes[r6], c12, 320, 150, 300);

  let dentro1 = (mouseX>c1)  &&  (mouseX<c1+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro2 = (mouseX>c2)  &&  (mouseX<c2+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro3 = (mouseX>c3)  &&  (mouseX<c3+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro4 = (mouseX>c4)  &&  (mouseX<c4+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro5 = (mouseX>c5)  &&  (mouseX<c5+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro6 = (mouseX>c6)  &&  (mouseX<c6+150)  &&  (mouseY>10) &&  (mouseY<10+300);


  let dentro7 = (mouseX>c7)  &&  (mouseX<c7+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro8 = (mouseX>c8)  &&  (mouseX<c8+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro9 = (mouseX>c9)  &&  (mouseX<c9+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro10 = (mouseX>c10)  &&  (mouseX<c10+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro11 = (mouseX>c11)  &&  (mouseX<c11+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro12 = (mouseX>c12)  &&  (mouseX<c12+150)  &&  (mouseY>320) &&  (mouseY<320+300);

//Seguir Jugando
  if (condicion1 == condicion2 && click == true) {
    condicion1 = desconocido;
    condicion2 = desconocido;
    
  }
  
//Volver a empezar
  if (condicion1 < condicion2 || condicion1 > condicion2) {
    contador2++;
    
    if (contador2 >= 20 && contador2>30) {
      condicion1 = desconocido;
      condicion2 = desconocido;
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
    }
  }


  // Tomar el valor del arreglo y transladarlo a la variable condicion

  if (dentro1 == true && click == true ) {
    condicion1 = r8;
  }

  if (dentro10 == true && click == true ) {
    condicion2 = r2;
  }

  if (dentro2 == true && click == true ) {
    condicion1=r10
  }


  if (dentro9 == true && click == true ) {
    condicion2=r4;
  }


  if (dentro3 == true && click == true ) {
    condicion1 = r12;
  }

  if (dentro12 == true && click == true ) {
    condicion2=r6;
  }



  if (dentro4 == true && click == true ) {
    condicion1=r11;
  }


  if (dentro11 == true && click == true ) {
    condicion2=r5;
  }

  if (dentro5 == true && click == true ) {
    condicion1=r9;
  }


  if (dentro8 == true && click == true ) {
    condicion2=r3;
  }


  if (dentro6 == true && click == true ) {
    condicion1=r7;
  }

  if (dentro7 == true && click == true ) {
    condicion2=r1;

  }
}
