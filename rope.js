class Rope {
    constructor(bodyA,pointB){
        var options={bodyA:bodyA,
            pointB:pointB,
            length:100,
            stiffness:0.04
        }
        this.chain=Matter.Constraint.create(options)
        World.add(world,this.chain)
        this.pointB=pointB
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position
        var pointB=this.pointB
        strokeWeight(5)
        stroke(255)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

    }
    

    
}