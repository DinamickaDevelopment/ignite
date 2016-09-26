var counter = {
    count: 0,
    addCount: function () {
        return this.count++;
    }
};

var printCount = (num) => {
    console.log(`current count is ${num}`);
};

// module.exports - удобный способ для экспорта значений из модуля, 
// так как он позволяет объединить их в один объект 
module.exports = {
    counter: counter,
    printCount: printCount
}; 
