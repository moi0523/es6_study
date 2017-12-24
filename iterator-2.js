let objectObj = {};
let result = objectObj[Symbol.iterator];
console.log(result);





// 객체에는 Symbol.iterator가 없기 때문에 객체는 이터러블 오브젝트가 아니다.
// 어떤것이 이터러블인지 확인하는 방법은 알겠다.
// 아직은 이터러블이 뭔지, 어디에 쓰이는지 이해 못했다.