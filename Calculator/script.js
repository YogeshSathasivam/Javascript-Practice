let displayValue = "";

        function appendValue(value) {
            console.log("value",value)
            displayValue += value;
            updateDisplay();
        }

        // Working
        function appendOperator(operator) {
            if(isOperator(displayValue.slice(-1))) {
                displayValue=displayValue.slice(0,-1);
            }
            displayValue += operator;
            updateDisplay();
        }

        // Problematic
        // function appendOperator(operator) {
        //     console.log(operator);
        //     console.log(displayValue !== "");
        //     console.log(!isOperator(displayValue.slice(-1)));   
        //     if (displayValue !== "" && !isOperator(displayValue.slice(-1))) {
        //         displayValue += operator;
        //         let displaynum=updateDisplay();
        //         console.log(displayValue)
        //     }
        //     console.log(isOperator(displayValue.slice(-1)))
        //     console.log(isOperator(displayValue.slice(-2)))
        //     if (displayValue !== "" && isOperator(displayValue.slice(-1) && isOperator(displayValue.slice(-2)))) {
        //         console.log(displayValue, displayValue.slice(-2,-1));
        //         let displaynum=updateDisplay();
        //         console.log("displaynum",displaynum)
        //         updateDisplay();
        //     }
        // }
        
        function appendDecimal() {
            const lastValue = displayValue.split(/[\+\-\*\/]/).pop();
            if (!lastValue.includes('.')) {
                displayValue += '.';
                updateDisplay();
            }
        }
        
        function clearDisplay() {
            displayValue = "";
            updateDisplay();
        }

        function calculatePercentage() {
            if (displayValue !== "") {
            displayValue = (parseFloat(displayValue) / 100).toString();
            updateDisplay();
        }
}
        
        function deleteLast() {
            displayValue = displayValue.slice(0, -1);
            updateDisplay();
        }
        
        function calculate() {
            try {
                const result = eval(displayValue);
                displayValue = result.toString();
                updateDisplay();
            } catch (error) {
                displayValue = "Error";
                updateDisplay();
            }
        }
        
        function updateDisplay() {
            document.getElementById('display').value = displayValue;
        }
        
        function isOperator(char) {
            return ['+', '-', '*', '/'].includes(char);
        }