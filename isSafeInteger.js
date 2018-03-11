console.log("1: ", Number.isSafeInteger(7));
console.log("2: ", Number.isSafeInteger(8.0));
console.log("3: ", Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log("4: ", Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log("5: ", Number.isSafeInteger(7.1));
console.log("6: ", Number.isSafeInteger("123"));
console.log("7: ", Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log("8: ", Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));





// Number.isSafeInteger()는 값이 안전정수 -(2^53) ~ (2^53) 이면 true를, 아니면 false를 반환한다.