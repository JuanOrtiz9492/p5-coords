const PIXEL_TOLERANCE = 3;

class shape {
    constructor (...args){
        this.coords = [...args]
    }

    isOverVertex(x1,y1, x2, y2, currentX, currentY) {
            const xDiff = x2- x1;
            const yDiff = y2 - y1;
            const m = (yDiff) / (xDiff)
            const b = y1 - (m * x1)
            if(yDiff === 0) {
                console.log('is horizontal')
                const [lower, higher] = x1 < x2 ? [x1 , x2] : [x2, x1];
                return Math.abs(y - y1) < PIXEL_TOLERANCE && currentX > lower && currentX < higher
            } else if (xDiff === 0) {
                const [lower, higher] = y1 < y2 ? [y1 , y2] : [y2, y1];
                return Math.abs(x - x1) < PIXEL_TOLERANCE && currentY > lower && currentY < higher
            }
            const calculatedY = Math.round((m * currentX) + b)
            const calculatedX = Math.round((currentY - b) / m )
            return Math.abs(currentX- calculatedX) < PIXEL_TOLERANCE && (currentY - calculatedY) < PIXEL_TOLERANCE
    }
    
    draw() {
        beginShape()
        this.coords.forEach(coords => {
            const [x, y] = coords
            vertex(x,y)
        });
        endShape(CLOSE);
        this.coords.forEach(coord => {
            const [x, y] = coord
            circle(x,y,8);
        });
    }
}

let myShape = undefined;

function setup() {
    createCanvas(windowWidth -50, windowHeight -100);
    myShape = new shape([30,20], [85,20], [105, 45] , [85,75], [30,75])
  }
  
function draw() {
    myShape.draw()
}

function mouseClicked() {
   console.log(myShape.isOverVertex(mouseX, mouseY))
}

