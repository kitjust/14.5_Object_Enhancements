// ES5
function createInstructor(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
}

//ES2015 Version
const createInstructor = (firstName, lastName) => ({firstName, lastName });

createInstructor("Jessica", "Born") // {firstName: 'Jessica', lastName: 'Born'}

// Computed Property Names ES5
var favoriteNumber = 42;
var instructor = {
    firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"

// Computed Property Names ES2015 Version
let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

// Object Methods
var instructor = {
    firstName: "Colt",
    sayHi: function(){ return "Hi!" },
    sayBye: function(){ return this.firstName + " says bye!" }
}

// Object Methods ES2015 Version
const instructor = {
    firstName: "Colt",
    sayHi(){ return "Hi!" },
    sayBye(){ return this.firstName + " says bye!" }
}

// createAnimal function
const d = createAnimal("dog", "bark", "Woooof!") // {species: "dog", bark: ƒ}
d.bark() //"Woooof!"
const s = createAnimal("sheep", "bleet", "BAAAAaaaa") // {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
const createAnimal = (species, verb, noise) => ({
	species,
	[verb](){ return noise }
});