let get = (one, ...rest) => {
    console.log(one);
    console.log(rest);
}
get(...[1, 2, 3]);





// 스프레드 연산자로 인해 get(1, 2, 3);으로 바뀌고, one에 1이 호출된다. 나머지가 ...rest에 호출되어서 [2, 3]이 된다.