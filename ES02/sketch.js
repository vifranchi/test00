let xMax= 400;
let yMax= 600;

let orbitAngle = 0; //rotazione lungo l'orbita
let rotationAngle = 0; // variabile per la rotazione




function setup() {
  createCanvas(xMax, yMax);
  angleMode(RADIANS); // assicura l'uso dei radianti
}

function draw() {
  background("#1b3144ff"); //back

  fill ("50"); //bianco
  strokeWeight(1);
  //stringa da mostrare x,y
  text ("mouseX: " + mouseX + ", mouseY: " + mouseY, 20,20);
 
  
  //stelle NO RANDOM
  noStroke ();
  for(let i=0; i < 60;i++){
    let starX = (i*37) % width + (i%3)*5;
    let starY = ((i*73)% height) + (i%7)
    //stellla a quando i è pari
    if(i % 2 == 0){
      //stella tipo a
    fill (225,225,150);
    ellipse (starX, starY, 3);
  }else if (i % 3 == 0 ){
    //stella b
    fill (225,225,150)
    ellipse (starX, starY,4)
  }else if (i% 3 ==1){
    //stella c
    fill (225,225,150)
    ellipse (starX, starY, 2)
  }
  }


  //STELLA

  let orbitRadius = 400;
  let centerX = width + 150;   // centro orbita esterno a destra del canvas
  let centerY = height / 2;    // centro orbita esterno a destra del canvas

  let xStar = centerX + cos(orbitAngle) * orbitRadius;
  let yStar = centerY + sin(orbitAngle) * orbitRadius;

  fill("#e2df58ff")
  stroke ("#b5b348ff")
  strokeWeight (2)
  push();
  translate(xStar, yStar);
  rotate(rotationAngle); // applica la rotazione su sè stessa
  star(0, 0, 30, 70, 5); //da qui si varia il numero di punte
  pop();
  
  orbitAngle += 0.01; // velocità dell'orbita
  rotationAngle += 0.03; // aggiorna l'angolo ogni frame
}
 
function star(x, y, radius1, radius2, npoints) {

  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();

//algoritmo per stella
  for (let a = 0; a < TWO_PI; a += angle) { //cerchio
    let sx = x + cos(a) * radius2; //punta lunga
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1; //punta interna = 
    sy = y + sin(a + halfAngle) * radius1; //rientro tra le punte
    vertex(sx, sy);
  }
  endShape(CLOSE);


}
