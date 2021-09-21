/*
===============================================================
Hi! Welcome to my little playground!
My name is Oathan Rex. 'Open source' by default and always 'responsive',
I'm a publicist, visual designer and frontend developer based in Barcelona. 
Here you will find some of my personal experiments. Sometimes usefull,
sometimes simply for fun. You are free to use them for whatever you want 
but I would appreciate an attribution from my work. I hope you enjoy it.
===============================================================
*/
/*
===================
===================
Create prototype:
===================
===================
*/
$.fn.strCount = function() {
  //Get string:
  str = this.val();
  //Pprevent 'null' value if the sting is empty:
  var numChars = 0;
  var numLetters = 0;
  var numWords = 0;
  var numSentences = 0;
  var numLines = 0;
  //Count:
  if(str) {
    numChars = str.length; //Count chars.
    numLetters = str.replace(/\s+/g, '').length; //Count chars without spaces.
    numWords = str.match(/\S+/g).length; //Count words.
    numSentences = str.split(/\.+[\n|\s]/g).length; //Count sentences.
    numLines = str.split(/\r*\n/).length; //Count lines.
  };
  //Return data:
  return {
    numChars,
    numLetters,
    numWords,
    numSentences,
    numLines
  };
};
/*
===================
===================
Run!
===================
===================
*/
$("textarea").keyup(function(){
  //Get object:
  var objCount = $("#str").strCount();
  //Print data:
  $(".chars").text(objCount.numChars);
  $(".letters").text(objCount.numLetters);
  $(".words").text(objCount.numWords);
  $(".sentences").text(objCount.numSentences);
  $(".lines").text(objCount.numLines);
});
