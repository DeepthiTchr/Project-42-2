
class Drop{
    constructor(x,y,radius){
        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(x,y,radius,options);      
        this.radius = radius;
        this.x = x;
        this.y = y;

        World.add(world,this.body);
    }
    //make fall function to add speed 
    fall(speed){
        this.y += speed;
    }
  // display function to give the x,y,radius and color
    display(){
        var pos = this.body.position;
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }
  }