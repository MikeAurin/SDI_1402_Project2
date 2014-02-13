// Mike Aurin
// SDI 1402 
// Project 2
/* My project this week will follow the same story but will encompass the newly learned
   elements and follow the structure of the assigned flowchart.
*/

// Variables
var myBoss = "Bernie",
	theTheater = "Regal Cinemas at Sawgrass Mills".
	numberOfBulbs = 4,
	newEmployeePrompt,
	myCompany = "Theater Hands",
	lightLocation;
	leftLights = true,
	rightLights = true,
	brokenBallast = false,

newEmployeePrompt = prompt("You are my new employee!  What is your name?"); 
if (newEmployeePrompt === "Lee") { 
	console.log("Nice to meet you.  You look like a strong, competent fellow.")
} else { 
	console.log("You're kind of scrawny, but you'll do.");
};

console.log("Welcome to " + myCompany + ", " + newEmployeePrompt + "!  Let's get started.");

lightLocation = confirm("The light fixture that is out is located in the front of the auditorium, right?");
if (lightLocation === true) {
	console.log("Excellent, I'll go get the lift.")
} else {		
	console.log("Looks like you're going to have to go get that ladder.");
};

// Reused from boolean logic notes.  Revise in the morning to adjust appropriately
if ((rightLights && leftLights) || brokenBallast) {
	console.log("The ballast is fine.  The lights are just old and need to be changed");
} else {
	console.log("The lights are fine, the ballast needs to be replaced");
}




// Requirements:
// Remember to comment code...and remove this.
// Git commits!
// One while loop and one for loop
// At least two boolean logic expressions
// One function that doesn't return a value (a procedure)
// One function that takes two arguments and does a while loop with some kind of Boolean comparison between them. 
//   One argument should be the value returned from the confirm and the other can be any data type you choose.
// One function that does something interesting with strings after accepting two strings as arguments. 
//   This can be simple concatenation, but you are encouraged to look into other, more interesting string applications.
// One function that takes a single number and uses it in a for loop somehow, doing some math at the same time. 
//   This can be something simple like counting or summing, but again you are encouraged to look into more interesting applications.
   
/*Since three of these functions return values, you should do something interesting with the values when you get them back. 
  You are encouraged, but not required, to use the return values from earlier functions as the inputs for later functions. 
  You'll need this for Project 3, so it's something you should get comfortable with now.
*/

// All functions take arguments