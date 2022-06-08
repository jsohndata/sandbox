/* Various methods of getting an array index with a value
---------------------------------------------------------------------------
Reason: A way to convert a response to a numeric value

Question: Why not ask a person to respond in 1 or 0? 
Response: True one can do that. It is a friendlier experience to ask 
a person "Yes" or "No" rather 1 or 0. Additionally, intigers can be calculated
using with other math operators, where strings is a string.
*/

const prompt = require("prompt-sync")()

const switchLabel = [
    "No",       //0
    "Yes",      //1
    "Maybe",    //2
]

console.log(`Do you want ${switchLabel[0]} or ${switchLabel[1]}`)
const answerPrompt = prompt('Your Answer: ')



// If Else 
/* ---------------------------------------------------------------------------
====> Total Line of Code: 7

Note: Variable needs to be declared first outside of the block 
*/

let answer0
if (answerPrompt == "No") {
    answer0 = switchLabel.indexOf(switchLabel[0])
} else if (answerPrompt == "Yes") {
    answer0 = switchLabel.indexOf(switchLabel[1])
} else if (answerPrompt == "Maybe") {
    answer0 = switchLabel.indexOf(switchLabel[2])
}

// Switch
/* ---------------------------------------------------------------------------
====> Total Line of Code: 14

Note: Variable needs to be declared first outside of the block 

Note: Line 64, Why use...
    case switchLabel['0']:
        versus
    case "No":

    What if later someone decides to change the value to "nah" or "DoubleU T Effff No wai".
    Then the developer will have to change the value of the array and in the switch as well,
    creating double work and potential for error as multiple edits are made. 
    
    By using switchLabel['0'] the developer get to only change it in the array and the 
    script will understand the change.
    
    This can be applied to If/Else as well
    if (answerPrompt == switchLabel['0'])
*/

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
/* ---------------------------------------------------------------------------
====> Total Line of Code: 1 */

const answer2 = answerPrompt === "No" ? switchLabel.indexOf(switchLabel[0]) : switchLabel.indexOf(switchLabel[1])


// Regular Function
/* ---------------------------------------------------------------------------
====> Total Line of Code: 5 */

function getArrayIndex(propValue) {
    return switchLabel.indexOf(propValue)
}

const answer3 = getArrayIndex(answerPrompt)


// Render Result
/* --------------------------------------------------------------------------- */
console.log (`Answer0 (If Else) 👉 Response: ${answerPrompt} Index: ${answer0}`)
console.log (`Answer1 (Switch) 👉 Response: ${answerPrompt} Index: ${answer1}`)
console.log (`Answer2 (Ternary) 👉 Response: ${answerPrompt} Index: ${answer2}`)
console.log (`Answer3 (Regular Function) 👉 Response: ${answerPrompt} Index: ${answer3}`)



/* My Fav is...
 FUNCTION.
 ---------------------------------------------------------------------------
• Shorter lines of code. Though not as as short as Ternary, yet see note below.
• Scalability: Yes, from 1 item to infininty.


IF ELSE && SWITCH
---------------------------------------------------------------------------
• Mutable data using LET not CONST (for future discussion, don't be concerened with this now 🤯)
• Scalability: if there are more value (or edits) in the array 
    then the statement needs to be edited to reflect the change.
    Thus, opening potentiality of error. Additionally, if there are 20 responses in total
    this can easily get out of hand (and mind 🤯)


TERNARY
---------------------------------------------------------------------------
• One can go wild like... 
const Variable = Condition ? Statment1 : Statment 2: Statement 3 etc 

!!!🔥 Be that as it may 🔥!!! This is not widely shared opinon to chain using Ternary. 
    As the name implies 3, best to keep it just 2 statements. More than 3 better to 
    use if/else, switch or function
*/