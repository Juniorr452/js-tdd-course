const FizzBuzz = n => {
  if(n === 0) return n;

  if(n % 15 === 0) return 'FizzBuzz';
  if(n % 3 === 0) return 'Fizz';
  if(n % 5 === 0) return 'Buzz';

  return n;
}

export default FizzBuzz;
