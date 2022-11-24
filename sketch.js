let nPelotas = 100;
let pelotas = [];
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < nPelotas; i++) {
    pelotas[i] = new RandomWalek(i);
  }
}

function draw() {
  for (let i = 0; i < nPelotas; i++) {
    pelotas[i].update(t);
    pelotas[i].display();
  }
  t += 0.01;
}

// _________________________________
// ______Classes____________________
// _________________________________


// ______Random walker______________

class RandomWalek {
  constructor(_name) {
    this.red = random(0, 50);
    this.green = random(100, 255);
    this.blue = random(100, 150);

    this.pos = createVector(width / 2, height / 2);
    this.speed = createVector(random(-5, 5), random(-5, 5));
    this.diametro = random(10, 50);
    print('Hola! soy la pelota' + this.name);
  }

  update(_t) {

    this.speed.rotate(map(noise(_t), 0, 1, -0.5, 0.5));
    this.pos.add(this.speed);
  }

  display() {
    fill(this.red, this.green, this.blue);
    ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);

  }
}

