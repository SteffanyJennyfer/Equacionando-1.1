function final(){
  
  vida = 3
  background(imgWon)
  
  push()
    stroke(0, 0, 0)
    strokeWeight(3) //Espessura da borda
    fill(255, 255, 0)
    textFont(font)
    textSize(60)
    text('PARABÉNS', 187, 113, 350, 450)
  pop()
  
  //push()
    fill('#FFFFFF')
    rect(80, 275, 250, 150)
    strokeWeight(5)
  //push()
    fill('#000000')
    textFont(font)
    textSize(20)
    text('Você venceu', 110, 305, 250, 150)
    text('todas etapas', 110, 345, 250, 150)
    text('desse desafio!', 110, 385, 250, 150)
  //pop()
  
  push()
  if(mouseX >= 20 && mouseX <= 98 && mouseY >= 476 && mouseY <= 490){
    fill(255, 255, 255, 100)
  }else{
    fill(0, 0, 0)
  }
  
  textAlign(CENTER)
  
  rect(20, 479, 80, 20)
  
  
  fill(250, 250, 250)
  textFont(font)
  textSize(10)
  text('Voltar', 15, 483, 90, 20)
  pop()
}