let factorial = n => {
  if (n == 1) return n;
  else {
    return n * factorial(n - 1);
  }
};

let result = factorial(5);
console.log(result);
