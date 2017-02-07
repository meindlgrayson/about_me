'use strict';

var answerOne = prompt('Are you having a good day?', 'Y/N').toUpperCase();

var elseAnswer = 'Too stupid for and yes/no question? Honestly nobody is surprised.';

var elseLog = 'idiot';

if(answerOne === 'YES' || answerOne === 'Y') {
    alert('That\'s fanfuckingtastic..');
    console.log('Answered "Yes"');
} else if(answerOne === 'NO' || answerONE === 'N') {
    alert('Welcome to the club, princess.');
    console.log('Answered "No"');
} else {
    alert(elseAnswer);
    console.log(elseLog);
};

var answerTwo = prompt('Does anyone love you?', 'Y/N').toUpperCase();

if(answerTwo === 'YES' || answerTwo === 'Y') {
    alert('I don\'t belive you');
    console.log('Answered "Yes"');
} else if(answerTwo === 'NO' || answerTwo === 'N') {
    alert('We know.');
    console.log('Answered "No"')
} else {
    alert(elseAnswer);
    console.log(elseLog);
};

var answerThree = prompt('How fun! A two-part question! First: Would you consider yourself attractive?', 'Y/N').toUpperCase();

if(answerThree === 'YES' || answerThree === 'Y') {
    alert('Oh...');
    console.log('Answered "Yes"');
    var answerThreeA = prompt('Second: Do you think you should have your eyes checked?', 'Y/N').toUpperCase();
    if(answerThreeA === 'YES' || answerThreeA === 'Y') {
        alert('You\'re probably right');
        console.log('Answered "Yes"');
    } else if(answerThreeA === 'NO' || answerThreeA === 'N') {
        alert('Think again cupcake..');
        console.log('Answered "No"');
    } else {
        alert(elseAnswer);
        console.log(elseLog);
    };
} else if(answerThree === 'NO' || answerThree === 'N') {
    alert('Good, good.. Best not to lie to yourself, ya know?')
    var answerThreeB = prompt('Second: Were you ever attractive?', 'Y/N').toUpperCase();
    if(answerThreeB === 'YES' || answerThreeB === 'Y') {
        alert('How the mighty have fallen!');
        console.log('Answered "Yes"');
    } else if(answerThreeB === 'NO' || answerThreeB === 'N') {
        alert('Din\'t think so. Just curious.');
        console.log('Answered "No"');
    } else {
        alert(elseAnswer);
        console.log(elseLog);
    };
} else {
    alert(elseAnswer);
    console.log(elseLog);
};

alert('And they told you this was going to be a game..');