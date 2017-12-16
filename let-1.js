// "use strict"
one = 100;
function get() {
    one = 300;
    console.log("함수: ", one);
}

get();
console.log("글로벌: ", one);





// "use strict" 썼을 때 var 키워드를 사용 안하면 에러 발생한다.
// var 키워드를 안쓰면 글로벌 변수로 간주되지만, 글로벌 변수가 var 키워드를 안쓰는건 아니다.