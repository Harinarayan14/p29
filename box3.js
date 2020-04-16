class Box3{
  constructor(x, y, width, height ) {
    var options = {
        'restitution':0.8,
        'friction':3.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed<4){
    push();
    translate(this.body.position.x, this.body.position.y);
    fill(0,0,255);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
    else {
    World.remove(world,this.body);
    }
  }
}