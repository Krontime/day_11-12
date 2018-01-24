function yearsUntil(y) {
    if (typeof(y) === "number") {
        if (y < 2018) {
            let result = 2018 - y;
            return Number(result.toFixed(0));
        } else {
            return "Please enter a number under 2018";
        }
    } else {
        return "Not A Number";
    }
}

function squareRoot(n) {
    
    if (typeof(n) === "number"){
        if (n > 999999) {
            return "Number Too Big";
        } else if (n > 0) {
            let result = Math.sqrt(n);
            return Number(result.toFixed(2));
        } else {
            return "Please enter a number over 0";
        }
    } else {
        return "Not A Number";
    }
    
}

function squareMe(n) {
    if (typeof(n) === "number"){
        if (n > 999999) {
            return "Number Too Big";
        } else if (n > 0) {
            let result = n * 3;
            return Number(result.toFixed(2));
        } else {
            return "Please enter a number over 0";
        }
    } else {
        return "Not A Number";
    }
}

function triangleArea(b,h) {
    if (typeof(b) === "number" && typeof(h) === "number") {
        if (b >= 0 && h >= 0) {
            let result = (b * h) / 2;
            return Number(result.toFixed(2));
        } else {
            return "Please enter a number over 0";
        }
    } else {
        return "A Variable Is Not A Number";
    }
}

function pyramidArea(a,i,b) {
    if (typeof(a) === "number" && typeof(i) === "number" && typeof(b) === "number") {
        if (a >= 0 && i >= 0 && b >= 0){
            let result =  ((0.5 * a) * b) + ((3/2) * b * i)
            return Number(result.toFixed(2))
        } else {
            return "Please enter a number over 0"
        }
    } else {
        return "A Variable Is Not A Number"
    }
}

function cylinderArea(r,h) {
    if (typeof(r) === "number" && typeof(h) === "number") {
        if (r >= 0 && h >= 0) {
            let result = (2 * (3.1415927 * r * h)) + (2 * 3.1415927 * (r ** 2));
            return Number(result.toFixed(2));
        } else {
            return "Please enter a number over 0";
        }
    } else {
        return "A Variable Is Not A Number";
    }
}

function areaOfCircle(n) {
    if (typeof(n) === "number"){
            if (n > 0) {
                let result = 3.1416 * (n * n);
                return Number(result.toFixed(2));
            } else {
                return "Please enter a number over 0";
            }
    } else {
        return "Not A Number";
    }
}

function sphereArea(r) {
    if (typeof(r) === "number") {
        if (r >= 0) {
            let result = (4 * 3.1415927) * (r ** 2);
            return Number(result.toFixed(2));
        } else {
            return "Please enter a number over 0";
        }
    } else {
        return "Not A Number";
    }
}