let oneObj = {one: 1}, twoObj = {two: 2};
let mergeObj = Object.assign(oneObj, twoObj);

console.log(Object.is(oneObj, mergeObj));

mergeObj.one = 456;
console.log(Object.is(oneObj, mergeObj));





// let mergeObj = Object.assign(oneObj, twoObj); 이 코드(mergeObj에 oneObj를 할당)로 인해 mergeObj와 oneObj가 연동되었다.
// 연동된 상태에서 mergeObj.one에 456을 입력하니 oneObj.one에도 456이 입력되었다.
// 그런 상태에서 Object.is를 사용하니 true가 나온다.