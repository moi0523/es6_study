let values = {10: "ten", zoo: "동물원", 2: "two", length: 3};
for (var k=0; k<values.length; k++) {
    console.log(values[k]);
};





// array-like의 완전한 형태 == {0: "", 1: "", ...}
// 위의 객체는 완전한 array-like가 아니다.
// values[k]에서 처음 0이 없어서 undefined, 1도 없어서 undefined, 2는 있기 때문에 two가 출력된다.