
class Calculator {

    constructor(previousScreen, currentScreen){
        this.previousScreen = previousScreen
        this.currentScreen = currentScreen

        this.currentInput = ''
        this.previousInput = ''
        this.operator = ''

        // console.log("constructor has been run")
    }
    
    appendNumber(number){
        if(this.currentInput.includes('.') && number == '.') return
        this.currentInput += number
    }

    clear(){
        this.currentInput = ''
        this.previousInput = ''
        this.operator = ''
    }

    delete(){
        this.currentInput = this.currentInput.slice(0, -1)
    }

    chooseOperator(operator){
        if(this.previousInput !== ""){
            this.compute()
        }

        if(this.currentInput == ''){
            return
        }

        this.operator = operator
        this.previousInput = this.currentInput
        this.currentInput = ''
        console.log(this.currentInput)
    }

    getDisplayValue(number){
        let integer = parseFloat(number)
        
        if(isNaN(integer)){
            integer = ''
        }else{
            integer = integer.toLocaleString('en', {maximumFractionDigits: 0})
        }

        return integer
    }

    compute(){
        const operator = this.operator
        const currentInputValue = parseFloat(this.currentInput)
        const previousInputValue = parseFloat(this.previousInput)
        let result

        switch (operator) {
            case '+':
                result = previousInputValue + currentInputValue
                break;

            case '-':
                result = previousInputValue - currentInputValue
                break;
                
            case '÷':
                result = previousInputValue / currentInputValue
                break;
                
            case '*':
                result = previousInputValue * currentInputValue
                break;
        
            default:
                break;
        }
        this.previousInput = ''
        this.operator = ''
        this.currentInput = result.toString()
    }

    updateScreen(){
        this.currentScreen.innerHTML = `${this.getDisplayValue(this.currentInput)}`
        this.previousScreen.innerHTML = `${this.getDisplayValue(this.previousInput)} ${this.operator}`
    }
}

export default Calculator