/* ==========================================================================
** Anexinet Test
** 25/01/2021
** Alan Medina Silva
** Using Better Comments extension for hadling different kinds of comments
** ========================================================================== */



// ?--------------------------------------
// ? Excercie 1
// ? Write a function that adds two numbers without using any arithmetic operators.
// ? Using recursivity and bitwise operators
// ?--------------------------------------
const noArithmethicSum = (num1, num2) => {
    // exit case
    if (num2 == 0)
        return num1;
    else {
        // start recursivity
        // use bit operations
        // eg 2 + 2
        // (2 ^ 2) = (10 10) =0 , (2 & 2) = (10 & 10) = 2, << move one the left, the extra value of the operation
        return noArithmethicSum(num1 ^ num2, (num1 & num2) << 1)
    }
        

}

// ?--------------------------------------
// ? Excercise 2
// ? Given 2 strings of unknown characters (but it cannot be repeated) create a function that returns an array of 
// ? the characters that are repeated in both strings in the most efficient way.
// ?--------------------------------------
const findRepeatedStringValues = (str1, str2) => {

    if (str1 === "" || str2 === "") {
        alert('The Strings cant be empty');
        return;
    }

    if (str1.length === str2.length) {
        alert('The Strings cant have the same length');
        return;
    }

    // Create Dictionarys (Objects) of each string to compare keys
    const repeatedCharStr1 = createDic(str1.toLowerCase());
    const repeatedCharStr2 = createDic(str2.toLowerCase());
    const repeatsArray = [];


    // compare if one object2 has any key of object 1
    for (const key in repeatedCharStr1) {
        if (repeatedCharStr2.hasOwnProperty(key))
            repeatsArray.push(key)

    }
    return repeatsArray
}

// ?--------------------------------------
// ? helper function to create chart dictionaries
// ? Keep track of repeated letter for each
// ? string, could be useful
// ?--------------------------------------
const createDic = (strToAnalize) => {
    if (strToAnalize == "")
        return {}

    let objectData = {};
    for (let char of strToAnalize) {
        if (!objectData[char])
            objectData[char] = 1;
        else
            objectData[char] += 1;
    }

    return objectData;

}





// ?--------------------------------------
// ? Excercise 4
// ? Write a function such that if an element in an MxN matrix is 0 , 
// ?its entire row and column are set to 0 and then printed out.
// ?--------------------------------------
const checkMatrix = (matrixArray = [[1, 2, 3], [4, 0, 6], [7, 8, 9]]) => {

    // Get row and column where it founds the first 0 and use it as the main column
    const row = matrixArray.findIndex(row => row.includes(0))
    const col = matrixArray[row].indexOf(0);

    // iterate new array and modify its data
    const modifiedMatrix = matrixArray.map((item) => {
        let newRow = null;

        // Get the Row where if first finds a 0 
        // and create a new subArray filled with the zeros as the new row [[0,0,0]]
        if (item.indexOf(0) >= 0)
            newRow = new Array(item.length).fill(0);
        else {
            // Replace the current value of the column with a 0, without mutating the originall values
            newRow = [...item];
            newRow[col] = 0
        }
        return newRow


    });

    return modifiedMatrix;

}



// ?--------------------------------------
// ? Excercise 5
// ? Write a function that convert the given number into a Roman Numeral - 
// ? The function needs to receive a Number and Return a String (The Number can be
// ? between 1 and 3999)
// ? Numbers Definition https://www.rapidtables.com/math/symbols/roman_numerals.html
// ?--------------------------------------
const getRomanNumeral = (naturalNumber) => {
    if (naturalNumber.length === 0) {
        alert('Type a number');
        return;
    }
    // Validate Input
    if (naturalNumber <= 0 || naturalNumber >= 4000) {
        alert('The Number must be between 1 and 3999');
        return;
    }
    
    let romanNumber = "";
    // Dictionary of numbers variaton
    const numberDictionary = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    };

    // Match the number with the value of the dictionary and keep track of the diference
    for (let key in numberDictionary) {
        while (naturalNumber >= numberDictionary[key]) {
            romanNumber += key;
            naturalNumber -= numberDictionary[key];
        }
    }

    return romanNumber;

}



// ?--------------------------------------
// ? Excercise 6
// ? Write a function to print all permutations of a string. Max string length can be 50 characters.
// ? Use recursivity
// ?--------------------------------------
const permutateString = (permutationsArray, baseString, permResult = '') => {

    // Exit case, add new word to the array that updates
    if (baseString.length === 0) 
        permutationsArray.push(permResult);


        for (let strIterator = 0; strIterator < baseString.length; strIterator++) {
            let rest = baseString.substring(0, strIterator) + baseString.substring(strIterator + 1);
            permutateString(permutationsArray, rest, permResult + baseString[strIterator]);
        }

    
}


