class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
        pointB: pointB,
            stiffness: 0.04,
            length:1
        }
        this.slings1 = loadImage("sling1.png");
        this.slings2 = loadImage("sling2.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
        }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        
        image(this.slings1,200,380);
        image(this.slings2,170,380);
    if(this.sling.bodyA){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke(255);
        strokeWeight(10);
        line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
        line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
        
    }
    }
    
}