let input = process.argv[2];

const reverse = function(input) {
  return input.split('').reverse().join('');
};

console.log(reverse(input));