function total({one, plus: {two, five}}) {
    console.log(one + two + five);
};
total({one: 1, plus: {two: 2, five: 5}});





// 함수가 호출하는것을 변수에서 객체로 바꿨다.