var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, bike1_img, bike2_img, bike3_img, bike4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  bike1_img = loadImage("../images/Screen Shot 2021-02-22 at 3.49.21 PM.png");
  bike2_img = loadImage("../images/Screen Shot 2021-02-22 at 3.49.21 PM.png");
  bike3_img = loadImage("../images/Screen Shot 2021-02-22 at 3.49.21 PM.png");
  bike4_img = loadImage("../images/Screen Shot 2021-02-22 at 3.49.21 PM.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
