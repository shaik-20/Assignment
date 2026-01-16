//Question 1: Temperature Converter


function convertTemperature(celcius){

    let fahrenheit = (celcius * 9/5) + 32;

    return `${celcius}°C = ${fahrenheit}°F`;

}
console.log(convertTemperature(0)); 
console.log(convertTemperature(25));  
console.log(convertTemperature(100)); 




//Question 2: Age Category


function getAgeCategory(age){
    if (age < 13){
        console.log("category:child");
        return "child"
    }
     else if (age >= 13 && age<= 19){
        console.log("category:Teenager");
        return "Teenager"
    }
    else if (age >= 20 && age<= 59){
        console.log("category:Adult");
        return "Adult"
    }
    else if (age >= 60){
        console.log("category:Senior");
        return "Senior"
    }
    }
    console.log(getAgeCategory(10));
    console.log(getAgeCategory(16)); 
    console.log(getAgeCategory(35)); 
    console.log(getAgeCategory(65)); 


//Question 3: Calculator


 function calculator(num1, num2, operator){
    switch(operator){
        case "add":
         return num1 + num2;

        case "subtract":
        return num1 - num2;

        case "multiply":
        return num1 * num2;

        case "divide":
        return num1 / num2;

    default:
    return "invalid operator";
    }
 }
console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "subtract"));
console.log(calculator(10, 5, "multiply"));
console.log(calculator(10, 5, "divide"));



//Question 4: Discount Calculator


function applyDiscount(price, discountPercent){
    const discountAmount = (price * discountPercent)/100;
    const finalPrice = price - discountAmount;

    return `original:${price}`;
    return `Discount:${discountAmount}`;
    return `final:${finalPrice}`;
}
console.log(applyDiscount(1000, 10));
console.log(applyDiscount(500, 20));



//Question 5: Grade Checker


function checkGrade(marks){
    let grade;
    let Status;

    if (marks >= 90){
        grade = "A";
    }
    else if (marks >= 80){
        grade = "B";
    }
    else if (marks >= 70){
        grade = "C";
    }
    else if (marks >= 60){
        grade = "D";
    }
    else {
        grade = "F";
    }
    if (marks >= 60){
        status = "pass";
    } else {
        status = "fail";
    }

    return `Grade:${grade},status:${status}`;
} 

console.log(checkGrade(95));
console.log(checkGrade(72)); 
console.log(checkGrade(45)); 



//Question 6: Product Info


function createProduct(name, price, inStock){
    return{
        name: name,
        price: price,
        inStock: inStock,
        displayPrice: `₹${price}`,
        status: "inStock" ? "Available" : "Out of Stock"
    }
}

console.log(createProduct("Laptop", 50000, true));
console.log(createProduct("Mouse", 500, false));



//Question 7: Array Operations


function arrayInfo(arr){

return{
 length: arr.length,
 first: arr[0],
 last: arr[arr.length - 1],
 isEmpty: arr.length === 0
}
}
console.log(arrayInfo([10, 20, 30, 40]));
console.log(arrayInfo([5]));
console.log(arrayInfo([]));



//Question 8: User Profile


function createUserProfile(firstName, lastName, age, city){

    const fullName = `${firstName} ${lastName}`;

    return{
        fullName: firstName,
        age: age,
        city: city,
        isAdult: age >= 18,
        profileSummary: `${fullName},${age}years old, ${city}`

    };
}
console.log(createUserProfile("John", "Doe", 25, "Mumbai"));
console.log(createUserProfile("Sara", "Khan", 16, "Delhi"));



//Question 9: What is the Output? (Part 1)

//Predict the output of this code:

const x = 10;
const y = 20;

const result1 = x + y;
const result2 = `${x} +${y}`;
const result3 = `${x} +${y} =${x + y}`;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(typeof result1);
console.log(typeof result2);

/*Write your answer:

Line 1: 30

Line 2: 10 + 20

Line 3: 10 + 20 = 30

Line 4: number

Line 5: string */



//Question 10: What is the Output? (Part 2)

//Predict the output of this code:

const user = {
 name: "Alice",
 age: 20
};

const age = 25;

console.log(user.name);
console.log(user.age);
console.log(age);

user.age = 21;
console.log(user.age);

const isAdult = user.age >= 18 ? "Yes" : "No";
console.log(isAdult);

/*Write your answer:

Line 1: Alice

Line 2: 20

Line 3: 25

Line 4: 21
 
Line 5: yes */



//Question 11: Email Validator

 function validateEmail(email){

    if (email === ""){
        return false;
    }
    return email.includes("@") && email.includes(".");
 }
console.log(validateEmail("john@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("test@domain"));
console.log(validateEmail(""));




//Question 12: String Formatter


 
function formatName(firstName, lastName){
  const first = firstName.trim().toUpperCase();
  const last = lastName.trim().toUpperCase();
  return first + " " + last
}
console.log(formatName("john", "doe"));
console.log(formatName(" sarah ", " khan "));
console.log(formatName("mike", "smith")); 



//Question 13: Shopping Cart Manager


function manageCart(cart, action, item){

    switch(action){
         
         case "add":
         cart.push(item);
         break;

         case "remove":
         cart.pop(item);
         break;

         case "addFirst":
         cart.unshift(item);
         break;

         case "removeFirst":
         cart.shift(item);
         break;

      default:
      console.log("invalid action");   
    }
    return cart;
    }
   let cart = ["Laptop", "Mouse"];
   console.log(manageCart(cart, "add", "Keyboard"));
   console.log(manageCart(cart, "remove"));
   console.log(manageCart(cart, "addFirst", "Monitor"));
   console.log(manageCart(cart, "removeFirst"));



//Question 14: Word Counter


function countWords(sentence){
    return sentence.split(" ").length
        
}

console.log(countWords("Hello world"));
console.log(countWords("JavaScript is awesome"));
console.log(countWords("I love coding in JavaScript")); 



//Question 15: Array Manipulator


function arrayOperations(arr1, arr2){

    
    const combined = arr1.concat(arr2);
    const combinedString = combined.join(",");
    const hasApple = combined.includes("Apple");
    const length = combined.length;

    return{
        combined: combined,
        combinedString: combinedString,
        hasApple: hasApple,
        length: length
       }
}
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Orange", "Mango"];

console.log(arrayOperations(fruits1, fruits2));



//Bonus Question (Optional)


function evenOrOdd(number){

 return number % 2 === 0 ? "even" : "odd" ;
}
console.log(evenOrOdd(10));
console.log(evenOrOdd(7)); 
console.log(evenOrOdd(0)); 