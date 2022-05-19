var jhon,jhonCorrendo,jhonPulando,jhonParado,jhonParadoRS,JhonPulandoRS,JhonCorrendoRS;
var fundosp,fundo;
var chao;
var dAtivado = 0;
var direcao = 0;
var fundosp2;

function preload(){
  jhonCorrendo = loadAnimation ("assets/Jhon correndo 1.png","assets/Jhon correndo 2.png","assets/Jhon correndo 3.png","assets/Jhon correndo 4.png","assets/Jhon correndo 5.png","assets/Jhon correndo 6.png");
  jhonPulando = loadAnimation ("assets/Jhon pulando 2.png","assets/Jhon pulando 3.png","assets/Jhon pulando 4.png","assets/Jhon pulando 5.png","assets/Jhon pulando 6.png");
  jhonParado = loadAnimation ("assets/Jhon parado 1.png","assets/Jhon parado 2.png","assets/Jhon parado 3.png","assets/Jhon parado 4.png","assets/Jhon parado 5.png");
  jhonPulando.frameDelay = 7
  
  jhonParadoRS = loadAnimation ("assets/Jhon parado 2 RS.png","assets/Jhon parado 4 RS.png","assets/Jhon parado 5 RS.png","assets/Jhon parado 6 RS.png");
  jhonCorrendoRS = loadAnimation ("assets/Jhon correndo RS 1.png","assets/Jhon correndo 3 RS.png","assets/Jhon correndo 4 RS.png","assets/Jhon correndo 5 RS.png");
  jhonPulandoRS = loadAnimation ("assets/Jhon pulando 2 RS.png","assets/Jhon pulando 3 RS.png","assets/Jhon pulando 4 RS.png","assets/Jhon pulando 5 RS.png","assets/Jhon pulando 6 RS.png");
  jhonPulandoRS.frameDelay = 7
  fundo = loadImage ("assets/Fundo.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  fundosp2 = createSprite (5080,450);
  fundosp2.addImage (fundo);
  fundosp2.scale = 2
  
  fundosp = createSprite (1700,450);
  fundosp.addImage (fundo);
  fundosp.scale = 2
  //adicionando a Animationm de fundo
  jhon = createSprite (200,800)
  jhon.addAnimation ("jhonParadoRS",jhonParadoRS);
  jhon.scale = 2
  jhon.addAnimation ("jhonPulandoRS",jhonPulandoRS);
  jhon.addAnimation ("jhonCorrendoRS",jhonCorrendoRS);
  
  jhon.addAnimation ("jhonParado",jhonParado);
  jhon.addAnimation ("jhonPulando",jhonPulando);
  jhon.addAnimation ("jhonCorrendo",jhonCorrendo);
  chao = createSprite (880,950,2000,80);
  chao.visible = false
  //criando o sprite do jogador

  
}

function draw() {
  background(GRAY); 

  jhon.velocityY += 1
  

  
  
  if (keyDown ("SPACE") && direcao == 0 && jhon.y >= 750){
    jhon.velocityY = -20
    
    jhon.changeAnimation ("jhonPulandoRS");
  }

  if (jhon.collide (chao)){
    if (dAtivado == 0 && direcao == 0){

   jhon.changeAnimation ("jhonParadoRS"); 
  }
  
  if (dAtivado == 0 && direcao == 1){
    jhon.changeAnimation ("jhonParado");
  }

  }

  if (keyDown ("D")){
    jhon.x += 5
    camera.position.x = jhon.x
    jhon.changeAnimation ("jhonCorrendoRS");
    dAtivado = 1
    direcao = 0
    
    fundosp.velocityX = -5
    fundosp2.velocityX = -5
  } 
  else {
    dAtivado = 0 
  }
  
  if (keyDown ("A")){
    jhon.x -= 5
    camera.position.x = jhon.x
    jhon.changeAnimation ("jhonCorrendo");
    dAtivado = 1
    direcao = 1
  }
  
  else {
    dAtivado = 0 
  }
  
  if (keyDown ("SPACE") && direcao == 1 && jhon.y >= 750){
    jhon.velocityY = -20
    jhon.changeAnimation ("jhonPulando",jhonPulando)
  
  }

  if (fundosp.x<0) {
  fundosp.x=fundosp.width/2-200;}
  console.log (fundosp.x)
    drawSprites();
}
