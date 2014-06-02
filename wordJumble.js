/* Can you create a program to solve a word jumble? (More info here.) The program should accept a string as input, and then return a list of words that can be created using the submitted letters. For example, on the input "dog", the program should return a set of words including "god", "do", and "go".
 
Please implement the program in a language of your choice, but refrain from using any combinatorics helper modules or imports (e.g. itertools in Python). In order to verify your words, just download an English word list (here are a few). Then upload your program to GitHub or Gist, and send it back! */

var dictionary = {};

var compileDict = function() {
	var url = 'http://localhost:3000/dictionary/dictionary.txt';
	$.get(url, function(data) {
		var words = data.split('\n');
		for (var i=0; i<words.length; i++) {
			var word = words[i].split('');
			word.pop();
			word = word.join('');
			dictionary[word] = true;
		}
		console.log('Dictionary loaded');
	});
}	

var getPermutations = function(string) {
	var results = {};
	var seen = {};
	var chars = string.split('');

	var recurse = function(current) {
		var current = current || [];
		var char = '';
		var word = '';
		if (current.length === chars.length) {
			return;
		}

		for (var i=0; i<chars.length; i++) {
			char = chars[i];
			if (!seen[char]) {
				current.push(char);
				word = current.join('');
				seen[char] = true;
				if (dictionary[word]) {
					results[word] = true;
				}
				recurse(current);
				seen[char] = false;
				current.pop();
			}
		}
	}

	recurse();
	return Object.keys(results);
}






