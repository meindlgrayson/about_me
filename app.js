'use strict';

var answerOne = prompt('Are you having a good day?', 'Y/N').toUpperCase();

var elseAnswer = 'Too stupid for and yes/no question? Honestly nobody is surprised.';

var elseLog = 'idiot';

var yesCount = 0;

var noCount = 0;

if (answerOne === 'YES' || answerOne === 'Y') {
  alert('That\'s fanfuckingtastic..');
  console.log('Answered "Yes"');
  yesCount += 1;
} else if (answerOne === 'NO' || answerOne === 'N') {
  alert('Welcome to the club, princess.');
  console.log('Answered "No"');
  noCount += 1;
} else {
  alert(elseAnswer);
  console.log(elseLog);
};

var answerTwo = prompt('Does anyone love you?', 'Y/N').toUpperCase();

if (answerTwo === 'YES' || answerTwo === 'Y') {
  alert('I don\'t belive you');
  console.log('Answered "Yes"');
  yesCount += 1;
} else if (answerTwo === 'NO' || answerTwo === 'N') {
  alert('We know.');
  console.log('Answered "No"');
  noCount += 1;
} else {
  alert(elseAnswer);
  console.log(elseLog);
};

var answerThree = prompt('How fun! A two-part question! First: Would you consider yourself attractive?', 'Y/N').toUpperCase();

if (answerThree === 'YES' || answerThree === 'Y') {
  alert('Oh...');
  console.log('Answered "Yes"');
  yesCount += 1;
  var answerThreeA = prompt('Second: Do you think you should have your eyes checked?', 'Y/N').toUpperCase();
  if (answerThreeA === 'YES' || answerThreeA === 'Y') {
    alert('You\'re probably right');
    console.log('Answered "Yes"');
    yesCount += 1;
  } else if (answerThreeA === 'NO' || answerThreeA === 'N') {
    alert('Think again cupcake..');
    console.log('Answered "No"');
    noCount += 1;
  } else {
    alert(elseAnswer);
    console.log(elseLog);
  };
} else if (answerThree === 'NO' || answerThree === 'N') {
  alert('Good, good.. Best not to lie to yourself, ya know?')
  noCount += 1;
  var answerThreeB = prompt('Second: Were you ever attractive?', 'Y/N').toUpperCase();
  if (answerThreeB === 'YES' || answerThreeB === 'Y') {
    alert('How the mighty have fallen!');
    console.log('Answered "Yes"');
    yesCount += 1;
  } else if (answerThreeB === 'NO' || answerThreeB === 'N') {
    alert('Din\'t think so. Just curious.');
    console.log('Answered "No"');
    noCount += 1;
  } else {
    alert(elseAnswer);
    console.log(elseLog);
  };
} else {
  alert(elseAnswer);
  console.log(elseLog);
};

alert('And they told you this was going to be a game..');
alert('Well if it matters to you for some reason or another, you answered "Yes" ' + yesCount + ' times and "No" ' + noCount + ' times.');
alert('Oh shit, wait. Here, I\'ve got a real game, now.');


for(var gameAttempt = 4; gameAttempt > 0; gameAttempt--) {
  var gameAnswer = prompt('Try to guess a number between 1 and 10', 'you\'ve got ' + gameAttempt + ' attempts');
  if(Number(gameAnswer) === 7) {
    alert('Congrats, you won a game requiring 0 skill.');
    gameAttempt = 0;
  } else if((gameAnswer < 7 || gameAnswer > 7) && gameAttempt > 1 && gameAnswer < 11) {
    alert('Nah. Try again.');
  } else if (gameAnswer > 10 || (gameAttempt === 1 && gameAnswer !== 7)) {
    alert('It was 7. The answer was 7.');
    gameAttempt = 0;
  }
};

alert('I\'ve got one more for you...');

var teams = ['flyers', 'eagles', 'olympico de marseille', 'cubs', 'clemson tigers', 'philly', 'tigers', 'clemson'];
var teamAttempt = 6;
var correct = false;
while(teamAttempt > 0 && !correct) {
  var teamAnswer = prompt('Guess on of my five favorite sports teams', 'You have ' + teamAttempt + ' attempts').toLowerCase();
  for(var i = 0; i < teams.length; i++) {
    if(teamAnswer === teams[i]) {
      correct = true;
    }
  } if(correct === true) {
    alert('Good guess.');
  } else if(teamAttempt === 1 && teamAnswer !== teams[i]) {
    alert('You don\'t know me. Acceptable answers were "Flyers, Eagles, Cubs, Clemson Tigers, or Olympic de Marseille"');
  } else {
    alert('Try again'); 
  }
  teamAttempt -= 1;
};