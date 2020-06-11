class Player{
    constructor(x,y,){
        var options = {
            restitution: 0.4,
            density : 1.0,
            friction : 0.4
        }
        this.body = Bodies.rectangle(x,y,50,50,options)
        this.x = x;
        this.y = y;
        this.width=50;
        this.heigth=50;
        World.add(world,this.body)

    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.heigth)
    }
}