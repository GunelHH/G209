//Ədədin faktoriali

const num = 3;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
  //1*=1==>1
  //1*=2==>2
  //2*=3==>6
}

console.log(factorial);

//1-20 qədər cut ədədlərin cəmi

let sum = 0;

for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}

console.log(sum);
