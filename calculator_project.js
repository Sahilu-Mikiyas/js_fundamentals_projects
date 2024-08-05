window.onload = function() {
    // Delay the prompt to ensure the page is fully loaded and visible
    setTimeout(function() {
        let continueCalculation = true;

        while (continueCalculation) {
            // Prompt for the operation using signs
            const operation = prompt("Welcome to the calculator app,\n What operation would you like to perform? (Use + for addition, - for subtraction, * for multiplication, / for division): ").trim();

            // Prompt for numbers
            const input = prompt("Enter numbers separated by space: ");
            const numbers = input.split(' ').map(Number);

            if (numbers.some(isNaN)) {
                console.log("Invalid input. Please enter valid numbers separated by space.");
            } else {
                let result;

                switch(operation) {
                    case '+':
                        result = numbers.reduce((acc, curr) => acc + curr, 0);
                        break;
                    case '-':
                        result = numbers.reduce((acc, curr) => acc - curr);
                        break;
                    case '*':
                        result = numbers.reduce((acc, curr) => acc * curr, 1);
                        break;
                    case '/':
                        result = numbers.reduce((acc, curr) => {
                            if (curr === 0) {
                                console.log("Error: Division by zero is not allowed.");
                                return NaN;
                            }
                            return acc / curr;
                        });
                        break;
                    default:
                        console.log("Invalid operation. Please use + for addition, - for subtraction, * for multiplication, or / for division.");
                        result = null;
                        break;
                }

                if (!isNaN(result)) {
                    console.log(`The result of ${operation} is: ${result}`);
                }
            }

            const continueInput = prompt("Would you like to perform another calculation? (yes/no): ").toLowerCase();
            continueCalculation = continueInput === 'yes';
        }

        console.log("Thank you for using the calculator. Goodbye!");
    }, 100); // Delay of 100 milliseconds (adjust if needed)
};
