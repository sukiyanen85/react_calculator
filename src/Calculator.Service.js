function CalculatorService(){
    const SUM = '+';
    const SUB  = '-';
    const DIV  = '/';
    const MULT = '*';
    
    function calcular(number1, number2, operation){
        let result;

        switch(operation){
            case SUM: 
                result = number1 + number2;
                break;

            case SUB:
                result = number1 - number2;
                break;

            case MULT:
                result = number1 * number2;
                break;
            
            case DIV:
                result = number1 / number2;
                break;

            default: result = 0;
        }

        return result;
    }

    function concatNumbers(currentVal, newVal){
        if(currentVal === '0' || currentVal == null){
            currentVal = '';
        }

        if(currentVal === '' && newVal === '.'){
            currentVal = '0.';
        }
            

        if(newVal === '.' && currentVal.indexOf('.') > -1){
            newVal = '';
        }

        return currentVal + newVal;

    }

    return [
        calcular,
        concatNumbers,
        SUM,
        SUB,
        DIV,
        MULT
    ];
}

export default CalculatorService;