let one = [11, 12];
let two = [21, 22];
let spreadObj = [51, ...one, 52, ...two];

console.log(spreadObj);
console.log(spreadObj.length);





// 스프레드 연산자는 "..." 뒤에 이터러블을 쓰면 된다.
// spreadObj의 ...one 과 ...two 가 스프레드 연산자로 작성된것이다.
// spreadObj 의 값은 [51, 11, 12, 52, 21, 22]와 같이 나온다.