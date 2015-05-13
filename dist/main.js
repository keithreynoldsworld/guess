function* guessingGame() {
	/*console.log(yield game.say('Hey there!'));
	console.log(yield game.say('Woah', 'This is cool'));
	console.log(yield game.ask('Woah', 'This is cool'));
	console.log(yield game.choose('Woah', 'This is cool', 'Hello world'));
	console.log(yield game.say('That\'s all folks!', 'THE END')); */

	var x = Math.floor(Math.random() * 100) + 1;
	var Correct = false;
	var theirGuess = yield game.ask
	('I be thinky of a number from 1 to 100. What do you think my secret number is?');
   
do{ 

	if (theirGuess < x){yield game.say('too low. try again');
		theirGuess = yield game.ask
	('I be thinky of a number from 1 to 100. What do you think my secret number is?');



	}
    

	else if (theirGuess > x){yield game.say('like Doug Benson, too high');
	theirGuess = yield game.ask
	('I be thinky of a number from 1 to 100. What do you think my secret number is?');

	 
	}


	else if (theirGuess === x){yield game.say('YOU GoT IT RIGHT');
								Correct=true};


    

} while (Correct === false);



}



	
	