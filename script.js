//ផ្នែក A៖ លក្ខខណ្ឌ if / else if / else
    //1
// let age,price;
// age=Number(prompt("Enter your age: "));
// //condition
// if(age>0 && age<12){
//     price=2;
// }else if(age>=12 && age<=59){
//     price=5;
// }else if(age>=60 && age<100){
//     price=3;
// }else{
//     price="Invalid Age";
// }
// console.log("Exercise I");
// console.log("Age: "+age+" "+"Price: "+price+" $");
// //2
// let score,grade;
// //condition
// score = Number(prompt("Enter your score: "));
// //condition
// if (score>=90 && score<=100){
//     grade="A";
// }else if(score>80 && score<90){
//     grade="B";
// }else if(score>=70 && score<=80){
//     grade="C";
// }else if(score>=50 && score<70){
//     grade="D";
// }else if(score<50){
//     grade="F";
// }else{
//     grade="Invalid Score";
// }
// console.log("Exercise II");
// console.log("Score: "+score+" "+"Grade: "+grade);
// // //3
// let year;
// year=Number(prompt("Enter number of year: "));
// if(year%4 === 0 && year % 100!==0 || (year % 400 === 0)){
//     message="ឆ្នាំបង្រ្គប់";
// }else{
//     message="ឆ្នាំមិនបង្រ្គប់";
// }
// console.log("Exercise III");
// console.log(year+" "+message);
//ប្រព័ន្ធ Login អនុញ្ញាតឲ្យចូល បើឈ្មោះអ្នកប្រើត្រឹមត្រូវ និង (លេខសម្ងាត់ត្រឹមត្រូវ ឬ មានលេខកូដ OTP)។ 
// តើករណីខាងក្រោមអនុញ្ញាត ឬបដិសេធ?
//  ក) ឈ្មោះត្រូវ, លេខសម្ងាត់ត្រូវ, គ្មាន OTP។ //true
// ខ) ឈ្មោះត្រូវ, លេខសម្ងាត់ខុស, មាន OTP។ //false
// គ) ឈ្មោះត្រូវ, លេខសម្ងាត់ខុស, គ្មាន OTP។ false
// ឃ) ឈ្មោះខុស, លេខសម្ងាត់ត្រូវ, មាន OTP។ false
//លំហាត់ ៥។ (ងាយ) Ternary (ប្រតិបត្តិករលក្ខខណ្ឌមួយបន្ទាត់) ស័ក្តិសមនឹងស្ថានភាពមានប៉ុន្មានផ្លូវ?
//  បើមាន 2 ផ្លូវ (គូ ឬ សេស) និងបើមាន 4 ផ្លូវ (ដូចចំណាត់ថ្នាក់ A, B, C, F) 
// តើអ្នកគួរប្រើអ្វី ហើយហេតុអ្វី?
//លំហាត់ ៦។ (ងាយ) ក្នុងលក្ខខណ្ឌ if តម្លៃខ្លះត្រូវបានចាត់ទុកថាជា false។ 
// ក្នុងចំណោមតម្លៃទាំងនេះ មួយណាចាត់ជា false? លេខ 0, អក្សរ 0 (ក្នុងសញ្ញាអញ្ជើញ), អក្សរទទេ, 
// អក្សរដែលមានដកឃ្លាតែមួយ, អក្សរ false, លេខ -1។ => អក្សរ false, អក្សរ 0 (ក្នុងសញ្ញាអញ្ជើញ)
//7
// let Age;

// Age=Number(prompt("Enter your age: "));
// if(Age>20){
//     sms="get VIP";
// }
// else if(Age>18){
//     sms="can login";
// }
// else if(Age>=10){
//     sms="only view";
// }
// console.log("Exercise VII");
// console.log("My condition is: "+ sms);
//8
//លំហាត់ ៨។ (ងាយ) ប្រៀបធៀបលេខ 5 នឹងអក្សរ 5 (ក្នុងសញ្ញាអញ្ជើញ)។ 
// តើប្រើ == ឲ្យ true ឬ false? ប្រើ === ឲ្យអ្វី? ហើយ !== ឲ្យអ្វី? ហេតុអ្វីអ្នកជំនាញចូលចិត្តប្រើ ===?

