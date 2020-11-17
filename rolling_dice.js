let total;
let count = 0;

let getRandom = () => {
  let x = Math.floor(Math.random() * 6 + 1);
  return x;
};

let check_snake_eye = () => {
  let dice1 = getRandom();
  let dice2 = getRandom();
  total = dice1 + dice2;

  if (total === 12) {
    console.log(`Snake eyes you have a total of 12 numbers.`);
    console.log(
      `You rolled the dice ${count} times before you reached snake eye.`
    );
    count = 0;
  } else {
    console.log(`Your number is ${total}.`);
  }
};

do {
  check_snake_eye();
  count += 1;
} while (total !== 12);
