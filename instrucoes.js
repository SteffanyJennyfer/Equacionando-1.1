function instrucoes(){
  
  background(imgInstruçoes)
  
  if(mouseX >= 20 && mouseX <= 98 && mouseY >= 476 && mouseY <= 490){
    fill(255, 255, 255, 100)
  }else{
    fill(0, 0, 0)
  }
  
  rect(20, 479, 80, 20)
  
  textAlign(CENTER)
  
  fill(250, 250, 250)
  textFont(font)
  textSize(10)
  text('Voltar', 15, 483, 90, 20)
}