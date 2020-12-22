class stone{
    constructor(x,y,width, height){
        var options={isStatic: false}
this.stone=Bodies.rectangle(x,y,width,height,options);

this.width=width;
this.height=height;
this.image = loadImage("sprites/stone.png");
World.add(world,this.stone);
    }

    display() 
    {
      var ges = this.stone.position;
      rectMode(CENTER)
      fill("yellow")  
      noStroke();
     image(this.image,ges.x,ges.y,this.width,this.height);

    }
}