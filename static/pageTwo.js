/**
 * Functionality of pageTwo.html
 */

const listEnglishLet = ["A","B","C","D","E","F","G","H","I","J","K","L",
                        "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","@",".", " "]

const listMorse = [".-", "-...","-.-.", "-..",".","..-.","--.","....","..",".---","-.-",".-..",
                    "--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".--.-.",".-.-.-", "/"]

const referenceTable = document.getElementById('referenceTable')
const userInput = document.getElementById('userInputMorse')
const translatedText = document.getElementById('translateText')
let str = ""
let translateString = ""
let index = 0
let stringArray = []


function onLoad(){
   
}

userInput.addEventListener('change', () =>{
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



