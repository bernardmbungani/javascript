/* 
Activity: Contact manager
*/

// MAKE CONTACT BOOK
var contactBook = {
    init: function (lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    },
    describe: function () {
    // template for listing names
        var description = "Last name: " + this.lastName + ", first name: " + this.firstName;
        return description;
    },
};

var name1 = Object.create(contactBook);
name1.init("Smith", "John");

var name2 = Object.create(contactBook);
name2.init("Doe", "Jane");

var names = [];
names.push(name1);
names.push(name2);

answerList = [];
storeAnswer();

function storeAnswer() {
    console.log("Welcome to your contacts manager!");
    console.log("1: List contacts");
    console.log("2: Add a contact");
    console.log("0: Quit");
    var answer = prompt("What would you like to do?");
    answerList.push(answer);
    processAnswer();
}

function processAnswer(){
    // Retrieve the latest answer
    var current = answerList.length - 1;
    var currentAnswer = answerList[current];
    //console.log(currentAnswer);

    if (currentAnswer === "0") {
        answer0();
    }
    else if (currentAnswer === "1") {
        answer1();
    }
    else if (currentAnswer === "2") {
        answer2();
    }
    else {
        answerNot();
    }
}

function answer0(){
    console.log("Goodbye.");
}

function answer1() {
    // Prints the list to the console
    console.log("Here's a list of all your contacts:")
    names.forEach(function(contactBook){
    console.log(contactBook.describe());
    });
    storeAnswer();
}

function answer2() {
    // NEW NAMES
    // Make the variable name for adding new names
    var j = names.length - 1
    var k = "name" + j
    var namesStored = [];
    namesStored.push(k);
    //console.log(namesStored);
    // Ask for new names
    var l = Object.create(contactBook);
    l.init(
    prompt("Last name?"), prompt("First name?")
    );
    names.push(l);
    //
    //PRINT NAMES
    // Prints the list to the console
    console.log("Here is a list of all your contacts:")
    names.forEach(function(contactBook){
    console.log(contactBook.describe());
    });
    storeAnswer();
}

function answerNot() {
    console.log("Please enter a value from the list.");
    storeAnswer();
}