let oneObj = {};
Object.assign(oneObj, "ABC", undefined, null);
console.log(oneObj);

let twoObj = {};
Object.assign(twoObj, {key1: undefined, key2: null});
console.log(twoObj);





// Object.assign()으로 undefined와 null은 복사되지 않는다.
// twoObj에서 복사된 이유는 객체의 value값으로써 복사되었기 때문이다.