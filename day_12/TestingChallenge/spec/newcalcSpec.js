describe("Extra calculator functions", function() { 
    describe("Year Counter function", function() {
        it("should return 7 if the year 2011 is entered", function() {
           expect(yearsUntil(2011)).toBe(7);
        });
        it("should return 'Please enter a number under 2018' if a number over 2018 is entered", function() {
            expect(yearsUntil(2019)).toBe("Please enter a number under 2018");
        });
        it("should return 'Is Not A Number' when the input is not a number", function() {
            expect(yearsUntil("")).toBe("Not A Number");
        });
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
        it("should return 'Number Too Big' when the number excededs 1,000,000", function() {
            expect(squareRoot(1000000)).toBe("Number Too Big");
        });
        it("should return 'Please enter a number over 0' if a number under 0 is entered", function() {
            expect(squareRoot(0)).toBe("Please enter a number over 0");
        });
        it("should return 'Not A Number' when the input is not a number", function() {
            expect(squareRoot("")).toBe("Not A Number");
        });
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should return 'Number Too Big' when the number excededs 1,000,000", function() {
            expect(squareMe(1000000)).toBe("Number Too Big");
        });
        it("should return 'Please enter a number over 0' if a number under 0 is entered", function() {
            expect(squareMe(0)).toBe("Please enter a number over 0");
        });
        it("should return 'Not A Number' when the input is not a number", function() {
            expect(squareMe("")).toBe("Not A Number");
        });
    });
    
    describe("Triangle Area function", function() {
        it("should return 18 as the area of the triangle with a base of 4 and a height of 9", function() {
            expect(triangleArea(4,9)).toBe(18);
        });
        it("should return 'Please enter a number over 0' if a number under 0 is entered", function() {
            expect(triangleArea(-1,6)).toBe("Please enter a number over 0");
        });
        it("should return 'A Variable Is Not A Number' when the input is not a number", function() {
            expect(triangleArea("")).toBe("A Variable Is Not A Number");
        });
    });
    
    describe("Pyramid Area function", function() {
        it("should return 57.5 when the apothem length is 14, the slant height is 3, and the length of the side is 5", function() {
            expect(pyramidArea(14,3,5)).toBe(57.5);
        })
        it("should return 'Please enter a number over 0' if a number under 0 is entered", function() {
            expect(pyramidArea(-1,6,10)).toBe("Please enter a number over 0");
        });
        it("should return 'A Variable Is Not A Number' when the input is not a number", function() {
            expect(pyramidArea("")).toBe("A Variable Is Not A Number");
        });
    });
    
    describe("Cylinder Area function", function() {
        it("should return 207.35 as the surface area of a cylinder with a radius of 3 and a height of 8", function() {
        expect(cylinderArea(3,8)).toBe(207.35);
        });
        it("should return 'Please enter a number over 0' if a number under 0 is entered", function() {
            expect(cylinderArea(-1,6)).toBe("Please enter a number over 0");
        });
        it("should return 'A Variable Is Not A Number' when the input is not a number", function() {
            expect(cylinderArea("")).toBe("A Variable Is Not A Number");
        });
    });
    
    describe("Circle Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        it("should return 'Please enter a number over 0' if a number under 0 is entered", function() {
            expect(areaOfCircle(0)).toBe("Please enter a number over 0");
        });
        it("should return 'Not A Number' when the input is not a number", function() {
            expect(areaOfCircle("")).toBe("Not A Number");
        });
    });
    
    describe("Sphere Area function", function() {
        it("should return 113.1 as the surface area of a sphere with a radius of 3", function() {
            expect(sphereArea(3)).toBe(113.1);
        });
        it("should return 'Please enter a number over 0' if a number under 0 is entered", function() {
            expect(sphereArea(-1)).toBe("Please enter a number over 0");
        });
        it("should return 'Not A Number' when the input is not a number", function() {
            expect(sphereArea("")).toBe("Not A Number");
        });
    });
});