let values = {0: "zero", 1: "one", 2: "two", length: 3};
for (var key in values) {
    console.log(key, ":", values[key]);
};
for (var k=0; k<values.length; k++) {
    console.log(values[k]);
};





// array-like란 객체의 key를 0부터 차례대로 써서 배열과 같은 역할을 하게 만든것.
// for-in문은 객체나 배열을 차례대로 나열시키는 역할.
// 배열과 다르게 객체는 *.length 로 길이를 알 수 없다. (위에서 values.length;를 쓴것은 values객체의 length 라는 키를 불러온것.)