let {one, two} = {one: 1, nine: 9};
console.log(one, two);

let three, four;
({three, four} = {three: 3, four: 4});
console.log(three, four);





// 같은 변수끼리만 객체 할당이 가능하다.
// 사전에 선언한 변수를 객체 할당에 사용하려면 소괄호() 안에서 해야한다.