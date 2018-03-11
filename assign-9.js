let count = {
    current: 1,
    get getCount() {
        return ++this.current;
    }
};
let mergeObj = {};
Object.assign(mergeObj, count);
console.log(mergeObj);





// Object.assign()으로 get은 복사되지 않는다.