class SnowStack {
    constructor() {
        this.stack = new Array();
        for( var i = 0 ; i < width / 5 ; i++ ) {
            this.stack.push(createVector(i * 5, height));
        }
        this.stack.push(createVector(width, height));
    }

    checkFallen(s) {
        var yn = false;
        for(var i = 0 ; i < this.stack.length - 1 ; i++ ) {
            var p1 = this.stack[i];
            var p2 = this.stack[i+1];
            var d = p1.dist(p2);
            if( p1.dist(s.p) < d && p2.dist(s.p) < d ) {
                var S = this.triangleArea(p1, p2, s.p);
                var h = 2 * S / p1.dist(p2);
                if( h < s.r ) {
                    yn = true;
                }
            }
        }
        return yn;
    }

    triangleArea(p1, p2, p3) {
        var a = p1.dist(p2);
        var b = p2.dist(p3);
        var c = p3.dist(p1);
        var s = (a + b + c) / 2.0;
        return sqrt(s * (s - a) * (s - b) * (s - c));
    }

    add(s) {
        for(var i = 0 ; i < this.stack.length - 1 ; i++ ) {
            var p1 = this.stack[i];
            var p2 = this.stack[i+1];
            var d = p1.dist(p2);
            if( p1.dist(s.p) < d && p2.dist(s.p) < d ) {
                var r = p1.dist(s.p) / (p1.dist(s.p) + p2.dist(s.p));
                p1.y -= s.r * (1 - r);
                p2.y -= s.r * r;
            }
        }

        for(var i = 0 ; i < this.stack.length - 1 ; i++ ) {
            var p1 = this.stack[i];
            var p2 = this.stack[i+1];
            var h = abs(p1.y - p2.y);
            var w = abs(p1.x - p2.x);
            if( w * 1.3 < h ) {
                p1.y = (p1.y + p2.y) / 2.0;
                p2.y = p1.y;
            }
        }
    }
  
    draw() {
        noStroke();
        fill(255);
        for( var i = 0 ; i < this.stack.length - 1 ; i++ ) {
            var p1 = this.stack[i];
            var p2 = this.stack[i+1];
            quad(p1.x, p1.y, p1.x, height, p2.x + 1, height, p2.x + 1, p2.y);
        }
    }
}
