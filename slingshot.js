class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
        pointB: pointB,
            stiffness: 0.04,
            length:1
        }
        
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
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        stroke(255);
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
    }
    }
    
}