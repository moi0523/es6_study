let plus = (one, two = 2) => one + two;
console.log(plus(1));
console.log(plus(1, undefined));
console.log(plus(1, 70));





// plus(1)을 하면 one에 1이 들어가서 one + two는 3이 된다.
// undefined는 two에 값을 넘겨주지 않는것으로 쳐서 원래있던 2가 할당된다.
// two에 70을 할당되기에 71이 된다.