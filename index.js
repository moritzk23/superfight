/* var superheroes = require('superheroes');
 
var supervillains = require('supervillains');

 */

var mySuperhero = ""

var mySupervillain = ""

function createSuperhero() {

    //var mySuperhero = superheroes.random();

    var i = Math.floor(Math.random() * 17)

    var superheroes = ["3-D Man", "A-Bomb", "A.I.M.", "Aaron Stack", "Abbey", "Abomination", "Absorbing Man", "Abyss", "Acolytes",
        "Adam Destine", "Adam Warlock", "Adrienne", "Aegis", "Agent", "Agent Brand", "Agent Liberty", "Agent X"]

    mySuperhero = superheroes[i];

    return mySuperhero;
}

function createSupervillain() {

    var i = Math.floor(Math.random() * 14)

    var supervillains = ["Kleinstocks", "Knockout", "Korvac", "Kraven the Hunter", "Krona", "Kryptonite Man", "Kulan Gath", "Kurrgo",
        "Kyle Abbot", "Lady Clay", "Lady Death", "Lady Deathstrike", "Lady Dorma","Lady Mastermind"]

    mySupervillain = supervillains[i];

    return mySupervillain;
}

//Let the two fight out a winner

function superfightGo(mySuperhero, mySupervillain) {


    var randomNum = Math.floor(Math.random() * 2);

    $(".info").text("Welcome to the showdown fight between " + mySuperhero + " and " + mySupervillain + ". Who will win?")

    setTimeout(function () {
        $(".info").text("They are currently fighting...")
    }, 2000)

    setTimeout(function () {
        if (randomNum === 1) {
            $("body").addClass("superhero-won");
            $(".info").text(mySuperhero + " has won! The world is a better place now.")

        }

        else {
            $("body").addClass("superhero-lost");
            $(".info").text("Oh, no! " + createSupervillain.mySupervillain + " has won! Your superhero " + createSuperhero.mySuperhero + " got defeated.")

        }

    }, 6000)

}

// Adding the functions to the website


$(".superhero").click(function () {

    $("body").removeClass("superhero-won");
    $("body").removeClass("superhero-lost");

    $(".superhero-text").text(createSuperhero())
})

$(".supervillain").click(function () {
    $("body").removeClass("superhero-won");
    $("body").removeClass("superhero-lost");

    $(".supervillain-text").text(createSupervillain())

})

$(".fight").click(function () {

    $("body").removeClass("superhero-won");
    $("body").removeClass("superhero-lost");


    if (mySuperhero !="" && mySupervillain !="" ){
        superfightGo(mySuperhero, mySupervillain);
    }

    else{
        $(".info").text("Please create a Superhero and a Supervillain first, before letting them fight.")

    }
    
})


