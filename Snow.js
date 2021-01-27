class Snow {
    constructor() {
        this.snow = new Array();
    }

    checkFallen(stack) {
        for( var i = 0 ; i < this.snow.length ; i++ ) {
            var s = this.snow[i];
            if( stack.checkFallen(s) ) {
                this.snow.splice(i, 1)
                stack.add(s);
            }
        }
    }

    newFlake(interval) {
        if( random(interval) < 1.0 ) {
            this.snow.push(new SnowFlake());
        }
    }

    draw() {
        for( var i = 0 ; i < this.snow.length ; i++ ) {
            var s = this.snow[i];
            s.move();
            s.draw();
        }
    }
}
