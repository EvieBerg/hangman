var dutch = ["gevarendriehoek", "schoenpoetsborsteltje", "schatje", "afstandsbediening", "achtentachtig"];
var latinNames = ["balaenopteraacutorostrata", "bisonbison", "callithrixpygmaea", "Dendrobranchiata"];
var movies = ["mortalkombat", "deadpool", "gladiator", "mamamia", "fastandfurious"];
var random = ["bcdfghjklmnpqrstvwxz", "a", "brood", "badabingbadaboom"];
var allLetters = ["a","b", "c", "d", "e" ,"f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var lives = 6;
var picked = [];
var graveyard = [];
var word = "";
var newWord = " _";
var pic = ["", "coop 2.png", "coop 3.png", "coop 4.png", "coop 5.png", "coop 6.png", "coop 7.png"];
function makeLetters(){
    var output ="";
    for(var i =0; i<allLetters.length; i++){
        if(picked.indexOf(allLetters[i] ) > -1){
            output+= "<button value='" + allLetters[i] + "' id='" + allLetters[i]
                + " onclick='guessLetter(this.id)' disabled='true'>" + allLetters[i] + "</button>";
        } else {
            output+= "<button value='" + allLetters[i] + "' id='" + allLetters[i]
                + "' onclick='guessLetter(this.id)'>" + allLetters[i] + "</button>";
        }
    }
    document.getElementById("letters").innerHTML = output;
}
function reset(){
    document.getElementById("job").innerHTML = "";
    graveyard = [];
    document.getElementById("graveyard").innerHTML = graveyard;
    lives = 6;
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("end").innerHTML = "";
    document.getElementById("coop").innerHTML = "<img src=coop1.png/>";
    for (var i = 0; i < allLetters.length; i++) {
        document.getElementById(allLetters[i]).disabled = false;
    }
}
function giveWord(d) {
    reset();
    var d = document.getElementById("catagorie").value;
    if(d == "Dutch"){
        word = dutch[Math.floor(Math.random() * dutch.length)];
    }
    if(d == "Latin"){
        word = latinNames[Math.floor(Math.random() * latinNames.length)];
    }
    if(d == "Movies"){
        word = movies[Math.floor(Math.random() * movies.length)];
    }
    if(d == "random"){
        word = random[Math.floor(Math.random() * random.length)];
    }
    underscore(word);
    console.log(word);
}
function underscore(word){
    var unders = "";
    for(var i = 0; i < word.length; i++){
        unders+= " _";
    }
    document.getElementById("blank").innerHTML = unders;
}
function printWord(x){
    newWord = "";
    for(var i = 0; i < word.length; i++){
        if(picked.indexOf(word[i]) > -1){
            newWord += word[i] + " ";
        }else{
            newWord+= " _";
        }
    }
}
function guessLetter(letter){
    if (word == ""){
        alert("Must press play");
    }
    var xr = letter;
    document.getElementById(xr).disabled = true;
    if(word.indexOf(letter) === -1){
        graveyard = graveyard + letter;
        document.getElementById("job").innerHTML = "Incorrect guess :(";
        document.getElementById("graveyard").innerHTML = graveyard;
        lives --;
        document.getElementById("lives").innerHTML = lives;
        addPic(lives);
    }
    if(word.indexOf(letter) > -1){
        picked = picked + letter;
        printWord(letter);
        document.getElementById("blank").innerHTML = newWord;
    }
    if(newWord.indexOf(" _") == -1) {
        document.getElementById("end").innerHTML = "you win";
        for (var i = 0; i < allLetters.length; i++) {
            document.getElementById(allLetters[i]).disabled = true;
        }
    }
    if(lives == 0){
        document.getElementById("end").innerHTML = "you are a loser!!";
        for (var i = 0; i < allLetters.length; i++) {
            document.getElementById(allLetters[i]).disabled = true;
        }
    }
}
function addPic(lives){
    document.getElementById("coop").innerHTML = "<img src='" + pic[6 - lives] + "'/>";
}