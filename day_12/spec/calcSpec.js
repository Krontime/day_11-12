describe("Calculator", function(){
    
    beforeEach(function(){
        calc = new Calculator();
    });
    
    describe("Addition function", function() {
        it ("should add two numbers together and return the result", function(){
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
        it("should not return 4 if the numbers dont add up to 4", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert")
            calc.add("Bleebelbrox")
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number")
        });
        
    });
    describe("Subtract function", function() {
        it("should subtract one number from the other and return the result", function(){
            calc.sub(10);
            calc.sub(5);
            expect(calc.value).toBe(5);
        });
        it("should not return 5 if the subtract result doesn't equal 5", function() {
            calc.sub(15);
            calc.sub(6);
            expect(calc.value).toBe(9);
        });
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert")
            calc.add("Bleebelbrox")
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number")
        });
    });
    describe("Multiplication function", function() {
        it("should multiply two numbers togeather and return the result", function(){
            calc.mult(3)
            calc.mult(4)
            expect(calc.value).toBe(12)
        });
        it("should not return 12 if the multiplication result doesn't equal 12", function() {
            calc.mult(4)
            calc.mult(10)
            expect(calc.value).toBe(40)
        });
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert")
            calc.add("Bleebelbrox")
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number")
        });
    });
    describe("Division function", function() {
        it("should devide two numbers against eachother and return the result", function(){
            calc.divide(10)
            calc.divide(5)
            expect(calc.value).toBe(2)
        });
        it("should not return 2 if the division result doesn't equal 2", function() {
            calc.divide(100)
            calc.divide(10)
            expect(calc.value).toBe(10)
        });
        it("should have called the alert function if we divide by 0", function() {
            spyOn(window, "alert")
            calc.divide(14)
            calc.divide(0)
            expect(window.alert).toHaveBeenCalledWith("Cannot divide by 0!")
        });
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert")
            calc.add("Bleebelbrox")
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number")
        });
    });
})