const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var score = 0;
function preload(){
    polygonImage = loadImage("polygon.png")
}
function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground();
    stand1 = new Stand(400,300,200,10);
    stand2 = new Stand(700,200,200,10);
    block1 = new Box(315,275,30,40);
    block2 = new Box(345,275,30,40);
    block3 = new Box(375,275,30,40);
    block4 = new Box(405,275,30,40);
    block5 = new Box(435,275,30,40);
    block6 = new Box(465,275,30,40);
    block7 = new Box(495,275,30,40);

    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    block13 = new Box(480,235,30,40);

    block14 = new Box(345,195,30,40);
    block15 = new Box(375,195,30,40);
    block16 = new Box(405,195,30,40);
    block17 = new Box(435,195,30,40);
    block18 = new Box(465,195,30,40);

    block19 = new Box(360,155,30,40);
    block20 = new Box(390,155,30,40);
    block21 = new Box(420,155,30,40);
    block22 = new Box(450,155,30,40);

    block23 = new Box(670,180,30,40);
    block24 = new Box(700,180,30,40);
    block25 = new Box(730,180,30,40);

    block26 = new Box(685,140,30,40);
    block27 = new Box(715,140,30,40);

    block28 = new Box(700,100,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot = new SlingShot(this.ball,{x:100,y:200})
}
function draw(){
    background("black");
    fill("white");
    text("score: "+ score, 800, 50);
    textSize(20);
    fill("yellow");
    text("drag the ball to destroy the blocks",300,30);
    text("Press space to get a second chance.",300,70);
    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("green");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();

    fill("pink");
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    
    fill("red");
    block19.display();
    block20.display();
    block21.display();
    block22.display();

    fill("purple");
    block23.display();
    block24.display();
    block25.display();

    fill("orange");
    block26.display();
    block27.display();

    fill("cyan");
    block28.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();


    imageMode(CENTER);
    image(polygonImage,ball.position.x,ball.position.y,40,40);
    slingshot.display();
    drawSprites();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball);
    }
}