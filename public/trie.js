Trie = function(){
  this.characters = {};
};

Trie.prototype.learn = function(word, i){
  //if i isn't specified, make it 0
  if (!i) {i = 0;}

  //add current character if it isn't undef or already in this.characters
  if (word[i] && !this.characters.hasOwnProperty(word[i])) {
    this.characters[word[i]] = new Trie();
  }

  if (i < word.length) {
    i++;
    this.characters[word[i - 1]].learn(word, i);
  } else {
    this.isWord = true;
  }
};

Trie.prototype.getWords = function(words, currentWord){
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.

  _.each(this.characters, function(value, key){
    if (this.isWord){
      words.push(currentWord);
      if (value.characters === {}) { currentWord = ""; }
    }

    if (value.characters === {}) {
      value.getWords(words, currentWord);
    }
  }, this);

  return words;
};

Trie.prototype.find = function(word, index){
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions
  // for a given prefix.
  // It should use find and getWords.
};