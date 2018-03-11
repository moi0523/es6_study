let item = "tennis";
let sports = {
    [item]: 1,
    [item + "Game"]: "윔블던",
    [item + "Method"]() {
        return this[item];
    }
};
console.log(sports.tennis);
console.log(sports.tennisGame);
console.log(sports.tennisMethod());





// 대괄호[]를 이용해 변수와 문자열을 조합하여 key값으로 사용할 수 있다.