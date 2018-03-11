let one, two, three, four, five;
const values = [1, 2, 3];

[one, two, three] = values;
console.log("A: ", one, two, three);

[one, two] = values;
console.log("B: ", one, two);

[one, two, three, four] = values;
console.log("C: ", one, two, three, four);

[one, two, [three, four]] = [1, 2, [73, 74]];
console.log("D: ", one, two, three, four);





// A는 순서대로 할당한거, B는 2개밖에 없기에 2개만 할당하고 세번째는 할당되지 않음, C는 네번째가 없어서 undefined, D는 배열 차원에 맞춰 할당한거(만약 배열의 차원이 다르다면 에러가 뜬다.)