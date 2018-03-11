let value = {
    1: "aa",
    9: "bb",
    4: "cc"
}

for (var key in value) {
    console.log(key, ":", value[key]);
}




// for-in에 대해 잘못알고 있던점: key값이 무조건 0부터시작하는 숫자여야한다.
// key값은 문자이던, 불규칙한 숫자이던 상관없다. 
// 책에서 array-like와 같이 설명하면서 for-in문이 나와서 했갈렸던 것임.