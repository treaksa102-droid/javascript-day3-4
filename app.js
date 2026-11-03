// //មូលដ្ឋាន (១–១០)៖ Form និងការបង្ហាញទិន្នន័យ
// //1
// function formatPrice(n) {
//     return `$${n.toFixed(2)}`;
// }
// //2
// //calcTotal(price, qty) return តម្លៃសរុប។ បន្ទាប់មកសរសេរជា Arrow Function ទម្រង់ខ្លី។
// const calculateTotal = (price, qty) => {
//     return price * qty;
// };

// let price = parseFloat(prompt("Enter the price of the item:"));
// let qty = Number(prompt("Enter the quantity of the item:"));
// let total = calculateTotal(price, qty);
// console.log(`Total price is ${formatPrice(total)}`);
// //3
// const applyDiscount = (total, discount) => {
//     return total - (total * discount / 100);
// }
// //4
// const calcTax = (amount, rate = 10) => {
//     return amount * rate / 100;
// }
// console.log(`Tax on $100 at default rate is: ${formatPrice(calcTax(100))}`);
// //5
// //isAdult(age) return true បើ ≥ 18។ ត្រូវបម្លែង age ពី string ជាលេខជាមុន (Number) ព្រោះ input ពី Form តែងជា string។

// const isAdult = (age) => {
//     return age >= 18;
// }
// let ageInput = prompt("Enter your age:");
// let age = Number(ageInput);
// console.log(`Is adult: ${isAdult(age)}`);
// //6
// //isEmpty(str) return true បើ string ទទេ ឬមានតែដកឃ្លា (ប្រើ .trim())។ ប្រើពិនិត្យគ្រប់ Form។
// const isEmpty = (str) => {
//     return str.trim() === "";
// }
// let inputStr = prompt("Enter a string:");
// console.log(`Is empty: ${isEmpty(inputStr)}`);
// //7
// //greetUser(name, hour) return "Good morning, Dara" / "Good afternoon..." / "Good evening..." តាមម៉ោង។
// const greetUser = (name, hour) => {
//     if (hour < 12) {
//         return `Good morning, ${name}`;
//     } else if (hour < 18) {
//         return `Good afternoon, ${name}`;
//     } else {
//         return `Good evening, ${name}`;
//     }
// }
// let userName = prompt("Enter your name:");
// let currentHour = new Date().getHours();
// console.log(greetUser(userName, currentHour));
// //8
// //isValidAge(value) ពិនិត្យថាជាលេខ (មិនមែន NaN), ជាចំនួនគត់, និងនៅចន្លោះ 1–120។
// const isValidAge = (value) => {
//     let age = Number(value);
//     return !isNaN(age) && Number.isInteger(age) && age >= 1 && age <= 120;
// }
// let num = prompt("Enter your age:"); 
// let a = Number(num);
// console.log(`Is valid age: ${isValidAge(a)}`);
// //9
// //getDiscountRate(total) return 0% (<$50), 5% (≥$50), 10% (≥$100), 15% (≥$200)។
// const getDiscountRate = (total) => {
//     if (total >= 200) {
//         return 15;
//     } else if (total >= 100) {
//         return 10;
//     } else if (total >= 50) {
//         return 5;
//     } else {
//         return 0;
//     }
// }
// let totalAmount = parseFloat(prompt("Enter total amount:"));
// console.log(`Discount rate: ${getDiscountRate(totalAmount)}%`);
// //10
// //calcTip(bill, tipPercent, people) return ចំនួនដែលម្នាក់ៗត្រូវបង់ (ពិនិត្យ people > 0 ជាមុន)។
// const calcTip = (bill, tipPercent, people) => {
//     if (people <= 0) {
//         return "Number of people must be greater than 0.";
//     }
//     let tipAmount = bill * tipPercent / 100;
//     let totalAmount = bill + tipAmount;
//     return totalAmount / people;
// }
// let billAmount = parseFloat(prompt("Enter bill amount:"));
// let tipPercentage = parseFloat(prompt("Enter tip percentage:"));
// let numberOfPeople = Number(prompt("Enter number of people:"));
// console.log(`Each person should pay: ${formatPrice(calcTip(billAmount, tipPercentage, numberOfPeople))}`);
// //ខ. មធ្យម (១១–២០)៖ Validation និង String សម្រាប់ Login/Register
// //1
// //isValidEmail(email) ពិនិត្យ៖ មាន @ តែមួយ, មាន . ក្រោយ @, មិនចាប់ផ្តើម ឬបញ្ចប់ដោយ @ ឬ .។ ប្រើ loop និង indexOf។
// const isValidEmail = (email) => {
//     let atIndex = email.indexOf('@');
//     let dotIndex = email.lastIndexOf('.');
//     return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1 && email.indexOf('@', atIndex + 1) === -1;
// }
// let emailInput = prompt("Enter your email:");
// console.log(`Is valid email: ${isValidEmail(emailInput)}`);
// //2 
// // hasUpper(pw), hasLower(pw), hasDigit(pw), hasSpecial(pw) ដោយប្រើ loop ឆែកតួនីមួយៗ។
// const hasUpper = (pw) => /[A-Z]/.test(pw);
// const hasLower = (pw) => /[a-z]/.test(pw);
// const hasDigit = (pw) => /\d/.test(pw);
// const hasSpecial = (pw) => /[!@#$%^&*(),.?":{}|<>]/.test(pw);
// let passwordInput = prompt("Enter your password:");
// console.log(`Has upper case: ${hasUpper(passwordInput)}`);
// console.log(`Has lower case: ${hasLower(passwordInput)}`);
// console.log(`Has digit: ${hasDigit(passwordInput)}`);
// console.log(`Has special character: ${hasSpecial(passwordInput)}`);
// //3
// //isStrongPassword(pw) ភ្ជាប់ function ក្នុងលំហាត់ទី១២ រួមជាមួយប្រវែង ≥ 8។
// const isStrongPassword = (pw) => {
//     return pw.length >= 8 && hasUpper(pw) && hasLower(pw) && hasDigit(pw) && hasSpecial(pw);
// }
// console.log(`Is strong password: ${isStrongPassword(passwordInput)}`);
// //4
// //passwordMessage(pw) return សារកំហុសដំបូងដែលរកឃើញ (ឧ. "Missing uppercase letter") ឬ "OK"។ ជាសារដែលបង្ហាញក្នុង Form។
// const passwordMessage = (pw) => {
//     if (pw.length < 8) return "Password must be at least 8 characters long.";
//     if (!hasUpper(pw)) return "Missing uppercase letter.";
//     if (!hasLower(pw)) return "Missing lowercase letter.";
//     if (!hasDigit(pw)) return "Missing digit.";
//     if (!hasSpecial(pw)) return "Missing special character.";
//     return "OK";
// }
// let passwordCheck = prompt("Enter your password for validation:");
// console.log(`Password validation message: ${passwordMessage(passwordCheck)}`);
// //5
// //isValidUsername(name) ត្រូវមាន 3–15 តួ, ចាប់ផ្តើមដោយអក្សរ, មានតែអក្សរ លេខ និង _។
// const isValidUsername = (name) => {
//     return /^[A-Za-z][A-Za-z0-9_]{2,14}$/.test(name);
// }
// let usernameInput = prompt("Enter your username:");
// console.log(`Is valid username: ${isValidUsername(usernameInput)}`);
//6
//apitalize(word) និង capitalizeWords(sentence) ("hello big world" → "Hello Big World")។ ប្រើបង្ហាញឈ្មោះអ្នកប្រើ។
// const capitalize = (word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }
// let sentenceInput = prompt("Enter a sentence:");
// const capitalizeWords = (sentence) => {
//     return sentence.split(' ').map(capitalize).join(' ');
// }
// console.log(`Capitalized sentence: ${capitalizeWords(sentenceInput)}`);
//7
//truncate(text, max) បើវែងជាង max ត្រូវកាត់ ហើយបន្ថែម "..." (ឧ. "Hello World", 5 → "Hello...")។ ប្រើបង្ហាញ Description ក្នុង Card។
const truncate = (text, max) => {
    if (text.length > max) {
        return text.slice(0, max) + '...';
    }
    return text;
}
let textInput = prompt("Enter some text:");
let maxLength = Number(prompt("Enter maximum length:"));
console.log(`Truncated text: ${truncate(textInput, maxLength)}`);
//8
//slugify("My First Blog Post") → "my-first-blog-post" (តូចអក្សរ, ដកឃ្លាប្តូរជា -, ដកតួពិសេស)។ ប្រើក្នុង URL របស់ Blog។
const slugify = (text) => {
    return text.toLowerCase()
               .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
                .trim()
                .replace(/\s+/g, '-') // Replace spaces with hyphens
                .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}
