class mango
{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2

            
            }
        
        this.body=Bodies.circle(x,y,r/5, options)
       // this.x=x,
       // this.y=y,
        this.r=r/2;
        this.image=loadImage("sprites/mango.png")
        World.add(world, this.body);

    }
    display()
    {
            
            var paperpos=this.body.position;        

            push()
            translate(paperpos.x, paperpos.y);
            imageMode(CENTER)
            strokeWeight(0);
            fill("yellow")
            image(this.image,0,0,this.r, this.r);
            pop()
            
    }

}
