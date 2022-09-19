const audio1 = new Audio('./assets/audio/TerenceMcKennaSpeaks.m4a')
const audio2 = new Audio('./assets/audio/MariaSabinaYouAreTheMedicine.m4a')
if (fxrand() > .5) {
  audio1.play()
  audio1.loop = true
} else {
  audio2.play()
  audio1.loop = true
}