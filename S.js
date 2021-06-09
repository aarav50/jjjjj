

class s {
    constructor(x,y,r){
       var options={
           isStatic:false,
        restatution:2,
        fricition:1,
        density:1.2
       }
       
        this.r=24
       
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
    display(){

        var posX,posY
        posY=this.body.position.y
        posX=this.body.position.x
     
        push()
        translate(posX,posY)

        imageMode(CENTER);
     
        image(this.image,0,0,this.r)
        
        pop()
    }
}
