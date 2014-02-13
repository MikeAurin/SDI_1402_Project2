// Mike Aurin
// SDI 1402 
// Project 2
/* My project this week will follow the same story but will encompass the newly learned
   elements and follow the structure of the assigned flowchart.
*/

// Variables
var myBoss = "Bernie",
	theTheater = "Regal Cinemas at Sawgrass Mills Mall",
	newEmployeePrompt,
	myCompany = "Theater Hands",
	lightLocation,
	brokenBallast = false,
	lightsOn = false,
	boxOfBulbs = 12,
	lightsPerFixture = 4,
	lunchLocation,
	

// prompt requirement
newEmployeePrompt = prompt("You are my new employee!  What is your name?"); 
if (newEmployeePrompt === "Lee") { 
	console.log("Nice to meet you.  You look like a strong, competent fellow.")
} else { 
	console.log("You're kind of scrawny, but you'll do.");
};

console.log("Welcome to " + myCompany + ", " + newEmployeePrompt + "!  You're my new helper, let's get started!");
console.log("Today " + myBoss + " wants us to examine and repair a light fixture at " + theTheater + ".");

// confirm
lightLocation = confirm("The light fixture that is out is located in the front of the auditorium, right?");
if (lightLocation === true) {
	console.log("Excellent, I'll go get the lift.")
} else {		
	console.log("Looks like you're going to have to go get that ladder.");
};

// boolean while loop
if (brokenBallast || lightsOn === false) {
	var getBulbs = function(newBulbs) {
		var brokenBulbs = 4,
			goodBulbs = 0;
		if (brokenBulbs > goodBulbs) {
			console.log("The light bulbs are bad.");
			} else {
			console.log("The ballast needs to be replaced.");
		}
		return goodBulbs;
	}
	
};
var replaceBulbs = getBulbs(4)
console.log("We need to replace " + replaceBulbs + " lights in this auditorium.");

neededBulbs = replaceBulbs;
console.log("A box of lights contain " + boxOfBulbs + " bulbs.  We only need " + replaceBulbs + " of them.");

// math for loop
var work = function() {
for (var lightsPerFixture = 4; lightsPerFixture > 0; lightsPerFixture--) {
	console.log("One light down, " + lightsPerFixture + " to go.  Hand me another one " + newEmployeePrompt + ".");
	 }
	var invoice = lightsPerFixture + 4
		return invoice;
};
		
var doWork = work();
console.log("Thanks " + newEmployeePrompt + ".  We changed " + doWork + " lights.");

console.log("Now we'll send an invoice for " + lightsPerFixture + " bulbs.");

// string concatenation
lunch = function(food){
	var lunchLocation = confirm("Do you wanna go to Panda Express for lunch?  Otherwise we're hitting the Mickey D's drive thru on the way home.");
	if (lunchLocation === true) {
		lunchLocation = "Panda Express";
		} else {
		lunchLocation = "McDonalds";
	}
	return lunchLocation;
};
var lunchLocation = lunch()
console.log("Alright, " + newEmployeePrompt + "...Let's go to " + lunchLocation + ".");

console.log("Thanks for your hard work today " + newEmployeePrompt + "!  You learned how to change " + lightsPerFixture + " and we got some delicious " + lunchLocation + ".");