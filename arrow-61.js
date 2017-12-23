let Sports = function() {
    this.count = 20;
};
Sports.prototype = {
    plus: function() {
        this.count += 1;
    },
    get: function() {
        setTimeout(() => {
            this.plus();
            console.log(this.count);
        }, 1000);
    }
};
let newSports = new Sports();
newSports.get();





// => 를 사용해서 this.plus()의 this가 newSports를 참조하게 되서 Sports.plus()가 실행된다.
// function과 => 는 용도가 비슷하면서도 전혀 다르다.