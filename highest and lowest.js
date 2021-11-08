const testCase1 = "1 2 3 4 5";
const testCase2 = "1 2 -3 4 5";
const testCase3 = "1 9 3 4 -5";

const findMaxAndMinValue = (stingOfNumbers) => {
    let result = null;
    if (stingOfNumbers){
        const formattedArray = stingOfNumbers.split(" ").map(number => Number(number));
        let min = formattedArray[0];
        let max = formattedArray[0];
        formattedArray.forEach(element => {
            if (max < element){
                max = element;
            };
            if (min > element){
                min = element; 
            }
        }); 
        result = `Max value:${max}; Min value:${min}`;
    };
    return result;
};

console.log(findMaxAndMinValue(testCase1));
console.log(findMaxAndMinValue(testCase2));
console.log(findMaxAndMinValue(testCase3));








