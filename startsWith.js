let target = "123가나다";
console.log("1: ", target.startsWith(123));
console.log("2: ", target.startsWith("23"));
console.log("3: ", target.startsWith("가나", 3));





// startWith()는 첫 번째 파라미터의 문자열로 시작하면 true를 반환한다.
// 비교 시작 위치를 정해줄 수 있다.