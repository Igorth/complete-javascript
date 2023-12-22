// CHangellenge #1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

// BMI = mass / (height * height)

const BMIMark = massMark / (heightMark * heightMark)
const BMIJohn = massJohn / (heightJohn * heightJohn)

console.log(BMIMark, BMIJohn)

const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)