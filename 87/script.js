// try and catch 

// try block: 
// Ye block un code parts ko rakhne ke liye hota hai jahan galti hone ka chance ho sakta hai. Matlab, jo code risky ho aur jismein error aa sakta hai, wo try block ke andar likha jata hai.

// catch block: 
// Agar try block mein koi error aa jaye, toh wo error catch block mein chala jata hai. Yahan hum specify kar sakte hain ke agar error ho, toh kya response dena hai ya kya karna hai.


// Using try and catch examples:
// Example: 01
// function greetWorld() {
//   // try block: Contains the code to execute.
//   try {
//     var greeting = "Hello world!";
//     alert(greeeeting);  // Mistake: greeeeeting is not define
//   } catch (error) {
//     // catch block: Handles any errors that occur in the try block.
//     console.log(error);
//     // alert(error);
//   }
   
//   }

// // call the function
//   greetWorld();
// ==============================================



// Example: 02
// try {
//   let result = 10 / UndefinedVariable;
// } catch (error) {
//   console.log("Full error object: ", error);         
//   // Ye pura object print karega, jo details bhi hold karega
//   console.log("Error message only: ", error.message); 
//   // Sirf error ka short message print karega
// }

















