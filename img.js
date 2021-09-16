// set initial variables

let MainChoise = "NintendoLogo"
let imgone = "Zelda.jpeg"
let imgtwo = "DragonQuest.jpeg"
let imgthree = "SuperSmash.jpeg"
let imgfour = "Metroid.jpeg"
let lastimg = ""
let picked = ""


// if image one is pressed call function "one()"
//picked is changed from the standard image too imgone("Zelda.jpeg")
//And function setimg() is called
function one(){
picked = imgone
setimg()
}

function two(){
picked = imgtwo
setimg()
}

function three(){
picked = imgthree
setimg()
}

function four(){
picked = imgfour
setimg()
}


//Waits for picked to be set and changes the img src of imgMain too picked
function setimg(){
    document.getElementById("imgMain").src = picked
}

    
    