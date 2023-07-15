function* fibonacci1(num) {
  let a = 0,
    b = 1,
    count = 0;

  while (count < num) {
    yield a;
    [a, b] = [b, a + b];
    count++;
  }
}

let fib1 = fibonacci1(5);
for (let num of fib1) {
  console.log(num);
}


function* fibonacci2(maxValue) {
  let a = 0,
    b = 1;

  while (a <= maxValue) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let fib2 = fibonacci2(21);
for (let num of fib2) {
  console.log(num);
}