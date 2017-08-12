var challengeInput = [270, 541, 993, 649, 2010741, 1425172824437700148];

for (var i = 0; i < challengeInput.length; i++) {
	if (isPrimeNumber(challengeInput[i])){
		console.log(challengeInput[i], " is prime");
	}else{
		console.log(getNextSmallerPrime(challengeInput[i]), " < ", challengeInput[i] , " < ", getNextLargerPrime(challengeInput[i]));	
	}
}

function getNextSmallerPrime(number) {
	var SMALLER = -1;
	return getNextPrime(number, SMALLER);
}

function getNextLargerPrime(number) {
	var LARGER = 1;
	return getNextPrime(number, LARGER);
}

function getNextPrime(number, direction){
	var oddNumber = 0;
	if(number % 2 === 0){
		oddNumber = number + (1 * direction);
	}else{
		oddNumber = number + (2 * direction);
	}

	var countToNextOdd = 0;
	while(!isPrimeNumber(oddNumber + countToNextOdd)){
		countToNextOdd = countToNextOdd + (2 * direction);
	}
	return oddNumber + countToNextOdd;
}

function isPrimeNumber(number) {
	if(number <= 1) 
		return false;

	if(number === 2) 
		return true;

	if(number % 2 === 0)
		return false;

	var counter = 0;
	for (var i = 3; i < (number / 2); i+=2) {
		if(number % i === 0) 
			return false;

		counter++;
	}
	
	//console.log("loop", counter, "times until find the prime", number);
	return true;
}