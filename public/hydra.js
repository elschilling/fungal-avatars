var hydra = new Hydra({
  canvas: document.getElementById("hydraCanvas"),
  detectAudio: false
})
 osc(fxrand()*100, .15, 10).rotate(0, 0.1).kaleid(3+fxrand()*10).color(-.1, .1).out()