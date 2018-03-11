try {
    let obj = Object.assign(null, {x: 1});
} catch (e) {
    console.log("null 지정 불가");
}
console.log(Object.assign(123));
console.log(Object.assign(456, 70));





// Object.assign()의 첫번쨰 파라미터를 지정하지 않거나 null 또는 undefined를 지정하며 에러가 발생한다.