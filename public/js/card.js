
// these are the variables you can use as inputs to your algorithms
// console.log(fxhash)   // the 64 chars hex number fed to your algorithm
// console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// this code writes the values to the DOM as an example
// const container = document.createElement("div")

// let femaleAudioTracks = [
//   './assets/audio/MondoLoopsForestKingdom/Ancient Map [Master].mp3',
//   './assets/audio/MondoLoopsForestKingdom/Desert Winds [Master].mp3',
//   './assets/audio/MondoLoopsForestKingdom/Lofi Lullaby [Master] .mp3',
//   './assets/audio/MondoLoopsForestKingdom/Luthien_s Song [Master] .mp3',
//   './assets/audio/MondoLoopsForestKingdom/Overgrown Piano [Master] .mp3',
//   './assets/audio/MondoLoopsForestKingdom/Savoured Breath [Master] .mp3',
//   './assets/audio/MondoLoopsForestKingdom/The Lasting Memory [ Master ].mp3',
//   './assets/audio/MondoLoopsForestKingdom/The Road Goes Even On [Master] .mp3',
//   './assets/audio/MondoLoopsForestKingdom/Visions in the swamp [Master] .mp3',
// ]

let audioTracks = [
  './assets/audio/TerenceMcKennaSpeaks.m4a',
  './assets/audio/MariaSabinaYouAreTheMedicine.m4a',
]

const hash = document.querySelector('.hash')
const canva = document.querySelector('canvas')
const imgname = document.querySelector('.imgname')
const hue = document.querySelector('.hue')
const fungiverseH = document.querySelector('.fungiverse')
const content = document.querySelector('.content')
const card = document.querySelector('.card_inner')
const face = document.querySelector('.face')
const back = document.querySelector('.back')
const borda = document.querySelector('.borda')
const subcontainer_back = document.querySelector('.subcontainer_back')

const pattern2 = document.getElementById('pattern2')

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
  handleStart()
});


hash.innerHTML = fxhash
let healer, avatar, healerAgeString, audioTrack

// RANDOM VALUES
let healerAge = Math.ceil(fxrand()*100)
let healerHue = Math.ceil(fxrand()*360)
let mask = "mask_wave" + Math.ceil(fxrand()*4)
hue.innerHTML = "h" + healerAge
face.style.backgroundColor = "hsl("+healerHue+",20%,30%)"
back.style.backgroundColor = "hsl("+healerHue+",20%,30%)"
subcontainer_back.style.backgroundColor = "hsl("+healerHue+",20%,5%)"
subcontainer_back.classList.add(mask)
pattern2.classList.add('round')
// canva.classList.add(round)
// borda.style.backgroundColor = "hsl("+healerHue+",20%,30%)";
back.style.opacity = "0.9"
hue.style.color = "hsl("+healerHue+",20%,30%)"
hue.style.opacity = "0.8"
hash.style.opacity = "1"
hash.style.color = "white"
content.style.color = "hsl("+healerHue+",70%,50%)"

if (healerAge < 18) {
  avatar = 'woman'
  healerAgeString = 'young-maria'
  healer = Math.ceil(fxrand()*2)
  audioTrack = audioTracks[Math.floor(fxrand()*audioTracks.length)]
}
else if (healerAge >= 18 && healerAge < 54) {
  avatar = 'woman'
  healerAgeString = 'maria'
  healer = Math.ceil(fxrand()*4)
  audioTrack = audioTracks[Math.floor(fxrand()*audioTracks.length)]
}
else if (healerAge >= 54 && healerAge <= 90) {
  avatar = 'man'
  healerAgeString = 'terence'
  healer = Math.ceil(fxrand()*4)
  audioTrack = audioTracks[Math.floor(fxrand()*audioTracks.length)]
} 
else if (healerAge > 90 && healerAge <= 95) {
  avatar = 'bee-faced-mushroom'
  healerAgeString = 'bee-faced-mushroom'
  healer = ''
  audioTrack = audioTracks[Math.floor(fxrand()*audioTracks.length)]
} 
else {
  avatar = 'stone-mushroom'
  healerAgeString = 'stone-mushroom'
  healer = ''
  audioTrack = audioTracks[Math.floor(fxrand()*audioTracks.length)]
}
let img = document.getElementById('fungihealer')
img.src = './assets/healers/' + healerAgeString + healer + '.png'
imgname.innerHTML = healerAgeString + healer + '.png'
img.classList.add(mask)

