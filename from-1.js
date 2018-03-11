let arrayObj = Array.from({0: "zero", 1: "one", length: 2});
console.log(Array.isArray(arrayObj));
console.log(arrayObj);

let stringObj = Array.from("ABC");
console.log(stringObj);





// Array.from()은 배열을 생성하고 괄호 안의 값을 배열에 넣는다.
// array-like와 문자열은 순서대로 하나씩 입력된다.
// arrya-like가 아닌 객체는 undefined가 뜬다. (아래처럼)

let test = Array.from({3: "tw", qw: "te", 8: "ta", length: 3});
console.log(test);