function printTimesTable(number) {
    if (number > 0 && number < 10) {
        for (let index = 1; index <= 10; index++) {
            console.log(`${number} * ${index} = ${number * index}`);
        }
    }
    else
        console.log(`Input number ${number} out of range`);
};

printTimesTable(5);