var styleElem = document.createElement('style');
styleElem.innerHTML = `
#fungihealer {
filter: hue-rotate(${healerHue}deg);
}
`;
document.head.appendChild(styleElem);

let fungiverses = [
  `I am the ${avatar} I was just born.`,
  `I am the ${avatar} who only fell.`,
  `I am the ${avatar} who waits.`,
  `I am the ${avatar} who examines.`,
  `I am the ${avatar} who looks inward.`,
  `I am the ${avatar} who looks underwater.`,
  'I am the sacred swimmer. Because I can swim in the great.',
  `I am the moon ${avatar}.`,
  `I am the ${avatar} who flies.`,
  `I am the ${avatar} aerolito.`,
  `I am the ${avatar} constellation huarache.`,
  `I am the ${avatar} constellation cane.`,
  `I am the star ${avatar}, God. Because I've been touring the places since its origin.`,
  `I am the ${avatar} of the breeze.`,
  `I am the fresh dew ${avatar}.`,
  `I am the ${avatar} of the dawn.`,
  `I am the ${avatar} of twilight.`,
  `I am the ${avatar} who sprouts.`,
  `I am the torn ${avatar}.`,
  `I am the ${avatar} who cries.`,
  `I'm the crazy ${avatar}.`,
  `I am the ${avatar} who makes sound.`,
  `I am the drummer ${avatar}.`,
  `I am the trumpeter ${avatar}.`,
  `I am the violinist ${avatar}.`,
  `I am the ${avatar} who rejoices. Because I am the sacred clown.`,
  `I am the stone ${avatar} of the sun.`,
  `I am the ${avatar} daylight.`,
  `I am the ${avatar} who spins.`,
  `I am the ${avatar} of heaven.`,
  `I am the good ${avatar}.`,
  `I am the ${avatar} spirit because I can enter and I can leave in the realm of death.`,
]

let fungiverse = fungiverses[Math.floor(fxrand()*fungiverses.length)]
let audioElement

fungiverseH.innerHTML = fungiverse

let waveNum = 100 + fxrand()*1000
let wavePeriod = fxrand()*10+fxrand()*100

audioElement = new Audio(audioTrack)

let play = true

document.body.addEventListener('keydown', (e) =>{
  let duration = audioElement.duration
  if (e.code == 'KeyS') {
    if (play) {
      audioElement.play()
      console.log('playing audio',duration)
      play = false
    } else {
      audioElement.pause()
      console.log('pausing audio',duration)
      play = true
    }
  }
})

function startup() {
  const el = document.getElementById('canvas');
  console.log('Initialized.');
}

function handleStart() {
  if (play) {
    audioElement.play()
    console.log('playing audio')
    play = false
  } else {
    audioElement.pause()
    console.log('pausing audio')
    play = true
  }
}

document.body.addEventListener("DOMContentLoaded", startup);


window.$fxhashFeatures = {
  "Wave number": waveNum,
  "Wave period": wavePeriod,
  "Avatar Image": healerAgeString + healer + '.png',
  "Avatar Hue": healerAge,
  "Fungi Verse": fungiverse,
  "Card border": mask
}

console.log('============================\nFUNGAL AVATARS vol. I\n============================\n')
console.log('Avatar Image: ' + healerAgeString + healer + '.png')
console.log('Audio: ' + audioTrack)
console.log('Avatar Hue:' + healerAge)
console.log('Fungiverse:' + fungiverse)
console.log('Card border: ' + mask)
console.log('Wave number: ' + waveNum)
console.log('Wave period: ' + wavePeriod)