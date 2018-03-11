console.log("1: ", String.fromCodePoint(35, 36, 37));
console.log("2: ", String.fromCodePoint(0x31, 0x32, 0x33));
console.log("3: ", String.fromCodePoint(44032, 44033));
console.log("4: ", String.fromCodePoint(0x1F418));

console.log("5: ", String.fromCharCode(0x1f418));
console.log("6: ", String.fromCharCode(0xD83D, 0xDC18));





// String.fromCharCode()는 네 자리까지만 작성할 수 있기 때문에 5번에 코끼리 이모지가 출력되지 않는다.