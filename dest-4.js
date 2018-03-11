let five, six;
({one: five, two: six} = {one: 10, two: 20});
console.log(five, six);

let {nine, plus: {ten}} = {nine: 9, plus: {ten: 10}};
console.log(nine, ten);





// 간단히 대입한걸 출력하는거.
// 2차원배열과 비슷하게 된거. 양쪽을 맞춰주지 않으면 에러가 뜬다.