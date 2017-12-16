"use strict";
var sports = "축구";
let music = "재즈";

function get() {
    var sports = "농구";
    let music = "클래식";
    console.log("1: ", sports);
    console.log("2: ", this.sports);
    console.log("3: ", this.music);
};
window.get();
get();





// window.get(); 은 this가 window 객체를 참조하기때문에 get() 함수 밖의 변수를 사용한다.
// 내생각에는 같은 변수를 2개 이상 사용했을때 this 로 받아오면 어느것을 받아올지 몰라서 에러가 뜨는것같다.