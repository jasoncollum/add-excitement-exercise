console.log('main.js');

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

const addExcitement = (theWordArray, char, num) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "";
    // let character = char;
    // for (let i = 0; i < num; i++) {
    //     character += char
    // }
     
    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            buildMeUp += `${theWordArray[i]}${char.repeat(num)} `;
        } else {
            buildMeUp += `${theWordArray[i]} `;
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
}

// let mySentence = 'This is how you throw a sentence into an array';

// const sentenceArray = mySentence.split(" ");
// Invoke the function and pass in the array
addExcitement(sentence, '!', 2);

// ------

