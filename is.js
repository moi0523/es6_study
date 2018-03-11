console.log("1: ", Object.is(1, "1"));
console.log("2: ", Object.is(NaN, NaN), NaN === NaN);

console.log("3: ", Object.is(0, -0), 0 === -0);
console.log("4: ", Object.is(-0, 0), -0 === 0);

console.log("5: ", Object.is(-0, -0), -0 === -0);
console.log("6: ", Object.is(NaN, 0/0), NaN === 0/0);

console.log("7: ", Object.is(null, null), null === null);
console.log("8: ", Object.is(undefined, null), undefined === null);





// Object.is()와 ===는 둘 다 값과 값의 타입을 모두 비교하지만, 몇몇 값은 서로 다르게 반환된다.
// +0과 -0의 비교, NaN과 NaN의 비교, null과 null의 비교, NaN과 0/0의 비교, undefined와 undefined의 비교 등