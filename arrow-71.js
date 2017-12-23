let Sports = function() {
    this.count = 20;
};
Sports.prototype = {
    add: () => {
        this.count += 1;
    }
};
let newSports = new Sports();

newSports.add();
console.log(newSports.count);
console.log(window.count);





// () => {} 여기서는 this.count가 window 오브젝트를 참조하게된다. console.log(window.count);는 undefined가 뜨는데 거기에 +=1 이 되서 NaN(Not a Number)이 뜬것이다.