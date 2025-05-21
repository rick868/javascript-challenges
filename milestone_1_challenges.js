//challenge 1: sum of two numbers
function addition (num1, num2) {
    return num1 + num2;
}
 console.log(addition(7, 3)); //10
 console.log(addition(-10, 9)); //1

//challenge 2: convert minutes into seconds
function convert (minutes) {
    return minutes * 60;
}
    console.log(convert(10)); //600
    console.log(convert(3)); //180

//challenge 3: Perimeter of a rectangle
function findPerimeter(length, width) {
    return 2 * (length + width);
}
    console.log(findPerimeter(4, 5)); //18
    console.log(findPerimeter(10, 8)); //36
    console.log(findPerimeter(2, 3)); //10

//challenge 4: Check negative
function isNegative(number) {
    if(number < 0) {
        return true;
    } else {
        return false;
    }
}
    console.log(isNegative(-2)); //true
    console.log(isNegative(2)); //false

//challenge 5: Can I drive
function canDrive(name, age) {
    if(age > 18) {
        console.log(`${name} is old enough to drive`);
    } else {
        console.log(`${name} is not old enough to drive yet`);
    }
}

    canDrive("John", 16); //John is not old enough to drive yet
    canDrive("Jack", 19); //Jack is old enough to drive

//challenge 6: Largest number
function findLargest(a, b, c) {
    if(a > b && a > c) {
        return a;
    }else if(b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
    console.log(findLargest(6, 9, 5)); //9
    console.log(findLargest(10, 10, 10)); //10
    console.log(findLargest(-1, -8, -4)); //-1

//challenge 7: BMI Calculator
function calculateBMI(weight, height) {
    let BMI = weight / (height * height);
    let category = "";
    if(BMI < 18.5) {
        category = "Underweight";
    }else if (BMI > 18.5 && BMI < 24.9) {
        category = "Normal weight";
    }else if(BMI > 25 && BMI < 29.9) {
        category = "Overweight";
    }else {
        category = "Obese";
    }
    console.log(`Your BMI is ${BMI} - ${category}`);
}
    calculateBMI(60, 1.75); //Your BMI is 19.59 - Normal weight
    calculateBMI(90, 1.80); //Your BMI is 27.78 - Overweight
    calculateBMI(120, 1.70); //Your BMI is 41.52 - Obese
    calculateBMI(55, 1.75); //Your BMI is 17.96 - Underweight

//Challenge 8: Greetings based on time
function greetUser(name, hour) {
    let greeting = "";
    if(hour <= 11 && hour >= 5) 
        greeting = `Good morning, ${name}`;
    else if(hour >= 12 && hour <= 17) 
        greeting = `Good afternoon, ${name}`;
    else  if(hour >= 18 && hour <= 21) 
        greeting = `Good evening, ${name}`;
    else if(hour <= 4 || hour >= 22) 
        greeting = `Good night, ${name}`;
    
    console.log(greeting);
}
     greetUser("Alice", 2);

//Challenge 9: FizzBuzz
function fizzBuzzCheck(number) {
    let output = "";

    if (number % 3 === 0) {
        output += "Fizz";
    }
    if (number % 5 === 0) {
        output += "Buzz";
    }
    if(output === "") {
        output = number.toString();
    }
    console.log(output);
}
    fizzBuzzCheck(3);
    fizzBuzzCheck(10);
    fizzBuzzCheck(15);
    fizzBuzzCheck(7);

//challenge 10: Perimeter 2
function perimeter (i, number) {
    let perimeter
    switch(i) {
        case "s":
            perimeter = 4 * number;
            break;
        case "c":
            perimeter = 6.28 * number;
            break;
        default:
            return;    
    }
    return perimeter;
}
    console.log(perimeter("s", 5)); //20
    console.log(perimeter("c", 5)); //31.4

// Challenge 11: Sum Of Even Numbers
function sumEvenNumbers(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        if(i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
    console.log(sumEvenNumbers(10)); //30
    console.log(sumEvenNumbers(20)); //110

//Challenge 12: Multiply by itself
function powerUp(num, times) {
    let result = 1;
    for(let i = 0; i < times; i++) {
        result = result * num
    }
    return result;
}
    console.log(powerUp(2, 3)); //8
    console.log(powerUp(5, 2)); //25

//challenge 13: Factorial Calculator
function factorial(n) {
    if(n < 0) {
        console.log("Non-negative numbers only");
        return;
    }
    
    if(n == 0 || n == 1) {
        return 1;
    }
    
    return n * factorial(n-1);
}
    console.log(factorial(5)); //120

//Challenge 14: Multiple Sum
function sumMultiples(n, divisor) {
    let sum = 0;
    for(let i = 1; i <= n; i++ ) {
        if(i % divisor === 0) {
            sum = sum + i;
        }
    }
    return sum
}
    console.log(sumMultiples(10, 2));

// Challenge 15: Sum of digits
function sumDigits(num) {
    let sum = 0;
    while(num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }
    return sum;
}
    console.log(sumDigits(234));
    console.log(sumDigits(4568));
    console.log(sumDigits(0));
