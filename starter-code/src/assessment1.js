// Write a function that returns the product of 2 numbers

const product = (x, y) => {
	return (x * y);
};

// console.log(product(3, 5));


// Write a function that returns whether a given number is even

const isEven = (num) => {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

// console.log(isEven(7));

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
}

maxOfTwoNumbers = (a, b) => {
	if (a > b) {
		return a;
	} else {
		return b;
	}
};

// console.log(maxOfTwoNumbers(9, 5));


// Return the largest of 3 numbers


const maxOfThreeNumbers = (a, b, c) => {
	return  Math.max(a, b, c);
};

// console.log(maxOfThreeNumbers(25, 100, 3));

// Calculate the sum of an array of numbers

const sumArray = (numbers) => {
	return numbers.reduce((a, b) => a + b, 0);
};

// console.log(sumArray([1, 2, 3]));

// Return the largest number of a non-empty array

const maxOfArray = (numbers) => {
	return Math.max(...numbers);
};

// console.log(maxOfArray([1, 2, 3]));

// Return the longest string in an array

const longestString = (strings) => {
	let longString = '';
	strings.forEach((e) => {
		if (e.length > longString.length) {
			longString = e;
		}
	});
	return longString;
};


// console.log(longestString(['Hello', 'Cristina']));

// Return whether a word is in an array

const doesWordExist = (wordsArr, word) => {
	return wordsArr.includes(word);
};


// Finding the first non-duplicate (non-repeating) word in an array

function findUnique(wordsArr) {
	for (let i = 0; i < wordsArr.length; i++) {
		const element = wordsArr[i];
		const repeated = wordsArr.find((e, index) => {
			return element === e && wordsArr.indexOf(element) !== index;
		});
		if (!repeated) {
			return element;
		}
	}
	return false;
}
	

console.log(findUnique());

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}

function getFullName (personObj) {
	return `${personObj.firstName} ${personObj.lastName}`;
}

console.log(getFullName());

// Return the largest number in a two dimensional array

function maxTwoDimArray (matrix) {
	let largest = [0][0];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] > largest) {
				largest = matrix[i][j];
			}
		}
	}
	return largest;

}

