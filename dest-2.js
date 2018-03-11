let one, two, three, four, other;
[one, , , four] = [1, 2, 3, 4];
console.log(one, four);

[one, ...other] = [1, 2, 3, 4];
console.log(other);





// 왼쪽 배열에서 변수를 작성하지 않고 콤마(,)를 쓰면 해당하는 인덱스를 건너뛰고 다음 변수로 이동한다.
// spread 연산자로 나머지 [2, 3, 4] other에 넣을 수 있다.