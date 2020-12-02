class Polygon{
    constructor(bodyA,pointB){
        var option={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.05,
          length:1
        }
   
        this.rope=Constraint.create(option);
        this.pointB=pointB;
        World.add(world,this.rope) 
    }

    fly(){
        this.rope.bodyA=null;
    }

    attach(body){
        this.rope.bodyA=body
    }

    display(){

     if(this.rope.bodyA)   {
      var pos=this.rope.bodyA.position
      var pos2=this.rope.pointB
      stroke("blue");
      line(pos.x,pos.y,pos2.x,pos2.y);
     }
    }
}
