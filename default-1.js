let [one, two, five = 5] = [1, 2];
console.log(five);

[one, two, five = 5] = [1, 2, 77];
console.log(five);

let {six, seven = 7} = {six: 6};
console.log(six, seven);





// 값이 할당되지 않았을때는 이전에 할당해놓은 값을 사용한다.