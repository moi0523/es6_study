let sports = "축구";

if (sports) {
    let sports = "농구";
    console.log("블록: ", sports);
}
console.log("글로벌: ", sports);





// 현재 스크립트 전체에서 sports 변수의 값은 "축구" 이다. if문 안에서만 "농구" 이다. -> (▼ 참조)
// 블록스코프(중괄호{}) 안에서 선언한 let 은 블록스코프 안에서만 쓰인다. 밖에서는 따로 선언된거 쓰거나, 선언 안됬으면 ReferenceError 에러
// if(변수) <- 이렇게 되있는거 왜 그런지 모르겠다.