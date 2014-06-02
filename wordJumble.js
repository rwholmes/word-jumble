/* Can you create a program to solve a word jumble? (More info here.) The program should accept a string as input, and then return a list of words that can be created using the submitted letters. For example, on the input "dog", the program should return a set of words including "god", "do", and "go".
 
Please implement the program in a language of your choice, but refrain from using any combinatorics helper modules or imports (e.g. itertools in Python). In order to verify your words, just download an English word list (here are a few). Then upload your program to GitHub or Gist, and send it back! */

var dictionary = {};

var compileDict = function() {
	var url = 'http://localhost:3000/dictionary/temp-dictionary.txt';
	$.get(url, function(data) {
		var words = data.split('\n');
		for (var i=0; i<4000; i++) {
			var word = words[i] + '';
			console.log(word);
			dictionary[word] = true;
		}
	});
}

var wordJumble = function(inputWord) {	
	console.log('wordJumble');
};
	

var getPermutations = function(string) {
	var results = [];
	var seen = {};
	var chars = string.split('');
	var current = [];

	var recurse = function() {
		if (current.length === chars.length) {
			return;
		}

		for (var i=0; i<chars.length; i++) {
			var char = chars[i];
			if (!seen[char]) {
				current.push(char);
				seen[char] = true;
				results.push(current.join(''));
				recurse();
				seen[char] = false;
				current.pop();
			}
		}
	}

	recurse();
	return results;
}






