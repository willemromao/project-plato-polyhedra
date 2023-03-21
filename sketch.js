var xMinBotao = 240;
var largBotao = 200;
var xMaxBotao = xMinBotao + largBotao;
var yMinBotao1 = 320;
var altuBotao = 40;
var yMaxBotao1 = yMinBotao1 + altuBotao;

var yMinBotao2 = 380;
var yMaxBotao2 = yMinBotao2 + altuBotao;

var yMinBotao3 = 260;
var yMaxBotao3 = yMinBotao3 + altuBotao;

var yMinBotao22 = 400;
var yMaxBotao22 = yMinBotao22 + altuBotao;

var yMinBotao33 = 350;
var yMaxBotao33 = yMinBotao33 + altuBotao;

var yMinBotao11 =300;
var yMaxBotao11 = yMinBotao11 + altuBotao;

var imagemEducador;
var imagemProgramador;
var imagemFundo;
var font2;
var font3;


var tela = 0;

//jogando:
var img1;
var img2;
var nivel = 1;
var escolhaFase = 0;

function errou1(){
  background(128,128,128)
  textSize(30);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2)
  textFont(font2);
  text("Que pena que você errou. :(", 150, 170);
  text("Não desista, tente outra vez!", 150, 230);
  text("(aperte ESC para voltar)", 170, 450);
}

function venceu(){
  background(128,128,128)
  textSize(30);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2)
  textFont(font2);
  text("Parabéns, você venceu!", 200, 150);
  text("(aperte ESC para voltar)", 200, 450);
  image(img6, 240, 170, 220, 220);
  image(img7, 240, -30, 200, 200);
}

function keyPressed(){
  if(key == "Escape"){
    tela = 0;
  } 
}

function mouseClicked() {
    if (tela == 3 && nivel == 1) {
        if (escolhaFase == 1 || escolhaFase == 3) {
            tela = 4;
        }
      if (escolhaFase == 2) {
            nivel = 2;
        }
    }
  else{
    if(tela == 3 && nivel == 2){
      if(escolhaFase == 2 || escolhaFase == 3){
        tela = 4;
      }
      if(escolhaFase == 1){
        nivel = 3;
      }
    }
  }
  if(tela == 3 && nivel == 3){
    if(escolhaFase == 4 || escolhaFase == 5){
      tela = 4;
    }
    if(escolhaFase == 3){
      nivel = 4;
    }
  }
  else{
    if(tela == 3 && nivel == 4){
      if(escolhaFase == 6 || escolhaFase == 7){
        tela = 4;
      }
      if(escolhaFase == 8){
        nivel = 5;
      }
    }
  }
  if(tela == 3 && nivel == 5){
    if(escolhaFase == 9 || escolhaFase == 11){
      tela = 4;
    }
    if(escolhaFase == 10){
      tela = 5;
    }
  }
}

      
function menuBotao(texto, yMin, yMax, opcao){
  //botaoMenu
  if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax){
      fill(128,128,128);

      if(mouseIsPressed){
         tela = opcao;
         }
    }
    else{
      noFill();
    }
     
    rect(xMinBotao, yMin, largBotao, altuBotao, 0);
    textSize(30);
    fill(255,165,0);
    text(texto, xMinBotao+40, yMin+30);
  
}


function jogoBotao(texto, yMin, yMax, opcao){
  //botaoJogo
  if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax){
      fill(10);
     escolhaFase = opcao;
    }
    else{
      noFill();
    }
     
    rect(xMinBotao, yMin, largBotao, altuBotao, 0);
    textSize(30);
    fill(255,165,0);
    text(texto, xMinBotao+40, yMin+30);
  
}



function fase1(){
  background(128,128,128)
  textSize(36);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2);
  textFont(font2);
  text("Qual é o nome deste", 170, 70);
  text("sólido geométrico?", 185, 110);
  image(img1, 260, 130, 130, 130)
    
  escolhaFase = 0;
    jogoBotao("Cubo", yMinBotao11, yMaxBotao11, 1);
    jogoBotao("Tetraedro", yMinBotao22, yMaxBotao22, 3);
    jogoBotao("Hexaedro", yMinBotao33, yMaxBotao33, 2);

}

function fase2(){
  background(128,128,128)
  textSize(36);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2);
  textFont(font2);
  text("Qual é o nome deste", 170, 70);
  text("sólido geométrico?", 185, 110);
  image(img2, 260, 130, 130, 130)
    
  escolhaFase = 0;
    jogoBotao("Tetraedro", yMinBotao11, yMaxBotao11,1);
    jogoBotao("Pirâmide", yMinBotao22, yMaxBotao22,3);
    jogoBotao("Dodecaedro", yMinBotao33, yMaxBotao33,2);

}

