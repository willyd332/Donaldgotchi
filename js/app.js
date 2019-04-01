$(window).resize(function(){
  if ($(window).width() < 1264) {
    $('.office').css('background-size', 'cover');
  } else {
    $('.office').css('background-size', 'contain')
  }
})


{// PSEUDO

// As time increases:
  // Hunger must increase
  // Sleepiness must increases
  // Boredom must increase
  // Age must increase
// If any of these properties reach 10, You're Fired!
// At various set values along the way, reaction box...
// ...will update


// When you click buttons
  // Feed button reduces hunger and calls eating trump
  // Goodnight button reduced sleepiness/turns off the lights
  // Play button reduces boredom triggers a play reaction


// at a certain age
  // trump will evolve into money trump


// trump must float around the oval office

// at a certain level You get to build a wall and win

}

let timePassing;
let seconds = 0;
const secondsGoUp = () => {
    seconds++;
    console.log(seconds);
}
$('#start').on('click', function(){
  timePassing = setInterval(secondsGoUp, 1000)
  $('#cover').remove();
  $('.body').css('display', 'block')
})



class President {
  constructor(age,hunger,sleepiness,boredom){
    this.age = 0;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
  }
}