//ផ្នែក B៖ while និង do…while
//1
// let save=100,month=0;
// //condition
// while(save<500){
//      month += 1       
//     save += 30
// }
// console.log(`It will take ${month} months to save $500`);
// console.log(`Your saving amount is $ ${save}`);
// //2
// let virus=1,min=0;
// //condition
// while(virus<1000){
//     virus +=2;
//     min += 1
// }
// console.log(`It will take ${min} minutes for the virus to reach 1000`);
// console.log(`The virus amount is ${virus}`);
//3
//ក) បើលក្ខខណ្ឌមិនពិតតាំងពីដំបូង តើ while និង do…while ដំណើរការប៉ុន្មានដងរៀងគ្នា? => ដំណើរការតែ១ដង
// ខ) ស្ថានភាពណាដែល do…while សមជាង while៖ ការសួរអ្នកប្រើបញ្ចូលលេខសម្ងាត់ម្តងយ៉ាងហោចណាស់ ឬ ការរាប់លេខពី 1 ដល់ 10? ហេតុអ្វី?
//  => ការសួរអ្នកប្រើបញ្ចូលលេខសម្ងាត់ម្តងយ៉ាងហោចណាស់ ដោយសារតែ do…while អាចដំណើរការបានមួយដងទោះបីលក្ខខណ្ឌមិនពិតក៏ដោយ
//4
//អ្នកសរសេរ while ដើម្បីរាប់ពី 1 ដល់ 10 ប៉ុន្តែកម្មវិធីមិនឈប់ទេ (Infinite Loop)។ សូមរកមូលហេតុពីរយ៉ាងដែលអាចបណ្តាលឲ្យកើតបញ្ហានេះ។
//=> មិនបាន់លក្ខខណ្ឌឲ្យត្រឹមត្រូវ ឬ មិនបន្ថែមតម្លៃឲ្យអថេរ
//5
// យកលេខ 100 ចែកនឹង 2 ម្តងហើយម្តងទៀត ដោយបោះបង់ផ្នែកទសភាគចោលរាល់ពេល (ឧទាហរណ៍ 25 ចែក 2 ទទួលបាន 12)។
//  តើត្រូវចែកប៉ុន្មានដងទើបលទ្ធផលស្មើ 1 ឬតូចជាង? => ចែក៦ដង
//ផ្នែក C៖ for, break, continue
//1
//ក.ផលបូកនៃលេខពី 1 ដល់ 100 ស្មើប៉ុន្មាន?
let sum=1;
while(sum<=100){
    sum += 1;
}
console.log(`The sum of 1 to 100 is: ${sum}`);
//ផលបូកនៃលេខគូតែប៉ុណ្ណោះ ពី 1 ដល់ 100 ស្មើប៉ុន្មាន?
let evenSum = 0;
for (let i = 2; i <= 100; i += 2) {
    evenSum += i;
}
console.log(`The sum of even numbers from 1 to 100 is: ${evenSum}`);
//ហើយ Loop ត្រូវដំណើរការប៉ុន្មានដងសម្រាប់ចំណុច ក)?​ => Loop ត្រូវដំណើរការប្រមាណ 100 ដងសម្រាប់ចំណុច ក) ពីព្រោះត្រូវបូកលេខគ្រប់តួលេខ ពី 1 ដល់ 100
//2
//ក្នុងចំណោមលេខពី 1 ដល់ 100 តើមានប៉ុន្មានលេខដែលចែកនឹង 3 ដាច់ ឬ ចែកនឹង 5 ដាច់ (ឬទាំងពីរ)? 
let count = 0;
count=Number(prompt("Enter a number less than 100: "));
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        count++;
    }
}
console.log(`The count of numbers divisible by 3 or 5 from 1 to 100 is: ${count}`);
//3
//ក) Loop មួយចាប់ផ្តើមពី 10 ថយម្តងៗ 3 ដរាបណាតម្លៃនៅធំជាង 0។ តើតម្លៃអ្វីខ្លះដែលបង្ហាញ ហើយ Loop ដំណើរការប៉ុន្មានដង?
// => តម្លៃដែលបង្ហាញគឺ 10, 7, 4, 1 ហើយ Loop ដំណើរការប្រមាណ 4 ដង
//ខ) Loop មួយចាប់ផ្តើមពី 1 កើនម្តងៗ 2 ដរាបណាតម្លៃតូចជាង 20។ តើដំណើរការប៉ុន្មានដង ហើយតម្លៃចុងក្រោយជាអ្វី?
// => Loop ដំណើរការប្រមាណ 10 ដង ហើយតម្លៃចុងក្រោយគឺ 19
//4
//ចាប់ផ្តើមស្វែងរកពី 101 ឡើងលើ រកលេខដំបូងដែលចែកនឹង 7 ដាច់ផង និង 11 ដាច់ផង ហើយឈប់ភ្លាមពេលរកឃើញ (break)។ តើលេខនោះជាអ្វី? ហើយ Loop បានពិនិត្យលេខសរុបប៉ុន្មានតួ?
let foundNumber = null;
let checkCount = 0;
for (let i = 101; i < Infinity; i++) {
    checkCount++;
    if (i % 7 === 0 && i % 11 === 0) {
        foundNumber = i;
        break;
    }
}
console.log(`The first number divisible by both 7 and 11 is: ${foundNumber}`);
console.log(`The loop checked ${checkCount} numbers.`);
//5
//ក
//អ្នករាប់ពី 1 ដល់ 20 ប៉ុន្តែរំលង (continue) លេខដែលចែកនឹង 3 ដាច់ និងរំលងលេខ 5។ ក) តើមានលេខប៉ុន្មានតួដែលត្រូវបានបង្ហាញ?
// => មានលេខ 12 តួដែលត្រូវបានបង្ហាញ
//ខ) ផលបូកនៃលេខដែលបានបង្ហាញស្មើប៉ុន្មាន?
let um = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 || i === 5) {
        continue;
    }
    um += i;
}
console.log(`The sum of the remaining numbers is: ${um}`);
//6
//អ្នករាប់ពី 1 ដល់ 20 ប៉ុន្តែរំលង (continue) លេខដែលចែកនឹង 3 ដាច់ និងរំលងលេខ 5។ ក) តើមានលេខប៉ុន្មានតួដែលត្រូវបានបង្ហាញ?
// => មានលេខ 12 តួដែលត្រូវបានបង្ហាញ
//ខ) ផលបូកនៃលេខដែលបានបង្ហាញស្មើប៉ុន្មាន?
let fu = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 || i === 5) {
        continue;
    }
    fu += i;
}
console.log(`The sum of the remaining numbers is: ${fu}`);
//7
//Factorial នៃ n គឺផលគុណ 1 × 2 × … × n។ ក) តើ Factorial នៃ 6 ស្មើប៉ុន្មាន?
let factorial = 1;
for (let i = 1; i <= 6; i++) {
    factorial *= i;
}
console.log(`The factorial of 6 is: ${factorial}`);
//ខ) តើ Factorial នៃ 10 ស្មើប៉ុន្មាន?
let factorial10 = 1;
for (let i = 1; i <= 10; i++) {
    factorial10 *= i;
}
console.log(`The factorial of 10 is: ${factorial10}`);
//ផ្នែក D៖ Loop ជាន់គ្នា
//1
// ក) តារាងគុណមួយដែល Loop ក្រៅរាប់ពី 1 ដល់ 9 ហើយ Loop ក្នុងរាប់ពី 1 ដល់ 9 តើផ្នែកខាងក្នុងដំណើរការសរុបប៉ុន្មានដង?
// => ផ្នែកខាងក្នុងដំណើរការសរុប 81 ដង (9 * 9)
//ខ) ត្រីកោណមួយមាន 5 ជួរ ជួរទី n មានផ្កាយ n ដើម តើបង្ហាញផ្កាយសរុបប៉ុន្មានដើម?
// => បង្ហាញផ្កាយសរុប 15 ដើម (1 + 2 + 3 + 4 + 5 = 15)
//2
//Loop ក្រៅរាប់ i ពី 1 ដល់ 3 និង Loop ក្នុងរាប់ j ពី 1 ដល់ 3 ហើយបង្ហាញគូ (i, j)។
//  ក) បើ Loop ក្នុងប្រើ break ពេល j ស្មើ 2 តើបង្ហាញប៉ុន្មានគូ?
let pairCount = 0;
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            break;
        }
        console.log(`(${i}, ${j})`);
        pairCount++;
    }
}
console.log(`The number of pairs displayed is: ${pairCount}`);
//ខ) បើជំនួសដោយ continue ពេល j ស្មើ 2 តើបង្ហាញប៉ុន្មានគូ? សូមសរសេរគូទាំងនោះចេញមក។
let pairCountContinue = 0;
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            continue;
        }
        console.log(`(${i}, ${j})`);
        pairCountContinue++;
    }
}
console.log(`The number of pairs displayed is: ${pairCountContinue}`);
//3
//អ្នកដើរពីលេខ 0 ដល់ 9។ 
// ពេលជួបលេខដែលចែកនឹង 3 ដាច់ ត្រូវរំលង។ ពេលលេខធំជាង 7 ត្រូវឈប់ទាំងស្រុង។ លេខដែលសល់បូកចូលក្នុងផលបូក។ 
// តើផលបូកចុងក្រោយស្មើប៉ុន្មាន ហើយលេខណាខ្លះបានបូក?
let totalSum = 0;
let addedNumbers = [];
for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    if (i > 7) {
        break;
    }
    totalSum += i;
    addedNumbers.push(i);
}
console.log(`The final sum is: ${totalSum}`);
console.log(`The numbers that were added are: ${addedNumbers.join(', ')}`);
//ផ្នែក E៖ ដោះស្រាយបញ្ហា
//1
//FizzBuzz ពី 1 ដល់ 15៖ បើចែកនឹង 3 ដាច់ បង្ហាញ Fizz, បើចែកនឹង 5 ដាច់ បង្ហាញ Buzz, បើចែកដាច់ទាំងពីរ បង្ហាញ FizzBuzz, ក្រៅពីនេះបង្ហាញលេខ។
//  ក) តើលេខណាខ្លះបង្ហាញ Fizz, Buzz, FizzBuzz?
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//ខ) តើមានលេខធម្មតាប៉ុន្មានតួ?
// => មានលេខធម្មតា 8 តួ (1, 2, 4, 7, 8, 11, 13, 14)
// គ) ហេតុអ្វីត្រូវពិនិត្យលក្ខខណ្ឌ FizzBuzz មុនគេ?
// => ព្រោះ FizzBuzz គឺជាលក្ខខណ្ឌដែលមានលក្ខណៈពិសេសជាង Fizz និង Buzz ដូច្នេះត្រូវពិនិត្យវាមុនដើម្បីទទួលបានលទ្ធផលត្រឹមត្រូវ
//2
//លេខបឋមគឺលេខធំជាង 1 ដែលចែកដាច់តែនឹង 1 និងខ្លួនឯង។ 
// ក) តើ 29, 91, 97 និង 51 ជាលេខបឋមឬទេ? => 29 និង 97 ជាលេខបឋម ខណៈដែល 91 និង 51 មិនមែនជាលេខបឋម
//ខ) ដើម្បីពិនិត្យ 97 តើត្រូវសាកល្បងចែកនឹងលេខអ្វីខ្លះ បើយើងសាកល្បងតែលេខដែលការេរបស់វាមិនលើស 97? ហេតុអ្វីបានជាគ្រប់គ្រាន់?
//=> ត្រូវសាកល្បងចែកនឹង 2, 3, 4, 5, 6, 7, 8, 9 (លេខទាំងនេះមានការេមិនលើស 97)។
//3
//ចង់បូកខ្ទង់នីមួយៗនៃលេខ 9875 ដោយប្រើ Loop តែលើប្រតិបត្តិការ % និងការចែក។ ក) តើបូកបានប៉ុន្មាន?
let number = 9875;
let digitSum = 0;
while (number > 0) {
    digitSum += number % 10;
    number = Math.floor(number / 10);
}
console.log(`The sum of the digits of 9875 is: ${digitSum}`);
//ខ) Loop ដំណើរការប៉ុន្មានដង?
// => Loop ដំណើរការប្រមាណ 4 ដង (9875 -> 987 -> 98 -> 9 -> 0)
//គ) ពន្យល់ជាជំហានៗថា ក្នុងមួយជុំអ្នកធ្វើអ្វីខ្លះ ហើយលក្ខខណ្ឌឈប់គឺអ្វី?
// => ក្នុងមួយជុំ Loop, អ្នកយកខ្ទង់ចុងក្រោយនៃលេខដោយប្រើ % 10 ហើយបូកវាទៅ digitSum។ 
// បន្ទាប់មកអ្នកចែកលេខដោយ 10 ដើម្បីយកខ្ទង់បន្ទាប់។ លក្ខខណ្ឌឈប់គឺពេល number <= 0។