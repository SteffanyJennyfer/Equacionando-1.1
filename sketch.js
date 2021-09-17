//Declaração de variaveis globais gerais (tela)
var tela = 0
//Declaração de variaveis de imagens/fontes/sons
var imgFundoMenu, imgFundoLiso, imgBalança, imgPeso, imgCreditos, imgInstruçoes, img1Pergunta, imgWon
var font
var songTriste, songAplausos, songN1, songN2, songCredito, songInstrucoes

//Declaração de imagens da parte de jogar
var n11, n12, n21, n22, n31, n32, n41, n42

//Definições dos botões do menu
var focoBtnMenu = 0

//Tentativas jogadas
var vida = 3

//Variaveis do peso
var xPeso = 80, yPeso = 250

//Mostrar tudo para mim
//var devJogo = true

var perguntas = []
var pPergunta = 0

function mostraCoordenadas(){
  push()
  textSize(15)
  text('(mouseX,mouseY) = (' + mouseX.toFixed(1) + ',' + mouseY.toFixed(1) + ')' ,150,25)
  pop()
}

function imagem(img, x, y, escala){
  let larg = img.width
  let alt = img.height
  image(img, x, y, larg*escala, alt*escala)
}

//Função de carregamento de sons, figuras e fontes
function preload(){
  imgFundoMenu = loadImage('imagens/fundoMenu.png')
  imgFundoLiso = loadImage('imagens/fundoLiso.png')
  imgBalança = loadImage('imagens/balança.png')
  imgPeso = loadImage('imagens/peso.png')
  imgCreditos = loadImage('imagens/creditos.jpg')
  imgInstruçoes = loadImage('imagens/instrucoes.png')
  font = loadFont('fontes/joystix.ttf')
  songAplausos = createAudio('Sons/Aplausos.mp3')
  songN1 = createAudio('Sons/Nivel1Feliz.mp3')
  songN2 = createAudio('Sons/Nivel2Feliz.mp3')
  songCredito = createAudio('Sons/musicCreditos.mp3')
  songInstrucoes = createAudio('Sons/musicInstrucoes.mp3')
  songTriste = createAudio('Sons/AA_triste.mp3')
  
  perguntas[0] = loadImage('imagens/n11pgt.png')
  perguntas[1] = loadImage('imagens/n12pgt.png')
  perguntas[2] = loadImage('imagens/n21pgt.png')
  perguntas[3] = loadImage('imagens/n22pgt.png')
  perguntas[4] = loadImage('imagens/n31pgt.png')
  perguntas[5] = loadImage('imagens/n32pgt.png')
  perguntas[6] = loadImage('imagens/n41pgt.png')
  perguntas[7] = loadImage('imagens/n42pgt.png')
  imgWon = loadImage('imagens/won.png')
}

function setup() {
  createCanvas(550, 500);
  sorteio()
}

function draw() {
  background(127)
  
  //Tela de menu
  if(tela==0){
    menu()
  }
  //Tela de instruções
  else if(tela==1){
    instrucoes()
  }
  //Tela de creditos
  else if(tela==2){
    creditos()
  }
  else if(tela==3){
    jogar()
  }else if(tela==4){
    final()
  }
  //Tudo que deve ser mostrado para mim
 /* if(devJogo){
    mostraCoordenadas()
    
  }*/
}