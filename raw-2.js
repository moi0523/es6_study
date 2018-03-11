let one = 1, two = 2;
let result = String.raw({raw: "ABCDE"}, one, two, 3);
console.log(result);





// 첫번째 파라미터에 있는 raw의 value값과 나머지 파라미터를 하나씩 조합하여 반환한다.
// 결과값(이런식으로 된다.) : A1B2C3DE