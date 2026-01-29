//JS Assignment 2 //

//Question 1: Discount Prices ?

const products = [
 { name: "Laptop", price: 50000 },
 { name: "Phone", price: 30000 },
 { name: "Tablet", price: 20000 }
];

function applyDiscount(products) {
return products.map(product =>{
    return{
        name: product.name,
        price: product.price * 0.9
    }
})
}

console.log(applyDiscount(products))


// Question 2: Get Passed Students

const students = [
 { name: "Rahul", score: 85 },
 { name: "Priya", score: 45 },
 { name: "Amit", score: 72 },
 { name: "Neha", score: 55 },
 { name: "Vikram", score: 90 }
];

function getPassedStudents(students){
    const passedStudents = students.filter(student=> student.score >= 60)
    const passedStudentsArr = passedStudents.map(student=> student.name)
    return{
        passed: passedStudentsArr,
        count: passedStudents.length
    };
}

console.log(getPassedStudents(students))


//Question 3: Search by Email


const users = [
 { id: 1, name: "John", email: "john@example.com" },
 { id: 2, name: "Sarah", email: "sarah@example.com" },
 { id: 3, name: "Mike", email: "mike@example.com" }
];


function findUserByEmail(users, email) {
       const user = users.find(user => user.email === email)
       return users = user || null
}
console.log(findUserByEmail(users, "sarah@example.com"))

console.log(findUserByEmail(users, "notfound@example.com"));



//Question 4: Calculate Average Score

const newStudents = [
 { name: "John", score: 85 },
 { name: "Sarah", score: 92 },
 { name: "Mike", score: 78 },
 { name: "Emma", score: 95 }
];

 function getAverageScore(newStudents){
    const total =newStudents.reduce((sum, student) => {
       return sum + student.score
        
        
    },0);

    return total/newStudents.length
 }
 console.log(getAverageScore(newStudents))



 //Question 5: Inventory Check


 const productsOf = [
 { name: "Laptop", inStock: true },
 { name: "Phone", inStock: true },
 { name: "Tablet", inStock: false }
];

function checkInventory(productsOf){
    return{
        allInStock:productsOf.every(product => product.inStock === true),
        hasOutOfStock:productsOf.some(product => product.inStock === false)
    }
}
console.log(checkInventory(productsOf))



//Question 6: Get All Product Names


const productsIn = [
 { id: 1, name: "Laptop", price: 50000 },
 { id: 2, name: "Phone", price: 30000 },
 { id: 3, name: "Tablet", price: 20000 }
];

function getProductNames(products){
    let Electronics = products.map((product)=>{
        return product.name
    });
    return Electronics
}
console.log(getProductNames(products))


// Question 7: Count Property Types

const user = {
 name: "John", // string
 age: 25, // number
 active: true, // boolean
 city: "Mumbai", // string
 score: 95 // number
};

function countProperties(obj) {
    let total = 0;
    let numbers = 0;
    let strings = 0;
    let booleans = 0;

    for (let key in obj) {
        total++;

        if (typeof obj[key] === "number") {
            numbers++;
        } else if (typeof obj[key] === "string") {
            strings++;
        } else if (typeof obj[key] === "boolean") {
            booleans++;
        }
    }
    return {
        total,
        numbers,
        strings,
        booleans
    };
}
console.log(countProperties(user));


//Question 8: Object to Array Converter

 const objUser ={
     name: "John",
     age: 25,
     city: "Mumbai"
 };

 function objectToArray(obj) {
    return Object.entries(obj).map(
         ([key, value]) => `${key}: ${value}`
     );
 }
 console.log(objectToArray(objUser))



//Question 9: Safe Property Access

const user1 = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "Mumbai"
    }
};
const user2 = {
    name: "Sarah",
    address: null
};
const user3 = {
    name: "Mike"
};
function getUserCity(user) {
    return user?.address?.city || 'City not available'
 }
 console.log(getUserCity(user1));
console.log(getUserCity(user2));
console.log(getUserCity(user3));



// Question 10: User Profile with Defaults

function createUser(name, age, role) {
    return {
        name: name, age: age === undefined || age === 0 ? 18 : age,
        role: role === undefined || role === "" ? "user" : role
    };
}
console.log(createUser("John", 25, "admin"));
console.log(createUser("Sarah", 0, ""));
console.log(createUser("Mike"));


// Question 11: Counter Factory


function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount() {
            return count
        }
    };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());

counter.decrement();
console.log(counter.getCount());


// Question 12: Personalized Greeting


const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

function createGreeting(greeting) {
    return function (name) {
        return `${greeting},${name}!`;
    }
}
console.log(sayHello("John"));
console.log(sayHi("Priya"));


// Question 13: Price Calculator

function createPriceCalculator(basePrice) {
    let price = basePrice;
    let steps = [`calculate: ${basePrice}`];

    return {
        addTax(percent) {
            price += price * (percent / 100);
            steps.push(`+ ${percent}% tax`)
            return this;
        },
        addDiscount(percent) {
            price -= price * (percent / 100);
            steps.push(`- ${percent}% discount`)
            return this;
        },
        getPrice() {
            return steps.join(" ");
        }
    };
}

const calculator = createPriceCalculator(1000);
calculator.addTax(18);
calculator.addDiscount(10);
console.log(calculator.getPrice());


// Question 14: Shopping Cart

const cart = {
    items: [],
    customerName: "Guest",

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    },

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    },

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    },

    checkout() {
        const total = this.getTotal();
        console.log(`Output: Customer ${this.customerName}: Total amount ₹${total}`);
    }
};
cart.customerName = "John";
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

console.log(cart.getTotal());
cart.checkout()


//Question 15: What is the Output?

const newUser = {
 name: "John",
 age: 25,
 greet: function() {
 console.log(`Hello, I'm${this.name}`);
 },
 greetArrow: () ⇒ {
 console.log(`Hi, I'm${this.name}`);
 },
 showHobbies: function() {
 const hobbies = ["reading", "coding"];
 hobbies.forEach(function(hobby) {
 console.log(`${this.name} likes${hobby}`);
 });
 hobbies.forEach((hobby) ⇒ {
 console.log(`${this.name} loves${hobby}`);
 });
 }
 };

newUser.greet();
newUser.greetArrow();
newUser.showHobbies();


newUser.greet() output: `Hello, I'm John`
 newUser.greetArrow() output: `Hi, I'm undefined`
 First forEach output(line 1): undefined likes reading
 First forEach output(line 2): undefined likes coding
 Second forEach output(line 1): John loves reading
 Second forEach output(line 2): John loves coding

 Why is the output different between regular function and arrow function in forEach ?
     Answer :
    regular functions have there own this, arrow functions do nOT have their own this.