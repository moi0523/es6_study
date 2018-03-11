console.log(Object.assign("ABC", {one: 1}));
console.log(Object.assign(Symbol("ABC"), {one: 1}));

try {
    let obj = Object.assign("ABC", "ONE");
} catch (e) {
    console.log("파라미터 모두 문자열 사용 불가");
};





// Object.assign()의 파라미터 모두 문자열로 사용하면 에러가 발생한다.