// ?--------------------------------------
// ? Excercise 7
// ? Write a function that receives a sentence, and return the longest word, 
// ? if two or more words have the same lenght, they are returned as an array, but can't return
// ? duplicated words.
// ?--------------------------------------
const findLongestWord = (sentence) => {
    if (sentence.length === 0) {
        console.error('Type a sentence');
        return;
    }
    // create array of words
    const wordsArray = sentence.split(' ');
    // initialize longest world for the comparisions
    let longestWordArray = wordsArray.length > 0 ? wordsArray[0] : "";

    for (let word of wordsArray) {
        if (word != "") {
            if (word.length >= longestWordArray[0].length) {
                if (word.length > longestWordArray[0].length) {
                    longestWordArray = [word];
                } else {
                    // add word with the same length of the longest word
                    if (!longestWordArray.includes(word))
                        longestWordArray.push(word)
                }
            }
        }
    }

    // Return the array of words or just the longest word
    if (longestWordArray.length > 1)
        return longestWordArray;
    else
        return longestWordArray[0]




}



// ?--------------------------------------
// ? Render results on the DOM
// ?--------------------------------------
const renderResultText = (elementID, title, text, exc, emptyResult = '') => {

    let responseContainer = document.createElement('div');
    let resultTitle = document.createElement('p');
    resultTitle.appendChild(document.createTextNode(title));
    let resultText = null;

    // print empty results
    if (text === '' || text.length === 0) {
        resultText = document.createElement('span');
        resultText.appendChild(document.createTextNode(emptyResult !== '' ? emptyResult : 'The result is empty'));
    }
    else {
        // Print results and select what kind of data to print, between an array or text
        resultText = document.createElement('pre');
        if (exc === '1' || exc === '5')
            resultText.appendChild(document.createTextNode(text));
        if (exc === '3' || exc === '6')
            resultText.appendChild(document.createTextNode(printArray(text)));
        if (exc === '4')
            resultText.appendChild(document.createTextNode(printMatrix(text)));
        if (exc === '7')
            resultText.appendChild(document.createTextNode(typeof text === 'string' ? text : printArray(text)));


    }

    // append results
    responseContainer.appendChild(resultTitle);
    responseContainer.appendChild(resultText);
    document.getElementById(elementID).appendChild(responseContainer);


}

// ?--------------------------------------
// ? Helper function to print an array
// ? Format "[1,2,3]""
// ?--------------------------------------
const printArray = (arrayData) => {
    let arrayString = '[';
    for (let arrayIterator = 0; arrayIterator < arrayData.length; arrayIterator++) {
        arrayString += arrayIterator < (arrayData.length - 1) ? arrayData[arrayIterator] + ',' : arrayData[arrayIterator];
    }
    arrayString += ']';
    return arrayString;
}

// ?--------------------------------------
// ? Helper function to print a matrix
// ? Format "[[1,2,3]]"
// ? with juumpline
// ?--------------------------------------
const printMatrix = (matrixData) => {
    let matrixString = '[\n';
    for (let mat of matrixData) {
        matrixString += printArray(mat) + '\n';
    }
    matrixString += ']';
    return matrixString;
}


// ?--------------------------------------
// ? Excute functions
// ? Declare click events
// ?--------------------------------------
window.addEventListener('load', (event) => {

    // Excercise 1
    document.getElementById('ex_1_submit').addEventListener('click', (event) => {
        let num1 = document.getElementById('ex_1_num_1').value;
        let num2 = document.getElementById('ex_1_num_2').value;
        let res = noArithmethicSum(num1, num2);
        renderResultText('ex_1_result', 'Sum of the numbers', res, '1');
    });

    // Excercise 2
    document.getElementById('ex_2_submit').addEventListener('click', (event) => {
        let str1 = document.getElementById('ex_2_string_1').value;
        let str2 = document.getElementById('ex_2_string_2').value;
        let res = findRepeatedStringValues(str1, str2);
        renderResultText('ex_2_result', 'Repeated Characters of both Strings', res, '3', 'There are no repeated Characters');
    });

    // Excercise 4
    document.getElementById('ex_4_submit').addEventListener('click', (event) => {
        let arr1 = document.getElementById('ex_4_array_1').value.split(',').map(Number);
        let arr2 = document.getElementById('ex_4_array_2').value.split(',').map(Number);
        let arr3 = document.getElementById('ex_4_array_3').value.split(',').map(Number);
        let res = checkMatrix([arr1, arr2, arr3])
        renderResultText('ex_4_result', 'New Matrix', res, '4');
    });

    // Excercise 5
    document.getElementById('ex_5_submit').addEventListener('click', (event) => {
        let number = document.getElementById('ex_5_number').value;
        let res = getRomanNumeral(number);
        renderResultText('ex_5_result', 'Roman Number', res, '5');
    });

    // Excercise 6
    document.getElementById('ex_6_submit').addEventListener('click', (event) => {
        let word = document.getElementById('ex_6_word').value;
        if (word.length > 50) {
            console.error('The max size is 50');
            return;
        }
        const permutationsArray = [];
        permutateString(permutationsArray, word);
        renderResultText('ex_6_result', 'All Permutations', permutationsArray, '6');
    });

    // Excercise 
    document.getElementById('ex_7_submit').addEventListener('click', (event) => {
        let sentence = document.getElementById('ex_7_sentence').value;
        let res = findLongestWord(sentence);
        renderResultText('ex_7_result', 'Longest Word(s)', res, '7');
    });
});





