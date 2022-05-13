var jhon,jhonCorrendo,jhonPulando,jhonParado,jhonParadoRS,JhonPulandoRS,JhonCorrendoRS;
var fundosp,fundo;
var chao;
var dAtivado = 0;

function preload(){
  jhonCorrendo = loadAnimation ("assets/Jhon correndo 1.png","assets/Jhon correndo 2.png","assets/Jhon correndo 3.png","assets/Jhon correndo 4.png","assets/Jhon correndo 5.png","assets/Jhon correndo 6.png");
  jhonPulando = loadAnimation ("assets/Jhon pulando 2.png","assets/Jhon pulando 3.png","assets/Jhon pulando 4.png","assets/Jhon pulando 5.png","assets/Jhon pulando 6.png");
  jhonParado = loadAnimation ("assets/Jhon parado 1.png","assets/Jhon parado 2.png","assets/Jhon parado 3.png","assets/Jhon parado 4.png","assets/Jhon parado 5.png");
  
  jhonParadoRS = loadAnimation ("assets/Jhon parado 2 RS.png","assets/Jhon parado 4 RS.png","assets/Jhon parado 5 RS.png","assets/Jhon parado 6 RS.png");
  jhonCorrendoRS = loadAnimation ("assets/Jhon correndo RS 1.png","assets/Jhon correndo 3 RS.png","assets/Jhon correndo 4 RS.png","assets/Jhon correndo 5 RS.png");
  jhonPulandoRS = loadAnimation ("assets/Jhon pulando 2 RS.png","assets/Jhon pulando 3 RS.png","assets/Jhon pulando 4 RS.png","assets/Jhon pulando 5 RS.png","assets/Jhon pulando 6 RS.png");
  jhonPulandoRS.frameDelay = 7
  fundo = loadImage ("assets/Fundo.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  fundosp = createSprite (1700,450);
  fundosp.addImage (fundo);
  fundosp.scale = 2
  //adicionando a Animationm de fundo
  jhon = createSprite (200,800)
  jhon.addAnimation ("jhonParadoRS",jhonParadoRS);
  jhon.scale = 2

  chao = createSprite (880,950,2000,80);
  chao.visible = false
  //criando o sprite do jogador


}

function draw() {
  background(GRAY); 

  jhon.velocityY += 1
  
  if (keyDown ("SPACE")){
    jhon.velocityY = -20
    jhon.addAnimation ("jhonPulandoRS",jhonPulandoRS);
    jhon.changeAnimation ("jhonPulandoRS");
  }
  
  if (jhon.collide (chao) && dAtivado == 0){
    //jhon.addAnimation ("jhonParadoRS",jhonParadoRS);
    jhon.changeAnimation ("jhonParadoRS");
  }

  if (keyDown ("D")){
    jhon.velocityX = 2
    jhon.addAnimation ("jhonCorrendoRS",jhonCorrendoRS);
    jhon.changeAnimation ("jhonCorrendoRS");
    dAtivado = 1
  }
  else {
    jhon.velocityX = 0
      }
drawSprites();
}
