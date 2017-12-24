let arrayObj = [1, 2];
let iteratorObj = arrayObj[Symbol.iterator]();
console.log("1: ", typeof iteratorObj);

console.log("2: ", iteratorObj.next());
console.log("3: ", iteratorObj.next());
console.log("4: ", iteratorObj.next());





// 이터러블: 반복 가능한 오브젝트 (arrayObj -> 배열)
// 이터레이터: 이터러블의 값을 순서대로 반환하는 오브젝트 (iteratorObj.next())
// next가 있어야 이터레이터가 값을 처리한다.
// 대강의 정의만 조금 이해한것일뿐 아직 전부 이해가지 않았다.