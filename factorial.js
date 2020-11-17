let factorial = n => {
  if (n == 1) return n;
  else {
    return n * factorial(n - 1);
  }
};

let factorial2 = n => {
  for (let i = n - 1; i >= 1; i--) {
    n = n * i;
  }
  return n;
};

let result = factorial(5);
let result2 = factorial2(7);
console.log(result2);
