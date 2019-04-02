$(window).resize(function() {
  if ($(window).width() < 1264) {
    $('.office').css('background-size', 'cover');
  } else {
    $('.office').css('background-size', 'contain')
  }
})

$('.restart').on('click', function(){
  document.location.reload()
})


let currentHorizontal = 400;
let currentVertical = 250;
const moveAround = () => {
  let horizontalChange = (Math.floor(Math.random()*70)-35);

  if (currentHorizontal > 370 && horizontalChange > 0) {horizontalChange = horizontalChange * (0-1)}
    if (currentHorizontal > 370 && horizontalChange > 0) {horizontalChange = horizontalChange * (0-1)}
    if (currentHorizontal < 40 && horizontalChange < 0) {horizontalChange = horizontalChange * (0-1)}

  currentHorizontal += horizontalChange;
  let verticalChange = (Math.floor(Math.random()*70)-35);
  if (currentVertical > 230 && verticalChange > 0) {verticalChange = verticalChange * (0-1)}
  if (currentVertical < 30 && verticalChange < 0) {verticalChange = verticalChange * (0-1)}
  currentVertical += verticalChange;
  $('#trump').attr('style', `transform:translate3d(${currentHorizontal}px, ${currentVertical}px, 0px)`)
}



{ // PSEUDO

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

let pauseState2 = '';
let moving;
let pause = 0;
let pauseState = '';
let interval = 750;
let timePassing;
let seconds = 0;

const secondsGoUp = () => {
  seconds++;

  render();
}

$('#start').on('click', function() {
  moving = setInterval(moveAround, 400);
  timePassing = setInterval(secondsGoUp, interval)
  $('#cover').remove();
  $('.body').css('display', 'block')
})

const endGame = () => {
  clearInterval(timePassing);
  $('.reactions').remove()
  $('#trump').remove()
  $('.office').css("background-image","url(/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/youre-fired.gif)");
}

const celebrate = () => {
  $('#TV').attr("src","/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/dancing-donald.gif");
  trump.hunger = 0;
  trump.sleepiness = 0;
  trump.boredom = 0;
  interval = 20;
  alert("Congratulations! Age 10!")
    $('.hunger').css('color', 'black');
    $('.boredom').css('color', 'black');
    $('.sleepiness').css('color', 'black');
}

class President {
  constructor(age, hunger, sleepiness, boredom) {
    this.age = 19;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
  }
}


const trump = new President();




const increaseAge = () => {
  if (seconds % 20 === 0) {

    trump.age++

  }
  if (trump.age === 3) {
    interval = interval/2;
  } else if (trump.age === 6) {
    interval = interval/2;
  } else if (trump.age === 9){
    interval = interval/2;
  }
  if (trump.age === 10 && pauseState2 === ''){
    celebrate()
    pauseState2 = 'celebrate';
  }
}

const increaseHunger = () => {
  if (seconds % 10 === 0) {

    trump.hunger++
  }
  if (trump.hunger === 10) {
    endGame();
  }
}

const increaseSleepiness = () => {
  if (seconds % 15 === 0) {

    trump.sleepiness++
  }
  if (trump.sleep === 10) {
    endGame();
  }
}

const increaseBoredom = () => {
  if (seconds % 7 === 0) {

    trump.boredom++
  }
  if (trump.boredom === 10) {
    endGame();
  }
}

const updateData = () => {
  $('.age').text(trump.age);
  $('#hunger').text(trump.hunger);
  $('#sleepiness').text(trump.sleepiness);
  $('#boredom').text(trump.boredom);
}

const reactions = () => {
  if (seconds % 3 === 0 && pauseState === ''){
  if (trump.hunger === 5 || trump.hunger === 7) {
    $('#TV').attr('src','/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/hungry-trump.gif')
  } else if (trump.sleepiness === 5 || trump.sleepiness === 7) {
    $('#TV').attr('src','/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/turn-off-lights.gif')
  } else if (trump.boredom === 5 || trump.boredom === 7) {
    $('#TV').attr('src','/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/bored-trump.gif')
  }
}
}

const textAlert = () => {
  if (trump.hunger > 6){
    $('.hunger').css('color', 'red');
  }
  if (trump.boredom > 6) {
    $('.boredom').css('color', 'red');
  }
  if (trump.sleepiness > 6) {
    $('.sleepiness').css('color', 'red');
  }
}

const render = () => {
  increaseAge();
  increaseHunger();
  increaseBoredom();
  increaseSleepiness();
  updateData();
  textAlert();
  reactions();
  if (pause > seconds){
    if (pauseState === 'sleeping'){
    $('.office').css('background-image', 'url(/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/night.jpg)')
    $('body').css('background-image', 'url(/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/night.jpg)')
      if (seconds % 3 === 0){
    $('#trump').attr('src','/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/newtrumpbed.gif')
  }
  }
    if (pauseState === 'eating'){
        if (seconds % 3 === 0){
      $('#trump').attr('src','/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/eating-donald.gif')
    }
    }
  }
  if (pause === seconds) {
    $('.commands').css('display', 'block');
    $('.office').css('background-image', 'url(/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/oval-office.jpg)')
    $('body').css('background-image', 'url(/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/gold.jpg)')
    $('#trump').attr('src','/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/trump.png')
    pauseState = '';
  }
  if (trump.age >= 7 && pauseState === ''){
    $('#trump').attr('src','/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/happy-trump.gif')
  }
}

const sleep = () => {
  $('.commands').css('display', 'none');
  trump.sleepiness -= 2;
  if (trump.sleepiness < 0){
    trump.sleepiness = 0;
  }
}

$('#feed').on('click', function(){
  if (pauseState === '') {
  pause = seconds + 8 ;
  pauseState = 'eating'
  trump.hunger -= 2;
  if (trump.hunger < 0){
    trump.hunger = 0;
  }
}
})

$('#lights').on('click', function(){

  if (pauseState === ''){

    pause = seconds + 10;
  pauseState = 'sleeping'
  sleep();
}
})

$('#play').on('click', function() {
  if (pauseState === ''){
    trump.boredom -= 5;
    if (trump.boredom < 0){
      trump.boredom = 0;
    }
  pause = seconds + 7;
  pauseState = 'playing';
  $('#trump').attr('src','/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/blank.png')
  const num = Math.floor(Math.random() * 4);
  if (num === 0) {
    $('.office').css('background-image', 'url(/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/petting-trump.gif)')
  } else if (num === 1) {
    $('.office').css('background-image', 'url(/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/trump-golf.gif)')
  } else if (num === 2) {
    $('.office').css('background-image', 'url(/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/trump-football.gif)')
  } else if (num === 3) {
    $('.office').css('background-image', 'url(/Users/peterdinneen/general-assembly/Tamagotchi/Tomagotchi/images/trump-basketball.gif)')
  }
}
})
