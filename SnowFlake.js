const MIN_RADIUS = 2;
const MAX_RADIUS = 5;
  
const MAX_HORIZONTAL_SPEED = 0.5;
  
const MIN_FALL_SPEED = 1;
const MAX_FALL_SPEED = 2;
  
const MIN_INTERVAL =  50;
const MAX_INTERVAL = 200;
  
class SnowFlake {
    constructor() {
        this.timeStep = 0;
        this.p = createVector(random(width), 0);
        this.v = createVector(random(-MAX_HORIZONTAL_SPEED, MAX_HORIZONTAL_SPEED),
                        random(MIN_FALL_SPEED, MAX_FALL_SPEED));
        this.r  = random(MIN_RADIUS, MAX_RADIUS);
        this.interval = random(MIN_INTERVAL, MAX_INTERVAL);
    }

    move() {
        this.timeStep++;
        this.p.add(this.v);
        while( this.p.x     < 0 ) { this.p.x += width; }
        while( width < this.p.x ) { this.p.x -= width; }
        if( this.timeStep % this.interval == 0 ) {
            this.v.x = random(-MAX_HORIZONTAL_SPEED, MAX_HORIZONTAL_SPEED);
        }
    }
  
    draw() {
        noStroke();
        fill(255);
//        stroke(255);
//        fill(0);
        ellipse(this.p.x, this.p.y, this.r * 2, this.r * 2);
    }
}