let slugInput = prompt("Enter a title for slugification:");
console.log(`Slugified text: ${slugify(slugInput)}`);
//9
//countWords(text) និង readingTime(text) ប៉ាន់ស្មានម៉ោងអាន (200 ពាក្យ/នាទី) ហើយ return "3 min read"។
const countWords = (text) => {
    return text.trim().split(/\s+/).length;
}
const readingTime = (text) => {
    const words = countWords(text);
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
}
let readingInput = prompt("Enter text to estimate reading time:");
console.log(`Word count: ${countWords(readingInput)}`);
console.log(`Estimated reading time: ${readingTime(readingInput)}`);
//10
//maskEmail("dara@gmail.com") → "d***@gmail.com" និង maskPhone("012345678") → "012***678"។
const maskEmail = (email) => {
    const [localPart, domain] = email.split('@');
    if (localPart.length <= 1) return `*${domain}`;
    return `${localPart[0]}***@${domain}`;
}
const maskPhone = (phone) => {
    if (phone.length <= 6) return phone;
    return `${phone.slice(0, 3)}***${phone.slice(-3)}`;
}
let emailToMask = prompt("Enter an email to mask:");
console.log(`Masked email: ${maskEmail(emailToMask)}`);
let phoneToMask = prompt("Enter a phone number to mask:");
console.log(`Masked phone: ${maskPhone(phoneToMask)}`);
//គ. ខ្ពស់ (២១–៣០)៖ Logic ពិតប្រាកដ និង Mini Project
// //1
// //calcCartTotal(price1, qty1, price2, qty2, price3, qty3) គណនាសរុប អនុវត្តបញ្ចុះតម្លៃ (លំហាត់ ៩) ហើយបូកពន្ធ (លំហាត់ ៤)។ ចែកជា function តូចៗ ហើយបោះពុម្ពវិក្កយបត្រ។
// const calcCartTotal = (price1, qty1, price2, qty2, price3, qty3) => {
//     const total1 = calculateTotal(price1, qty1);
//     const total2 = calculateTotal(price2, qty2);
//     const total3 = calculateTotal(price3, qty3);
//     const subtotal = total1 + total2 + total3;
//     const discount = calculateDiscount(subtotal);
//     const total = subtotal - discount;
//     const tax = calculateTax(total);
//     return total + tax;
// };
// let price1 = parseFloat(prompt("Enter price for item 1:"));
// let qty1 = Number(prompt("Enter quantity for item 1:"));
// let price2 = parseFloat(prompt("Enter price for item 2:"));
// let qty2 = Number(prompt("Enter quantity for item 2:"));
// let price3 = parseFloat(prompt("Enter price for item 3:"));
// let qty3 = Number(prompt("Enter quantity for item 3:"));
// let dis=parseFloat(prompt("Enter discount percentage:"));
// const calculateDiscount = (subtotal) => {
//     return subtotal * dis / 100;
// };
// const calculateTax = (amount) => {
//     const taxRate = 10;
//     return amount * taxRate / 100;
// };
// console.log(`Final total after discount and tax: ${formatPrice(calcCartTotal(price1, qty1, price2, qty2, price3, qty3))}`);
// //2
// //paginate(totalItems, pageSize, currentPage) បោះពុម្ពចំនួនទំព័រសរុប, ធាតុដំបូង និងចុងក្រោយនៃទំព័រនោះ (ឧ. 95 ធាតុ, 10/ទំព័រ, ទំព័រ 3 → ធាតុ 21–30)
// //  ព្រមទាំង hasNext, hasPrev។ ប្រើ console.log ជំនួស return object (Object រៀនថ្ងៃសុក្រ)។ ប្រើពិតក្នុង Pagination API សប្តាហ៍ទី៩។
// const paginate = (totalItems, pageSize, currentPage) => {
//     const totalPages = Math.ceil(totalItems / pageSize);
//     const startItem = (currentPage - 1) * pageSize + 1;
//     const endItem = Math.min(startItem + pageSize - 1, totalItems);
//     const hasNext = currentPage < totalPages;
//     const hasPrev = currentPage > 1;
//     console.log(`Total pages: ${totalPages}`);
//     console.log(`Items on current page: ${startItem} - ${endItem}`);
//     console.log(`Has next page: ${hasNext}`);
//     console.log(`Has previous page: ${hasPrev}`);
// }
// let totalItems = Number(prompt("Enter total number of items:"));
// let pageSize = Number(prompt("Enter page size:"));
// let currentPage = Number(prompt("Enter current page number:"));
// paginate(totalItems, pageSize, currentPage);
// const totalItems2 = 95;
// const pageSize2 = 10;
// const currentPage2 = 3;
// paginate(totalItems2, pageSize2, currentPage2);
// const totalItems3 = 50;
// const pageSize3 = 10;
// const currentPage3 = 5;
// paginate(totalItems3, pageSize3, currentPage3);
// console.log(`Total pages: ${Math.ceil(totalItems3 / pageSize3)}`);
//3

