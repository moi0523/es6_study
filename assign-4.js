let sports = {
    event: "축구",
    player: 11
}
let dup = sports;

sports.player = 55;
console.log(dup.player);

dup.event = "농구";
console.log(sports.event);





// let dup = sports; 이 코드로 인해 양쪽이 연동되었다.
// sports.player를 55로 바꾸면 dup.player도 55로 바뀐다.
// dup.event를 "농구"로 바꾸면 sports.player도 "농구"로 바뀐다.