/* How to get an array index with a value */



const prompt = require("prompt-sync")()

const switchLabel = [
    "No",       //0
    "Yes",      //1
    "Maybe",    //2
]

console.log(`Do you want ${switchLabel[0]} or ${switchLabel[1]}`)
const answerPrompt = prompt('Your Answer: ')



// If Else 
/* answer 0 needs to be declared first outside of the block */
/* TOTAL LINE: 7 */
let answer0
if (answerPrompt == "No") {
    answer0 = switchLabel.indexOf(switchLabel[0])
} else if (answerPrompt == "Yes") {
    answer0 = switchLabel.indexOf(switchLabel[1])
} else if (answerPrompt == "Maybe") {
    answer0 = switchLabel.indexOf(switchLabel[2])
}

// Switch
/* TOTAL LINE: 14 */
/* in line 43, Wwy did I use...
    case switchLabel['0']:
        versus
    case "No":

    Because later what if I want to change the value to "no", or "nah" or "no wai".
    Then I will have to change the value of the array and in the switch--double work and potential for error. 
    By using switchLabel['0'] I get to only change it in the array and the script will understand the change */

let answer1
switch(answerPrompt) {
    case switchLabel['0']:
        answer1 = switchLabel.indexOf(switchLabel[0])
        break;
    
    case switchLabel['1']:
        answer1 = switchLabel.indexOf(switchLabel[1])
        break;

    case switchLabel['2']:
        answer1 = switchLabel.indexOf(switchLabel[2])
        break;
}


// Ternary
/* TOTAL LINE: 1 */
const answer2 = answerPrompt === "No" ? switchLabel.indexOf(switchLabel[0]) : switchLabel.indexOf(switchLabel[1])


// Regular Function
/* TOTAL LINE: 5 */
function getArrayIndex(propValue) {
    return switchLabel.indexOf(propValue)
}

const answer3 = getArrayIndex(answerPrompt)


/* My Fav is Regular Function amongst all */
console.log (`Answer0 (If Else) 👉 Response: ${answerPrompt} Index: ${answer0}`)
console.log (`Answer1 (Switch) 👉 Response: ${answerPrompt} Index: ${answer1}`)
console.log (`Answer2 (Ternary) 👉 Response: ${answerPrompt} Index: ${answer2}`)
console.log (`Answer3 (Regular Function) 👉 Response: ${answerPrompt} Index: ${answer3}`)