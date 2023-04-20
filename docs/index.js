function revertMath() {

    document.getElementById("math-problem").innerHTML = ("4 + 4 - 8 * 10 + 1");
}

function convertNumber() {
    const inputString = "4 + 4 - 8 * 10 + 1";
    let numbersArray = inputString.match(/-?\d+(\.\d+)?/g).map(Number);
    const operatorsArray = inputString.match(/[\+\-\*\/]/g);

    // choose a random number from the array to modify
    const randomIndex = Math.floor(Math.random() * numbersArray.length);
    const originalNumber = numbersArray[randomIndex];

    // modify the number
    const newNumber = originalNumber + 10;
    numbersArray[randomIndex] = newNumber;

    // shuffle the array
    for (let i = numbersArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [numbersArray[i], numbersArray[j]] = [numbersArray[j], numbersArray[i]];
    }

    // combine the shuffled array and operators array into a new string
    let outputString = '';
    for (let i = 0; i < numbersArray.length; i++) {
        outputString += numbersArray[i];
    if (i < operatorsArray.length) {
        outputString += ' ' + operatorsArray[i] + ' ';
    }
    }

    document.getElementById("math-problem").innerHTML = outputString;

}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // prevent form from submitting and reloading the page
        const inputFieldValue = document.getElementById('inputField').value;

        if (inputFieldValue == 69) {
            alert("You're funny, I like you");
        } else
        alert('WRONG!!!! What are you? An Idiot Sandwich!?');
        document.getElementById('myForm').innerHTML =
        "<img src='assets/gordon-ramsay-what-are-you.gif' alt='gordon gif' height='500px' width='800px'>";
    });
});