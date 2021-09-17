//Mostrar respostas erradas
var rErradas = ['x + 50 = 3', '50 - x = 3', '2x + 50 = 3', 'x = 5', 'x = 53', ' x = 3', '2x + 13 = 5', '13x + 5 = 2', '2x = 5', 'x = 5', 'x = 13', 'x = 2,5', '2m = 50m', '6m + 50 = 4m + 10', 'm + 50 = m + 10', 'm = 40', 'm = 60', 'm = 10', '4x + 15 = 3x + 5', '5 + 4x = 3x', '4x + 5 = 15', '50 + 3 = x', 'x = 10', '13 - 5 = 2x', 'x = 9', '50 + 4m = 10 - 6m', 'm = 50', '3x + 4x = 5', 'x = 25', '3x - 5x = 19', 'x = 50', 'm = 80']

//Mostrar respostas corretas
var rCorretas = ['x + 3 = 50', 'x = 47', '2x + 5 = 13', 'x = 4', '6m + 10 = 4m + 50', 'm = 20', '4x + 5 = 3x + 15', 'x = 10']

//Representa a posição nas 4 alternativas
var alt1 = 0, alt2 = 0, alt3 = 0, alt4 = 0

//posição correta da resposta no vetor
var pRespostas = 0

//Posição correta das alternativas
var pCorretasDasAlt

//Limites do sorteio
var lMin = 0, lMax = 4

function jogar(){
  
  background(perguntas[pRespostas])
  
  if(vida == 0){
    vida = vida - 1
    tela = 0
  }
  
  //1º retangulo
  if(mouseX >= 250 && mouseX <= 478 && mouseY >= 270 && mouseY <= 305){
    fill(255, 255, 255, 100)
    yPeso = 270 -20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(250, 270, 230, 40)
  
  //2º retangulo
   if(mouseX >= 250 && mouseX <= 478 && mouseY >= 320 && mouseY <= 353){
    fill(255, 255, 255, 100)
    yPeso = 320 - 20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(250, 320, 230, 40)
  
  //3º retangulo
   if(mouseX >= 250 && mouseX <= 478 && mouseY >= 370 && mouseY <= 405){
    fill(255, 255, 255, 100)
    yPeso = 370 - 20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(250, 370, 230, 40)
  
  //4º retangulo
  
   if(mouseX >= 250 && mouseX <= 478 && mouseY >= 420 && mouseY <= 455){
    fill(255, 255, 255, 100)
    yPeso = 420 - 20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(250, 420, 230, 40)
  
  textAlign(CENTER)
  
  fill(250, 250, 250) //cor da letra é branco
  textFont(font)
  textSize(20)
  //text(rErradas[alt1], 250, 277, 230, 25)
  //text(rErradas[alt2], 250, 328, 230, 25)
  //text(rErradas[alt3], 250, 376, 230, 25)
  //text(rErradas[alt4], 250, 427, 230, 25)
  
  if(pCorretasDasAlt == 1){
    text(rCorretas[alt1], 250, 277, 230, 25)
  }else{
    text(rErradas[alt1], 250, 277, 230, 25)
  }
  
  if(pCorretasDasAlt == 2){
    text(rCorretas[alt2], 250, 328, 230, 25)
  }else{
    text(rErradas[alt2], 250, 328, 230, 25)
  }
  
  if(pCorretasDasAlt == 3){
    text(rCorretas[alt3], 250, 376, 230, 25)
  }else{
    text(rErradas[alt3], 250, 376, 230, 25)
  }
  
  if(pCorretasDasAlt == 4){
    text(rCorretas[alt4], 250, 427, 230, 25)
  }else{
    text(rErradas[alt4], 250, 427, 230, 25)
  }
  
  imagem(imgPeso, xPeso+100, yPeso, 0.07)

  fill(0, 0, 0)
  text("Vidas: "+vida, 120, 490)
  
}

function sorteio(){
  
  //Sorteio a posição das alternativas
  alt1 = parseInt(random(lMin, lMax))
  alt2 = parseInt(random(lMin, lMax))
  alt3 = parseInt(random(lMin, lMax))
  alt4 = parseInt(random(lMin, lMax))
  
  while(alt2 == alt1){
    alt2 = parseInt(random(lMin, lMax))
  }
  
  while(alt3 == alt2 || alt3 == alt1){
    alt3 = parseInt(random(lMin, lMax))
  }
  
  while(alt4 == alt3 || alt4 == alt2 || alt4 == alt1){
    alt4 = parseInt(random(lMin, lMax))
  }
  
  pCorretasDasAlt = parseInt(random(1, 5))
  
  if(pCorretasDasAlt == 1){
    alt1 = pRespostas
  }
  if(pCorretasDasAlt == 2){
    alt2 = pRespostas
  }
  if(pCorretasDasAlt == 3){
    alt3 = pRespostas
  }
  if(pCorretasDasAlt == 4){
    alt4 = pRespostas
  }
  
}