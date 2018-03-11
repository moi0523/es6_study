let obj = {one: 1};
Object.assign(obj, {two: 2}, {two: 3}, {four: 4});
for (var pty in obj) {
    console.log(pty, obj[pty]);
};





// Object.assign()으로 프로퍼티를 복사할때 순서대로 복사된다.
// two: 2가 복사된 후 two: 3이 다시 복사되었기 때문에 2가 아닌 3이 출력된것.