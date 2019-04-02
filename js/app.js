$(window).resize(function() {
  if ($(window).width() < 1265) {
    $('.office').css('background-image', "url('images/oval-office.jpg')");
  } else {
    $('.office').css('background-image', "url('images/oval-office2.jpg')")
  }
  if ($(window).width() < 1000) {
    $('.reactions').css('display','none')
  } else {
    $('.reactions').css('display','block')
  }
})

console.log($('.office').width());

$('.restart').on('click', function() {
  document.location.reload()
})


let currentHorizontal = 400;
let currentVertical = 250;
const moveAround = () => {
  let horizontalChange = (Math.floor(Math.random() * 70) - 35);

  if (currentHorizontal > 650 && horizontalChange > 0) {
    horizontalChange = horizontalChange * (0 - 1)
  }
  if (currentHorizontal < 40 && horizontalChange < 0) {
    horizontalChange = horizontalChange * (0 - 1)
  }

  currentHorizontal += horizontalChange;
  let verticalChange = (Math.floor(Math.random() * 70) - 35);
  if (currentVertical > 300 && verticalChange > 0) {
    verticalChange = verticalChange * (0 - 1)
  }
  if (currentVertical < 30 && verticalChange < 0) {
    verticalChange = verticalChange * (0 - 1)
  }
  currentVertical += verticalChange;
  $('#trump').attr('style', `transform:translate3d(${currentHorizontal}px, ${currentVertical}px, 0px)`)
}

