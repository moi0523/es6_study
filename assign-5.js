let sports = {
    event: "축구",
    player: 11
}

let dup = {};
for (var key in sports) {
    dup[key] = sports[key];
}
sports.player = 33;
console.log(dup.player);





// 연동이 불가능한 상황에서 es6 이전에서는 이런 방법으로 복사하였다.