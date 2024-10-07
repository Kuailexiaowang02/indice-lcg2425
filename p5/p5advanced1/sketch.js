let xsize = 400;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //vogliamo disegnare la luna
  fill("yellow");
  stroke("white");
  strokeWeight(8);
  circle(300,75,100);
  //prima della forma desiderata
  //cambiare fill e stroke
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0,200,400,200);
  stroke("yellow");
  //ordine in p5
  strokeWeight(30);
  let xStars_primordiale= 10;
  let yStars_primordiale = 20;
  point( xStars_primordiale, yStars_primordiale);
  let passo=3;
  //for(init;test;update){corpo}
  for(let i=0; i<50; i=i+passo){
    // 0--> y 1--> w  2--> y 3--> w ...
    strokeWeight(i*3);
    if(i%2==0){
      //numeri pari
      //corpo di ramo vero
      stroke("yellow")
    }else{
      //numeri dispari
      //altrimenti questo
      stroke("white")
    }
    point(xStars_primordiale*i,yStars_primordiale+i);
  }
  //Stella polare
  //point(xStars_primordiale+60,30);
   //aggiungiamo un'altra stella
   //point(xStars_primordiale,100);
  //point(75,100);
  //
  fill("white");
  stroke(0);
  strokeWeight(0);
  text("C'era una volta...",200,350);

}
