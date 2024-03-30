var text = "The new Yorker magzaine does not allow the phrase British.The say it should be British."

// document.write(text.replaceAll("British", "Pakistan"));
// document.write(text.replace(/British/g, "Pakistan")); //regular expression


// var indexNumber = text.indexOf("British");  // for first British
// var firstText = text.slice(0,indexNumber);
// var replaceText = "Pakistan";
// var remainText = text.slice(indexNumber + 7);
// document.write(firstText + replaceText + remainText);


// var indexNumber = text.lastIndexOf("British");   // for last British
// var firstText = text.slice(0,indexNumber);
// var replaceText = "Pakistan";
// var remainText = text.slice(indexNumber + 7);
// document.write(firstText + replaceText + remainText);


// for(i=0 ; i<text.length ; i++){
//     if(text.slice(i,i+7)==="British"){
//     text=text.slice(0,i)+"Pakistan"+text.slice(i+7)
//     }
// }
// document.write(text);


// var name = "abc";
// name = name + 123
// name += 123;
// document.write(name)


// var word = prompt("Enter word here");
// var reverseWord = "";
// for(var i= word.length-1 ; i>=0 ; i-- ){
//     reverseWord += word[i];
// }
// if(word === reverseWord){
//     document.write("it is a plaindrome word")
// }
// else{
//     document.write("it is not a plaindrome word")
// }


// var number = 12.312;
// document.write(Math.round(number));


// var number = 12.312;
// document.write(Math.ceil(number));

// var number = 12.612;
// document.write(Math.floor(number));


// document.write(Math.random()) // generate random number between 0 to 1...
// document.write(Math.random()*10) // generate random number between 0 to 10...


// var headUser = prompt("Enter your name");
// var tailUser = prompt("Enter your name");
// var toss = Math.random()*2;
// var convert = Math.floor(toss);
// if(convert === 0){
//     document.write(headUser , " Wins the toss")
// }
// else{
//     document.write(tailUser , " Wins the toss")
// }


// let pass = '';
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$_';
//     for (let i = 0; i < 10; i++) {
//         let char = Math.floor(Math.random()
//             * str.length);
//         pass += str.charAt(char)
//     }
//     console.log(pass);



// WORK

// var number = 12.312;
// document.write(Math.round(number));


// var origNum = 12.612;
// var roundNum = (Math.round(origNum));
// document.write(roundNum);


// var origNum = 12.312;
// var roundNum = (Math.round(origNum));
// document.write(roundNum);


// var origNum = 0.5;
// var roundNum = (Math.floor(origNum));
// document.write(roundNum);


// // Generate a random number between 0 and 1
// var randomNum = Math.random();
// // Convert the random number to a range between 1 and 50
// var randomNumberInRange = Math.floor(randomNum * 50) + 1;
// document.write(randomNumberInRange);


// var randomNumber = Math.random().toFixed(2);
// document.write(randomNumber);



//     // Generate a random number between 1 and 6 (inclusive)
//  var rollDice = Math.floor(Math.random() * 6) + 1;
//   // Roll the dice and display the result
// var result = rollDice();
// document.write("You rolled a " + result);


// var headUser = prompt("Enter your name");
// var tailUser = prompt("Enter your name");
// var toss = Math.random()*2;
// var convert = Math.floor(toss);
// if(convert === 0){
//     document.write(headUser , " Wins the toss")
// }
// else{
//     document.write(tailUser , " Wins the toss")
// }


// var str = "123";
// var num = parseInt(str);
// document.write(num); // Output: 123


// var str = "3.14";
// var num = parseFloat(str);
// document.write(num); // Output: 3.14

  
// var num = 42;
// var str = num.toString();
// document.write(str); // Output: "42"


// var str = "3.14";
// var num = parseFloat(str);
// document.write(num); // Output: 3


// var num = 3.14159265359;
// var newNum = num.toFixed(4).toString();
// document.write(newNum); // Output: "3.1416"


// var num = 3.14159;
// num = +num.toFixed(2);
// document.write(num); // Output: 3.14


// if ((num.toFixed(2)).toString().length > 4) {
   
// }


// var num = 123.456789; 
// var roundedString = num.toFixed(2).toString(); 
// alert(roundedString); 


// ---------------- //

// var num = prompt("Enter positive Number Here...")
// if (!isNaN(num) && num > 0){
// var rounded = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("<h3>" + "Number: " + num + "</h3>" + "<br>" +
// "<h3>" + "Round off value: " + rounded + "</h3>" + "<br>" +
// "<h3>" + "floor value: " + floor + "</h3>" + "<br>" +
// "<h3>" + "Ceil value: " + ceil + "</h3>" + "<br>" );
// }
// else{
//     alert("Enter positive integer")
// }


// var num = prompt("Enter Negative Number Here...")
// var num = parseFloat(num) 
// if (!isNaN(num) && num < 0){
// var rounded = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("<h3>" + "Number: " + num + "</h3>" + "<br>" +
// "<h3>" + "Round off value: " + rounded + "</h3>" + "<br>" +
// "<h3>" + "floor value: " + floor + "</h3>" + "<br>" +
// "<h3>" + "Ceil value: " + ceil + "</h3>" + "<br>" );
// }
// else{
//     alert("Enter negative integer")
// }


// var num = prompt("Enter Number here...");
// var num = parseInt(num);
// if(!isNaN(num)){
//     var absoluteValue = Math.abs(num)
// }
// document.write(absoluteValue);


// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("<h2>The dice rolled: " + diceValue + "</h2>");


// var headUser = prompt("Enter your name");
// var tailUser = prompt("Enter your name");
// var toss = Math.random()*2;
// var convert = Math.floor(toss);
// if(convert === 0){
//     document.write(headUser , " Wins the toss")
// }
// else{
//     document.write(tailUser , " Wins the toss")
// }


// var num = Math.random()*100;
// var range = Math.floor(num)+1;
// document.write("Random number between 1 to 100 : " + range);


// var weight = prompt("enter your weight in kilograms...");
// var convert = parseInt(weight);
// document.write("The weight of user is " + weight)


// var store = 9
// var userInput = prompt("Enter number here");
// var convert = parseInt(userInput)
// if(store === convert){
//     document.write("Congratulations you entered same number")
// }
// else{
//     alert("try Again");
// }
