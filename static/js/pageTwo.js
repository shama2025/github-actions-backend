/**
 * Functionality of pageTwo.html
 */

const listEnglishLet = ["A","B","C","D","E","F","G","H","I","J","K","L",
                        "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","@",".", " "]

const listMorse = [".-", "-...","-.-.", "-..",".","..-.","--.","....","..",".---","-.-",".-..",
                    "--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".--.-.",".-.-.-", "/"]

const tableBody = document.getElementById('tableBody')
const userInput = document.getElementById('userInputMorse')
const translatedText = document.getElementById('translateText')
const clearBtn = document.getElementById('clearTextInput')
let str = ""
let translateString = ""
let index = 0
let count = 0

userInput.addEventListener('change', () =>{ //change this to dynamically change the html until the user enters a /
    str = userInput?.value
    translateText(str.split("/"))
})

function translateText(string){

    string.forEach(element => {
             index = listMorse.indexOf(element)
             if(listEnglishLet[index] == undefined){
                translateString = "/"
             }
             translateString = translateString + listEnglishLet[index]
            console.log(translateString)
        translatedText.innerHTML = translateString
    });
}
 

// Loop through the arrays and create table rows
for (let i = 0; i < listEnglishLet.length; i++) {
  const englishLetter = listEnglishLet[i];
  const morseCode = listMorse[i];

  // Create a new row
  const row = document.createElement('tr');

  // Create a cell for the English letter
  const englishCell = document.createElement('td');
  englishCell.textContent = englishLetter;

  // Create a cell for the Morse code
  const morseCell = document.createElement('td');
  morseCell.textContent = morseCode;

  // Append cells to the row
  row.appendChild(englishCell);
  row.appendChild(morseCell);

  // Append the row to the table body
  tableBody.appendChild(row);
}

clearBtn.addEventListener('click', () =>{
    translatedText.innerHTML = ""
    userInput.value =""
})

