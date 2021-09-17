function menu(){
  vida = 3
  
  background(imgFundoMenu)
  
  if(mouseX >= 145 && mouseX <= 370 && mouseY >= 274 && mouseY <= 314){
    fill(255, 255, 255, 100)
    yPeso = 274 -20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(145, 270, 230, 40)
  
   if(mouseX >= 145 && mouseX <= 370 && mouseY >= 345 && mouseY <= 375){
    fill(255, 255, 255, 100)
    yPeso = 345 - 20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(145, 345, 230, 40)
  
   if(mouseX >= 145 && mouseX <= 370 && mouseY >= 418 && mouseY <= 455){
    fill(255, 255, 255, 100)
    yPeso = 418 - 20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(145, 420, 230, 40)
  
  textAlign(CENTER)
  
  fill(250, 250, 250) //cor da letra é branco
  textFont(font)
  textSize(30)
  text('Jogar', 180, 274, 170, 40)
  text('Instruções', 180, 349, 170, 40)
  text('Créditos', 180, 424, 170, 40)
  
  imagem(imgPeso, xPeso, yPeso, 0.07)
}