{ // PSEUDO

  // As time increases:
  // Hunger must increase
  // exhaustion must increases
  // Boredom must increase
  // Age must increase
  // If any of these properties reach 10, You're Fired!
  // At various set values along the way, reaction box...
  // ...will update


  // When you click buttons
  // Feed button reduces hunger and calls eating trump
  // Goodnight button reduced exhaustion/turns off the lights
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
let gameOver = false;
let sleepTime = 15;
let hungerTime = 10;


const changeReaction = () => {
  let num = Math.floor(Math.random() * 20);
  if (num === 0){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact0.gif')
  } else if (num === 1){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact1.gif')
  } else if (num === 2){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact2.gif')
  } else if (num === 3){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact3.gif')
  } else if (num === 4){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact4.gif')
  } else if (num === 5){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact5.gif')
  } else if (num === 6){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact6.gif')
  } else if (num === 7){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact7.gif')
  } else if (num === 8){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact8.gif')
  } else if (num === 9){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact9.gif')
  } else if (num === 10){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact10.gif')
  } else if (num === 11){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact11.gif')
  } else if (num === 12){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact12.gif')
  } else if (num === 13){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact13.gif')
  } else if (num === 14){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact14.gif')
  } else if (num === 15){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact15.gif')
  } else if (num === 16){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact16.gif')
  } else if (num === 17){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact17.gif')
  } else if (num === 18){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact18.gif')
  } else if (num === 19){
    $('#TV').attr('src', 'images/trumpreactions/trumpreact19.gif')
  }
}


const secondsGoUp = () => {
  seconds++;
  if (seconds % 12 === 0){
    changeReaction();
  }
  render();
}

$('#start').on('click', function() {
  moving = setInterval(moveAround, 400);
  timePassing = setInterval(secondsGoUp, interval)
  $('#cover').remove();
  $('.body').css('display', 'block')
})

const endGame = () => {
if (pauseState === ''){
  clearInterval(timePassing);
  $('.reactions').remove()
  $('#trump').remove()
  gameOver = true;
  $('.office').css("background-image", "url('images/youre-fired.gif')");
  alert(`YOU'RE FIRED! You have reached age ${trump.age}!`)
}
}

const celebrate = () => {
  $('#TV').attr("src", "images/dancing-donald.gif");
  trump.hunger = 0;
  trump.exhaustion = 0;
  trump.boredom = 0;
  alert(`Congratulations! Trump has reached age ${trump.age}!`)
  $('.hunger').css('color', 'gold');
  $('.boredom').css('color', 'gold');
  $('.exhaustion').css('color', 'gold');
}

class President {
  constructor(age, hunger, exhaustion, boredom) {
    this.age = 1;
    this.hunger = 0;
    this.exhaustion = 0;
    this.boredom = 0;
  }
}


const trump = new President();




const increaseAge = () => {
  if (seconds % 20 === 0) {

    trump.age++

  }
  if (trump.age === 3) {
    interval = 500;
  } else if (trump.age === 6) {
    sleepTime = 10;
  } else if (trump.age === 9) {
    hungerTime = 7;
  }
  if (trump.age%10 > 0) {
    pauseState2 = ''
  }
  if (trump.age%10 === 0 && pauseState2 === '') {
    celebrate()
    pauseState2 = 'celebrate';
  }
}

const increaseHunger = () => {
  if (seconds % hungerTime === 0) {

    trump.hunger++
  }
  if (trump.hunger === 10) {
    endGame();
  }
}

const increaseexhaustion = () => {
  if (seconds % sleepTime === 0) {

    trump.exhaustion++
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
  $('#exhaustion').text(trump.exhaustion);
  $('#boredom').text(trump.boredom);
}

const reactions = () => {
  if (seconds % 3 === 0 && pauseState === '') {
    if (trump.hunger === 5 || trump.hunger === 7) {
      $('#TV').attr('src', 'images/hungry-trump.gif')
    } else if (trump.exhaustion === 5 || trump.exhaustion === 7) {
      $('#TV').attr('src', 'images/turn-off-lights.gif')
    } else if (trump.boredom === 5 || trump.boredom === 7) {
      $('#TV').attr('src', 'images/bored-trump.gif')
    }
  }
}

const textAlert = () => {
  if (trump.hunger > 6) {
    $('.hunger').css('color', 'red');
  }
  if (trump.boredom > 6) {
    $('.boredom').css('color', 'red');
  }
  if (trump.exhaustion > 6) {
    $('.exhaustion').css('color', 'red');
  }
}

const resetText = () => {
  if (trump.age < 10) {
    if (trump.hunger < 6) {
      $('.hunger').css('color', 'white');
    }
    if (trump.boredom < 6) {
      $('.boredom').css('color', 'white');
    }
    if (trump.exhaustion < 6) {
      $('.exhaustion').css('color', 'white');
    }
  } else {
    if (trump.hunger < 6) {
      $('.hunger').css('color', 'gold');
    }
    if (trump.boredom < 6) {
      $('.boredom').css('color', 'gold');
    }
    if (trump.exhaustion < 6) {
      $('.exhaustion').css('color', 'gold');
    }
  }
}

const trumpAction = () => {
  if (pause > seconds) {
    if (pauseState === 'sleeping') {
      $('.office').css('background-image', 'url("images/night.jpg")')
      $('body').css('background-image', 'url("images/night.jpg")')
      if (seconds % 3 === 0) {
        $('#trump').attr('src', 'images/newtrumpbed.gif')
      }
    }
    if (pauseState === 'eating') {
      if (seconds % 3 === 0) {
        $('#trump').attr('src', 'images/eating-donald.gif')
      }
    }
  }
}

const evolveTrump = () => {
  if (trump.age >= 10 && pauseState === '') {
    $('#trump').attr('src', 'images/happy-trump.gif')
  }
}

const trumpDefault = () => {
  if (pause === seconds) {
    $('.commands').css('display', 'block');
    $('.office').css('background-image', 'url("images/oval-office.jpg")')
    $('body').css('background-image', 'url("images/gold.jpg")')
    $('#trump').attr('src', 'images/trump.png')
    pauseState = '';
  }
}

const render = () => {
  increaseAge();
  increaseHunger();
  increaseBoredom();
  increaseexhaustion();
  updateData();
  textAlert();
  resetText();
  reactions();
  trumpAction()
  trumpDefault();
  evolveTrump();
}

const sleep = () => {
  $('.commands').css('display', 'none');
  trump.exhaustion -= 2;
  if (trump.exhaustion < 0) {
    trump.exhaustion = 0;
  }
}

$('#feed').on('click', function() {
  if (pauseState === '' && gameOver === false) {
    pause = seconds + 8;
    pauseState = 'eating'
    trump.hunger -= 2;
    if (trump.hunger < 0) {
      trump.hunger = 0;
    }
  }
})

$('#lights').on('click', function() {
 console.log($(window).width());
  if (pauseState === '' && gameOver === false) {

    pause = seconds + 10;
    pauseState = 'sleeping'
    sleep();
  }
})

$('#play').on('click', function() {
  if (pauseState === '' && gameOver === false) {
    trump.boredom -= 5;
    if (trump.boredom < 0) {
      trump.boredom = 0;
    }
    pause = seconds + 7;
    pauseState = 'playing';
    $('#trump').attr('src', 'images/blank.png')
    const num = Math.floor(Math.random() * 4);
    if (num === 0) {
      $('.office').css('background-image', 'url("images/petting-trump.gif")')
    } else if (num === 1) {
      $('.office').css('background-image', 'url("images/trump-golf.gif")')
    } else if (num === 2) {
      $('.office').css('background-image', 'url("images/trump-football.gif")')
    } else if (num === 3) {
      $('.office').css('background-image', 'url("images/trump-basketball.gif")')
    }
  }
})

/*
still to do:

fix command section asthetics/make it look better,
remake TV gif activity to be more varied and random

*/
