// ============================================
// TEAM PROFILE PAGE
// Team Members: [Add your names here!]
// ============================================

// ============================================
// MEMBER 1 VARIABLES
// ============================================

let member1Name = "Max";
let member1Age = 17;
let member1Game = "Minecraft";
let member1Music = "Bad Bunny";
let member1BestFood = "Spaghetti";
let member1Restaurant = "Chipotle";
let member1PitBull = "No, they're sweet!";
let member1Basketball = "LeBron";
let member1Future = "In college studying computer science";
let member1Color = "orange"
let member1Pet = "cat"


// ============================================
// MEMBER 2 VARIABLES
// ============================================

let member2Name = "Max";
let member2Age = 16;
let member2Game = "Fortnite";
let member2Music = "ThatMexicanOT";
let member2BestFood = "Tacos";
let member2Restaurant = "Chipotle";
let member2PitBull = "Not at all";
let member2Basketball = "LeBron";
let member2Future = "In college studying computer science";
let member2Color = "Pink";
let member2Pet = "Dog";

// ============================================
// TEAM CALCULATIONS
// ============================================

// How many team members?
let totalMembers = 2;  // Change this to 3 if you have 3 people!

// Calculate total age
let totalAge = member1Age + member2Age;  // Add member3Age if needed

// Calculate average age
let averageAge = totalAge / totalMembers;

// ============================================
// DISPLAY TEAM STATS
// ============================================

document.getElementById('total-members').textContent = totalMembers;
document.getElementById('total-age').textContent = totalAge;
document.getElementById('average-age').textContent = averageAge.toFixed(1);

// ============================================
// DISPLAY MEMBER 1
// ============================================

document.getElementById('member1Name').textContent = member1Name;
document.getElementById('member1Age').textContent = member1Age;
document.getElementById('member1Game').textContent = member1Game;
document.getElementById('member1Music').textContent = member1Music;
document.getElementById('member1BestFood').textContent = member1BestFood;
document.getElementById('member1Restaurant').textContent = member1Restaurant;
document.getElementById('member1PitBull').textContent = member1PitBull;
document.getElementById('member1Basketball').textContent = member1Basketball;
document.getElementById('member1Future').textContent = member1Future;
document.getElementById('member1Color').textContent = member1Color;
document.getElementById('member1Pet').textContent = member1Pet;



// ============================================
// DISPLAY MEMBER 2
// ============================================

document.getElementById('member2Name').textContent = member2Name;
document.getElementById('member2Age').textContent = member2Age;
document.getElementById('member2Game').textContent = member2Game;
document.getElementById('member2Music').textContent = member2Music;
document.getElementById('member2BestFood').textContent = member2BestFood;
document.getElementById('member2Restaurant').textContent = member2Restaurant;
document.getElementById('member2PitBull').textContent = member2PitBull;
document.getElementById('member2Basketball').textContent = member2Basketball;
document.getElementById('member2Future').textContent = member2Future;
document.getElementById('member2Color').textContent = member2Color;
document.getElementById('member2Pet').textContent = member2Pet;



// ============================================
// LOG TO CONSOLE (for testing)
// ============================================

console.log("Team loaded!");
console.log("Total members:", totalMembers);
console.log("Total age:", totalAge);
console.log("Average age:", averageAge);