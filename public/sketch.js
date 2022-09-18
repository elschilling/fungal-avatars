let sketchHue = 360*fxrand()
let pNum = 4 + Math.floor(fxrand()*6)
let fHeight = 250 + fxrand()*200

function RGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2,
  ];
};

let fD = 5
let pLen
let v = []
let rows = 50, cols = 90
let reverse = false

let pLenSlider, diameterSlider, pNumSlider, pSharpSlider, fHeightSlider
let pLength, diameter, petalNum, pSharpness
let canvas
const cardElem = document.querySelector('.face')
const myArray = cardElem.style.backgroundColor.split(" ")
let hueR = myArray[0].slice(4,6)
let hueG = myArray[1].slice(0,2)
let hueB = myArray[2].slice(0,2)
sketchHue = cardElem.style.backgroundColor

function sketch_flower(p) {
  // console.log('p', p)
  p.setup = function() {
    p.createCanvas(60,60, "WEBGL")
    p.colorMode("HSB")
    p.angleMode("DEGREES")
    p.strokeWeight(1)
  }
  
  p.draw = function() {
    p.background(0,0,0)
    pLen = fD
    drawFlower(fD, pLen, p)
    if (!reverse) {
      fD = fD + .1
      pLen = pLen + .1
    } else {
      fD = fD - .1
      pLen = pLen - .1 
    }
    if (fD > 15) {
      fxpreview()
      reverse = true
    }
    if (fD < 10) {
      reverse = false
    }
  }

}

function drawFlower(fD, pLen, p) {
  // console.log(fD)
  p.beginShape("POINTS")
  for(let theta = 0; theta < rows; theta += 10) {
    for(let phi = 0; phi < cols; phi += .5) {
      // console.log('aaaaa', sketchHue)
      p.stroke(sketchHue)
      let r = (pLen * Math.pow(Math.abs(Math.sin(pNum/2*phi*360/cols)), 1) + fD) * theta/rows
      // let r = Math.abs(Math.sin(fD/10))*20
      // let r = 20
      let x = r * Math.cos(phi*360/cols*fD/400) + 30
      let y = r * Math.sin(phi*360/cols) + 30
      let z = vShape(fHeight, r/100, 0.8, 0.15, 1.5) - 300 + bumpiness(1.5*Math.sin(fD)*5, r/100, 12, phi*Math.sin(fD))
      p.point(x,y,z)
    }
  }
  p.endShape()
}

function vShape(A, r, a, b, c) {
  return A * Math.pow(Math.E, -b * Math.pow(Math.abs(r), c)) * Math.pow(Math.abs(r), a)
}

function bumpiness(A, r, f, angle) {
  return 1 + A * Math.pow(r, 2) * Math.sin(f * angle)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



new p5(sketch_flower, "card")