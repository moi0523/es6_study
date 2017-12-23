let Sports = function() {
    this.count = 20;
};
Sports.prototype = {
    plus: function() {
        this.count += 1;
    },
    get: function() {
        setTimeout(function() {
            console.log(this === window);
            console.log(this.plus);
        }, 1000);
    }
};
let newSports = new Sports();
newSports.get();





// setTimeout() -> window 오브젝트. this -> window 오브젝트를 참조한다.
// undefined 가 뜬 이유 : this.plus는 newSports를 참조하려고 쓴건데 this가 window 오브젝트를 참조해서 undefined가 뜬것이다.