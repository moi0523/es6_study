const SPORTS = "축구";
try {
    SPORTS = "농구";
} catch (e) {
    console.log("const 재할당 불가");
}





// const 키워드는 스코프가 다르더라도 재선언이 불가능하다. (const == 상수선언)