
//       BOTH ALERT AND RETURN WORKS       //


describe("whatCanIDrink", function(){
    it("should return a message if the age is less than or equal to 0", function() {
        
        //------alert------//
        // spyOn(window, "alert");
        // whatCanIDrink(-1);
        // expect(window.alert).toHaveBeenCalledWith("Sorry, I can't tell what drink because that age is incorrect!");
        
        //------return------//
        expect(whatCanIDrink(-1)).toBe("Sorry, I can't tell what drink because that age is incorrect!")
    });
    
    it("should return a message if the age is less than or equal to 14", function() {
        spyOn(window, "alert");
        whatCanIDrink(12);
        expect(window.alert).toHaveBeenCalledWith("Drink Toddy!");
    });
    
    it("should return a message if the age is less than or equal to 18", function() {
        spyOn(window, "alert");
        whatCanIDrink(15);
        expect(window.alert).toHaveBeenCalledWith("Drink Coke!");
    });
    
    it("should return a message if the age is less than or equal to 21", function() {
        spyOn(window, "alert");
        whatCanIDrink(19);
        expect(window.alert).toHaveBeenCalledWith("Drink Beer!");
    });
    
    it("should return a message if the age is less than or equal to 130", function() {
        spyOn(window, "alert");
        whatCanIDrink(28);
        expect(window.alert).toHaveBeenCalledWith("Drink Whiskey!");
    });
    
    it("should return a message if a number was not selected", function() {
        spyOn(window, "alert");
        whatCanIDrink("a");
        expect(window.alert).toHaveBeenCalledWith("Sorry, I can't tell what drink because that age is incorrect!");
    });
});


describe("fizzBuzz", function(){
    it("should get a number that is divisable by 3, 5, and 7 and return FizzBuzzPop", function(){
        
        //------alert------//
        // spyOn(window, "alert")
        // fizzBuzz(105)
        // expect(window.alert).toHaveBeenCalledWith("FizzBuzzPop")
        
        //------return------//
        expect(fizzBuzz(105)).toBe("FizzBuzzPop");
        
    });
    
    it("should get a number that is both divisible by 3 and 5 but not 7 and return FizzBuzz", function(){
        spyOn(window, "alert");
        fizzBuzz(15);
        expect(window.alert).toHaveBeenCalledWith("FizzBuzz");
    });
    
    it("should get a number if it is divisible by 3 and 7 but not 5 and return FizzPop", function(){
        spyOn(window, "alert");
        fizzBuzz(21);
        expect(window.alert).toHaveBeenCalledWith("FizzPop");
    });
    
    it("should get a number if it is divisible by 5 and 7 but not 3 and return BuzzPop", function(){
        spyOn(window, "alert");
        fizzBuzz(35);
        expect(window.alert).toHaveBeenCalledWith("BuzzPop");
    });
    
    it("should get a number if it is divisible by 7 but not 3 or 5 and return Pop", function(){
        spyOn(window, "alert");
        fizzBuzz(7);
        expect(window.alert).toHaveBeenCalledWith("Pop");
    });
    
    it("should get a number if it is divisible by 3 but not 5 or 7 and return Fizz", function(){
        spyOn(window, "alert");
        fizzBuzz(3);
        expect(window.alert).toHaveBeenCalledWith("Fizz");
    });
    
    it("should get a number if it is divisible by 5 but not 3 and return Buzz", function(){
        spyOn(window, "alert");
        fizzBuzz(5);
        expect(window.alert).toHaveBeenCalledWith("Buzz");
    });
    
    it("should get a number if it is not divisible by 3 or 5", function(){
        spyOn(window, "alert");
        fizzBuzz(2);
        expect(window.alert).toHaveBeenCalledWith(fizzBuzz());
    });
});