function fase3(){
  background(128,128,128)
  textSize(36);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2);
  textFont(font2);
  text("Qual é o nome deste", 170, 70);
  text("sólido geométrico?", 185, 110);
  image(img3, 260, 130, 130, 130);
    
  escolhaFase = 0;
    jogoBotao("Icosaedro", yMinBotao11, yMaxBotao11,3);
    jogoBotao("Pentaedro", yMinBotao22, yMaxBotao22,5);
    jogoBotao("Circoedro", yMinBotao33, yMaxBotao33,4);

}

function fase4(){
  background(128,128,128)
  textSize(36);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2);
  textFont(font2);
  text("Qual é o nome deste", 170, 70);
  text("sólido geométrico?", 185, 110);
  image(img4, 260, 130, 130, 130)
    
  escolhaFase = 0;
    jogoBotao("Pentágono", yMinBotao11, yMaxBotao11,6);
    jogoBotao("Octaedro", yMinBotao22, yMaxBotao22,8);
    jogoBotao("Sextaedro", yMinBotao33, yMaxBotao33,7);

}

function fase5(){
  background(128,128,128)
  textSize(36);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2);
  textFont(font2);
  text("Qual é o nome deste", 170, 70);
  text("sólido geométrico?", 185, 110);
  image(img5, 260, 130, 130, 130)
    
  escolhaFase = 0;
    jogoBotao("Nonaedro", yMinBotao11, yMaxBotao11,9);
    jogoBotao("Megaedro", yMinBotao22, yMaxBotao22,11);
    jogoBotao("Dodecaedro", yMinBotao33, yMaxBotao33,10);

}

function instrucoes(){
  background(imagemFundo,220)
  textSize(60);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2);
  textFont(font2);
  text("Instrucões:", 190, 70);
  textSize(20);
  text("1º Para ser um sólido de Platão, o poliedro também precisa ser convexo, todas as faces devem apresentar a mesma quantidade de arestas e todos os vértices devem ser extremidades de uma mesma quantidade de arestas.                                                                                     2º O jogo trata-se de perguntas e respostas.                                                                                                                  3º Com o mouse você seleciona as respostas/opções desejadas e tecla 'ESC' para voltar ao menu.                                                         4º Se o jogador errar uma pergunta ele volta para o inicio, mas se caso acertar, o jogador passa para a próxima pergunta. Seram 5 perguntas no total.", 100, 170, 460);
}

function creditos(){
  background(imagemFundo,220);
  textSize(60);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2);
  textFont(font2);
  text("Créditos:",200, 80);
  fill(255,165,0);
  textSize(18);
  text("FRANCISCO WILLEM", 160, 150);
  textSize(18);
  text("Função: Educador", 180, 180);
  textSize(18);
  fill(255,165,0);
  text("Licenciando em Física pela Universidade Federal do Rio Grande do Norte.", 160, 200, 400, 100);
  textSize(18);
  text("JOÃO EBERT", 205, 330)
  textSize(18);
  fill(255,165,0)
  text("Função: Programador", 180, 360);
  textSize(18);
  text("Bacharelando em Ciências e Tecnologia pela Universidade Federal do Rio Grande do Norte.", 160, 380, 400, 100);
  image(imagemEducador, 20, 160, 130, 130)
  image(imagemProgramador, 20, 330, 130, 130)

}

function preload() {
  imagemEducador = loadImage("wil2.jpg");
  imagemProgramador = loadImage("vai22.jpg");
  font2 = loadFont("font2.ttf");
  img1 = loadImage("cuboPink2.png");
  img2 = loadImage("tetraVerde1.png");
  img3 = loadImage("icosaYel1.png");
  img4 = loadImage("octaBlue1.png");
  img5 = loadImage("dodeRed1.png");
  img6 = loadImage("solidos.jpg");
  img7 = loadImage("coroa1.png");
  font3 = loadFont("pressFont.ttf");
}

function setup() {
  createCanvas(700, 500);
  imagemFundo = loadImage("fund4.jpg")
}

function draw() {
  if(tela == 0){
  background(imagemFundo,220)
  textSize(40);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2);
  textFont(font2);
  text("SÓLIDOS DE PLATÃO", 130, 70);
  textSize(35);
  fill(255,165,0);
  stroke(10);
  strokeWeight(2);
  textFont(font3);
  text("MENU", 270, 200);
    
    textFont(font2);
    menuBotao("Jogar", yMinBotao3, yMaxBotao3, 3);
    menuBotao("Instruções", yMinBotao1, yMaxBotao1, 1);
    menuBotao("Créditos", yMinBotao2, yMaxBotao2, 2);
  }

  
  if(tela == 1){
      instrucoes();
  }
  
  if(tela == 2){
  creditos();
  }
  if(tela == 3){
    if(nivel == 1){
      fase1();
    }
    if(nivel == 2){
      fase2();
    }
    if(nivel == 3){
      fase3();
    }
    if(nivel == 4){
      fase4();
    }
    if(nivel == 5){
      fase5();
    }
  
  }
  if(tela == 4){
    errou1();
  }
  if(tela == 5){
    venceu();
  }
}
