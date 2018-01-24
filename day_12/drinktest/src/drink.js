let whatCanIDrink = function(number) {
    if (number <= 0){
        
        //------alert------//
        // alert("Sorry, I can't tell what drink because that age is incorrect!");
        // console.log(number);
        
        //------return------//
        return "Sorry, I can't tell what drink because that age is incorrect!";
        
    } else if (number <= 14) {
        alert("Drink Toddy!");
        console.log(number);
        
    } else if (number <= 18) {
        alert("Drink Coke!");
        console.log(number);
        
    } else if (number <= 21) {
        alert("Drink Beer!");
        console.log(number);
        
    } else if (number <= 130) {
        alert("Drink Whiskey!");
        console.log(number);
        
    } else {
        alert("Sorry, I can't tell what drink because that age is incorrect!");
        console.log(number);
    }
};

    let fizzBuzz = function(number) {
        if((number % 3) === 0 && (number % 5) === 0 && (number % 7) === 0){
            
            //------alert------/
            // alert("FizzBuzzPop");
            
            //------return------/
            return "FizzBuzzPop";
            
        } else if((number % 3) === 0 && (number % 5) === 0 && (number % 7) !== 0){
            alert("FizzBuzz");
            
        } else if((number % 3) === 0 && (number % 5) !== 0 && (number % 7) === 0){
            alert("FizzPop");
            
        } else if((number % 3) !== 0 && (number % 5) === 0 && (number % 7) === 0){
            alert("BuzzPop");
            
        } else if((number % 3) !== 0 && (number % 5) !== 0 && (number % 7) === 0){
            alert("Pop");
            
        } else if ((number % 3) === 0 && (number % 5) !== 0 && (number % 7) !== 7){
            alert("Fizz");
            
        } else if ((number % 3) !== 0 && (number % 5) === 0 && (number % 7) !== 7){
            alert("Buzz");
            
        } else if ((number % 3) !== 0 && (number % 5) !== 0 && (number % 7) !== 7){
            alert(number);
            
        } else {
            alert("This is not a number!");
        }
    };