let nTriangle = 20;
let pelotas = [];
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < nTriangle; i++) {
    pelotas[i] = new RandomWalek(i);
  }
}

function draw() {
  for (let i = 0; i < nTriangle; i++) {
    pelotas[i].update(t);
    pelotas[i].display();
  }
  t += 0.001;
}

// _________________________________
// ______Classes____________________
// _________________________________


// ______Random walker______________

class RandomWalek {
  constructor(_name) {
    this.red = random(0, 100);
    this.green = random(100, 255);
    this.blue = random(50, 150);

    this.pos = createVector(width / 2, height / 2);
    this.pos2 = createVector(width / 3, height / 3);
    this.pos3 = createVector(width / 4, height / 4);
    this.speed = createVector(random(-3, 3), random(-3, 3));

    print('Hola! soy la pelota' + this.name);
  }

  update(_t) {

    this.speed.rotate(map(noise(_t), 0, 1, -0.5, 0.5));
    this.pos.add(this.speed);
  }

  display() {
    stroke('rgba*255,150,0,0.1)');
    fill(this.red, this.green, this.blue);
    triangle(this.pos.x, this.pos.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);

  }
}

