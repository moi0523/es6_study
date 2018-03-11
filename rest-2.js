let get = (...rest) => {
    console.log(rest);
    console.log(Array.isArray(rest));
}
get(...[1, 2, 3]);





// 함수에서 호출할때 스프레드 연산자를 사용하한다 == 스프레드 연산자가 아니라 rest 파라미터이다.
// get(...[1, 2, 3]);에서 (1, 2, 3)으로 바뀌지만 다시 호출될때 rest 파라미터를 붙여서 배열로 출력된다.
// console.log(Array.isArray(rest));는 배열인지 아닌지 확인하는거