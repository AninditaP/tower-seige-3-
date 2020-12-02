class Block{
    constructor(x,y,width,heigth,r,g,b){

        var options={
            restitution:0.4,
            friction:0.01
        }
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.r=r;
        this.b=b;
        this.g=g;
        this.body=Bodies.rectangle(x,y,width,heigth,options);
        World.add(world,this.body);
        this.visibility=255;
     
      
    }


    display(){

        if (this.body.speed<4){
            var pos=this.body.position;
            var angle=this.body.angle
            push()
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill(this.r,this.g,this.b);
            rect(0,0,this.width,this.heigth);
            pop()
        }

        else{
            World.remove(world,this.body);
            push();
            var pos1=this.body.position;
            this.visibility = this.visibility-5;
            //tint(255,this.visibility);
            pop();
        }
    }

    score(){
        if(this.visibility<0 && this.visibility>-105){
            score= score+1
        }
    }

}
