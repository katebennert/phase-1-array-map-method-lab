const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(title => title.split(" ")).map(words => words.map(word => (word[0].toUpperCase() + word.substring(1))).join(" "));
 }

/*
Your job is to write the following function:

- `titleCased()`: returns an array with title case tutorial names. Note that
  this function takes no arguments and should use the global `tutorials`
  variable as data.

**NOTE:** This lab is challenging! You will need to iterate through the
`tutorials` array, modifying the name of each tutorial. To do this, you will
**also** need to access and modify each individual word.
*/
