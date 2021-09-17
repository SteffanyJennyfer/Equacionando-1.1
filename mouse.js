function mouseClicked(){
  
  if(tela == 0){
    
     //Jogar
  if(mouseX >= 145 && mouseX <= 370 && mouseY >= 274 && mouseY <= 314){
    fill(0, 0, 0)
    
    tela = 3
    sorteio()
    //console.log("jogar")
    
  }else{
    fill(250, 250, 250, 100)
  }
  //instrução
  if(mouseX >= 145 && mouseX <= 370 && mouseY >= 345 && mouseY <= 375){
    
    tela = 1
    songInstrucoes.play()
    //console.log("instrucao")
    
  }
  //créditos
  if(mouseX >= 145 && mouseX <= 370 && mouseY >= 418 && mouseY <= 455){
    
    tela = 2
   songCredito.play()
    
    //console.log("credito")
    
  }
 
    
  }else{
    
    if(tela == 3){
      
      if(mouseX >= 250 && mouseX <= 480 && mouseY>= 270 && mouseY<= 310){
        
        //console.log("cliquei na 1")
        //alternativa 1
        if(pCorretasDasAlt == 1){
          
          pRespostas++
          lMin = lMin + 4
          lMax = lMax + 4
          sorteio( )
          songN1.play()
          
        }else{
          songTriste.play()
          vida = vida - 1
        }
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 320 && mouseY<= 360){
      
      //console.log("cliquei na 2")
      //alternativa 2
      if(pCorretasDasAlt == 2){
        
        pRespostas++
        lMin += 4
        lMax += 4
        sorteio()
        songN2.play()
        
      }else{
        songTriste.play()
        vida = vida - 1
      }
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 370 && mouseY<= 410){
      
      //console.log("cliquei na 3")
      //alternativa 3
      if(pCorretasDasAlt == 3){
        
        pRespostas++
        lMin += 4
        lMax += 4
        sorteio()
        songN1.play()
        
      }else{
        songTriste.play()
        vida = vida - 1
      }
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 420 && mouseY<= 460){
      
      //console.log("cliquei na 4")
      //alternativa 2
      if(pCorretasDasAlt == 4){
        
        pRespostas++
        lMin += 4
        lMax += 4
        sorteio()
        songN2.play()
        
      }else{
        songTriste.play()
        vida = vida - 1
      }
      
    }
    
      if(pRespostas == 8){
          tela = 4
          pRespostas = 0
          lMin = 0
          lMax = 4
          alt1 = 0
          alt2 = 0
          alt3 = 0
          alt4 = 0
          vida = 3
      }
      
  }
  
}
  
  //Voltar
  if((tela == 1 || tela == 2 || tela == 4) && mouseX >= 20 && mouseX <= 98 && mouseY >=476 && mouseY <= 490){
    
    tela = 0
    songInstrucoes.stop()
    songCredito.stop()
  }
  
}