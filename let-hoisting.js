console.log(sports);
var sports = "스포츠";

console.log(music);
let music = "음악";





// hositing(호이스팅) == 원래 변수를 선언한 후 변수를 사용하는것인데, 먼저 변수를 사용한 후 나중에 선언하는것이다.
// var 키워드는 호이스팅이 가능하지만 let 키워드는 불가느하다. (let 쓰면 에러뜸)
// var 키워드는 undefined 가 뜨지만, var 키워드를 sports 변수가 인식된것으로 호이스팅에 성공한것이다. 만약 참조하지 못했다면 에러가 떴을것이다.