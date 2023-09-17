function Dorso() {

  tint(255, T); 
  
  image(dorso, d1, 10, 150, 300);
  image(dorso, d2, 10, 150, 300);
  image(dorso, d3, 10, 150, 300);
  image(dorso, d4, 10, 150, 300);
  image(dorso, d5, 10, 150, 300);
  image(dorso, d6, 10, 150, 300);


  image(dorso, d7, 320, 150, 300);
  image(dorso, d8, 320, 150, 300);
  image(dorso, d9, 320, 150, 300);
  image(dorso, d10, 320, 150, 300);
  image(dorso, d11, 320, 150, 300);
  image(dorso, d12, 320, 150, 300);


  let dentro1 = (mouseX>d1)  &&  (mouseX<d1+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro2 = (mouseX>d2)  &&  (mouseX<d2+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro3 = (mouseX>d3)  &&  (mouseX<d3+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro4 = (mouseX>d4)  &&  (mouseX<d4+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro5 = (mouseX>d5)  &&  (mouseX<d5+150)  &&  (mouseY>10) &&  (mouseY<10+300);
  let dentro6 = (mouseX>d6)  &&  (mouseX<d6+150)  &&  (mouseY>10) &&  (mouseY<10+300);


  let dentro7 = (mouseX>d7)  &&  (mouseX<d7+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro8 = (mouseX>d8)  &&  (mouseX<d8+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro9 = (mouseX>d9)  &&  (mouseX<d9+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro10 = (mouseX>d10)  &&  (mouseX<d10+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro11 = (mouseX>d11)  &&  (mouseX<d11+150)  &&  (mouseY>320) &&  (mouseY<320+300);
  let dentro12 = (mouseX>d12)  &&  (mouseX<d12+150)  &&  (mouseY>320) &&  (mouseY<320+300);

 //Mover Dorso
  if (dentro1 == true && click == true ) {
    d1=3000;
  }

  if (dentro10 == true && click == true ) {
    d10=3000;
  }

  if (dentro2 == true && click == true ) {
    d2=3000;
  }


  if (dentro3 == true && click == true ) {
    d3=3000;
  }


  if (dentro4 == true && click == true ) {
    d4=3000;
  }


  if (dentro5 == true && click == true ) {
    d5=3000;
  }


  if (dentro6 == true && click == true ) {
    d6=3000;
  }

  if (dentro7 == true && click == true ) {
    d7=3000;
  }

  if (dentro8 == true && click == true ) {
    d8=3000;
  }

  if (dentro9 == true && click == true ) {
    d9=3000;
  }

  if (dentro11 == true && click == true ) {
    d11=3000;
  }


  if (dentro12 == true && click == true ) {
    d12=3000;
  }
  
  if(d1==3000 && d2==3000 && d3==3000 && d4==3000 && d5==3000 && d6==3000 && d7==3000 && d8==3000 && d9==3000 && d10==3000 && d11==3000 && d12==3000 ){
   estados=2; //ganaste 
  }
}
