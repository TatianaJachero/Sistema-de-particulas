let nTriangle = 80;
let triangulos1 = [];
let triangulos2 = [];
let t = 0;
let t2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < nTriangle; i++) {
    triangulos1[i] = new RandomWalek(i);
  }
  for (let i = 0; i < nTriangle; i++) {
    triangulos2[i] = new RandomWalek(i);
  }
  background('rgba(150,0,30,0.2)')
}

function draw() {
  for (let i = 0; i < nTriangle; i++) {
    triangulos1[i].update(t);
    triangulos1[i].display();
  }
  for (let i = 0; i < nTriangle; i++) {
    triangulos2[i].update(t);
    triangulos2[i].display();
  }
  t += 0.01;
  t2 += 0.0001;
}

// _________________________________
// ______Classes____________________
// _________________________________


// ______Random walker______________

class RandomWalek {
  constructor(_name) {
    this.red = random(100, 250);
    this.green = random(0, 25);
    this.blue = random(10, 150);

    this.red2 = random(100, 250);
    this.green2 = random(10, 255);
    this.blue2 = random(50, 150);

    this.t = 0;
    this.tSpeed = random(1);

    this.t2 = 0;
    this.tSpeed2 = random(1);


    this.noiseShift = random(2000);
    this.noiseShift2 = random(1000);

    this.pos = createVector(width / 2, height / 2);
    this.pos2 = createVector(width / 3, height / 3);
    this.pos3 = createVector(width / 2, height / 2);
    this.speed = createVector(random(-3, 3), random(-3, 3));

    this.pos4 = createVector(width / 2, height / 2);
    this.diametro = random(-50, 50);
    this.speed2 = createVector(random(-5, 5), random(-5, 5));



    print('Hola! soy la pelota' + this.name);
  }

  update(_t) {

    this.speed.rotate(map(noise(this.t + this.noiseShift), 0, 1, -0.5, 0.5));
    this.pos.add(this.speed);

    this.t += this.tSpeed;

    this.speed2.rotate(map(noise(this.t2 + this.noiseShift2), 0, 1, -0.5, 0.5));
    this.pos4.add(this.speed2);

    this.t2 += this.tSpeed2;
  }

  display() {
    //se agrega a proposito una llave en stroke para generar un borde blanco
    stroke('rgba}25,15,0,0.5)');
    strokeWeight(1);
    fill(this.red, this.green, this.blue);
    triangle(this.pos.x, this.pos.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);

    stroke('rgba]0,100,150,0.01)');
    fill(this.red2, this.green2, this.blue2);
    ellipse(this.pos4.x, this.pos4.y, this.diametro, this.diametro);

  }
}

