// const audio1 = new Audio('./assets/audio/TerenceMcKennaSpeaks.m4a')
// const audio2 = new Audio('./assets/audio/MariaSabinaYouAreTheMedicine.m4a')
// let play = true
// document.body.addEventListener('keydown', (e) =>{
//   console.log('ket', e.code)
//   if (e.code = 'KeyS') {
//     if (fxrand() > .5) {
//       if (play) {
//         console.log('play audio1')
//         audio1.play()
//         audio1.loop = true
//         play = true
//       } else {
//         play = false
//       }
//     } else {
//       if (play) {
//         console.log('play audio2')
//         audio2.play()
//         audio2.loop = true
//         play = true
//       } else {
//         play = false
//       }
//     }
//   }
// } )


// let audioElement
// let play = true
// if (fxrand() > .5) {
//   console.log('audio https://www.youtube.com/watch?v=DmlYaIB1nZw')
//   audioElement = new Audio('./assets/audio/MariaSabinaYouAreTheMedicine.m4a');
// } else {
//   console.log('audio https://www.youtube.com/watch?v=MymlzGg0T08')
//   audioElement = new Audio('./assets/audio/TerenceMcKennaSpeaks.m4a');
// }

// document.body.addEventListener('keydown', (e) =>{
//   console.log(e.code)
//   let duration = audioElement.duration
//   if (e.code = 'KeyS') {
//     if (play) {
//       audioElement.play()
//       console.log('playing audio',duration)
//       play = false
//     } else {
//       audioElement.pause()
//       console.log('pausing audio',duration)
//       play = true
//     }
//   }
// })

let song

function sketch_audio(p) {
  p.setup = function() {
    cnv = p.createCanvas(60,60)
    // cnv.mousePressed(() => {
    //   console.log('clicj')
    // }) 
    // p.colorMode("HSB")
    // p.angleMode("DEGREES")
    // p.strokeWeight(1)
  }  
  p.draw = function() {
    p.background(0)
  }
  this.clicked = function() {

  }

}
function preload() {
  song = loadSound('./assets/audio/MariaSabinaYouAreTheMedicine.m4a')
}

function mouseClicked() {
  console.log('aaaaa')
}

new p5(sketch_audio, "audio")