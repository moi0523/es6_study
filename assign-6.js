let sports = {
    event: "축구",
    player: 11
};
let dup = Object.assign({}, sports);
console.log(dup.player);

dup.player = 33;
console.log(sports.player);

sports.event = "수영";
console.log(dup.event);





// 연동이 불가능한 상황에서 Object.assign()을 이용하면 쉽게 복사할 수 있다.