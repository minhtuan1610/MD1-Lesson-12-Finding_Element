let inputValue = prompt("Enter a number");
let arrayNumber = [-3, -5, 1, 3, 2, 10];
for (let i = 0; i < arrayNumber.length; i++) {
    if (inputValue == arrayNumber[i]) {
        document.write("inputValue " + arrayNumber[i] + " found at index " + i);
    }
}