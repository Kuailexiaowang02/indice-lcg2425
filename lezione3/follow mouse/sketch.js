let canvasXMax=400;
let canvasYMax=400;
function setup() {
  createCanvas(canvasXMax,canvasYMax);
  background(220);
}

function draw() {

  textSize(15);
  let string_toprint="Mouse x="+mouseX+ ", y="+mouseY;
  //text(string_toprint, 20,20);
  strokeWeight(1);
  line(0,mouseX,canvasXMax,mouseY);
  //feedback tasto mouse sinistro
  //disegnare la linea gialla se schiacciamo il mouse
  //p5--> true, se il mouse e' schiacciato,
  //altrimenti e' false
  if(mouseIsPressed == true){
    if(mouseButton == RIGHT){
      background(220);
    }
    //coloriamo di giallo
    stroke ("yellow");
  }else{

    stroke("black");
  }
    //altrimenti nero
  
}
