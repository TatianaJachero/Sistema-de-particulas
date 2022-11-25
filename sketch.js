let nTriangle = 80;
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
  t += 0.005;
}

// _________________________________
// ______Classes____________________
// _________________________________


// ______Random walker______________

class RandomWalek {
  constructor(_name) {
    this.red = random(70, 250);
    this.green = random(0, 255);
    this.blue = random(150, 150);

    this.noiseShift = random(100);

    this.pos = createVector(width / 2, height / 2);
    this.pos2 = createVector(width / 3, height / 3);
    this.pos3 = createVector(width / 4, height / 4);
    this.speed = createVector(random(-3, 3), random(-3, 3));

    this.pos4 = createVector(width / 2, height / 2);
    this.pos5 = createVector(width / 2, height / 2);
    this.pos6 = createVector(width / 5, height / 5);
    this.speed = createVector(random(-5, 5), random(-5, 5));



    print('Hola! soy la pelota' + this.name);
  }

  update(_t) {

    this.speed.rotate(map(noise(_t + this.noiseShift), 0, 1, -0.5, 0.5));
    this.pos.add(this.speed);
  }

  display() {
    stroke('rgba*255,150,0,0.1)');
    fill(this.red, this.green, this.blue);
    triangle(this.pos.x, this.pos.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);

    stroke('rgba*255,15,110,0.01)');
    fill(this.red, this.green, this.blue);
    triangle(this.pos4.x, this.pos4.y, this.pos5.x, this.pos5.y, this.pos6.x, this.pos6.y);

  }
}

