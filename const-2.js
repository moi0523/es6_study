const obj = {language: "한글"};
try {
    obj = {};
} catch (e) {
    console.log("const 재할당 불가");
}
obj.language = "영어";
console.log(obj.language);





// const 키워드의 상수를 직접적으로는 바꾸지 못하지만, 객체를 이용하면 값을 바꿀 수 있다.