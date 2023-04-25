//exercise 1:


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, arr){
    for (let i of arr) {
        if (string.includes(i)) {
            console.log(i)
        }else {
            console.log('No Matches')
        }
    }
}

console.log(findWords(dog_string, dog_names));


// exercise 2:

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr;
}

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

console.log(replaceEvens(givenArr));





//Codewars problem 1: 'Is it a palindrome?'

//Write a function that checks if a given string (case insensitive) is a palindrome. 
//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, 
//such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".


function palindrome(str){
    let new_str = ''
    for (let i = str.length -1; i >= 0; i--){
        new_str += str[i]
    }
    if (str == new_str){
        return true
    } else {
        return false
    }
    }

    console.log(palindrome('racecar'))




    //Codewars problem 2: 'Remove First and Last Character'

    //It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
    //You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

    function deleteFirstLast(str) {
        new_str = str.slice(1, str.length -1)
        return new_str
    }

    console.log(deleteFirstLast('abcdefg'))