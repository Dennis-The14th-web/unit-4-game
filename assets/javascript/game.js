// Crystal Variables set into 4 different sets cryst1,2,3,4.
   var crystal = {
    cryst1:
    {
          name: "cryst1",
           value: 0
       },

       cryst2:
       {
           name: "cryst2",
          value: 0
       },

       cryst3:
       {
          name: "cryst3",
           value: 0
      },

      cryst4:
       {
         name: "cryst4",
          value: 0
       }
 };

//Variables to hold the number of wins, losses, targetscore, usercount, test.  
var targetScore = ' ';
var display = ' ';
var wins = 0;
var losses = 0;
var userCount = 0;
var test = 10;

//Randomly choose a choice from the options targetscore, and also displays the result. This is the computer's guess.

targetScore = Math.floor(Math.random() * 101) +19;
// console.log(targetScore); 

//Query that hold references to the place in the HTML where we want to display things.

$("#number-to-guess").text(' ' + targetScore);
$("#display-text").text(' ' + display);
$("#wins-text").text('Wins: ' + wins);
$("#losses-text").text('Losses: ' + losses);
$("#usercount").text(' ' + userCount);

//Randomly choose a choice from the options variable crystal. This is also the computer's guess. 
   
    var cryst1 = Math.floor(Math.random() * (12 - 1) + 1);
    var cryst2 = Math.floor(Math.random() * (12 - 1) + 1);
    var cryst3 = Math.floor(Math.random() * (12 - 1) + 1);
    var cryst4 = Math.floor(Math.random() * (12 - 1) + 1);
    // console.log(cryst1, cryst2, cryst3, cryst4);

//Assigns the radomly chose numbers by the computer to each crystal, of different classes.

$(".crystal1").attr("value", cryst1);
var test = $(".crystal1").attr("value");
// console.log("crystal1 " + test); 

$(".crystal2").attr("value", cryst2);
var test = $(".crystal2").attr("value");
// console.log("crystal2 " + test); 

$(".crystal3").attr("value", cryst3);
var test = $(".crystal3").attr("value");
// console.log("crystal3 " + test); 

$(".crystal4").attr("value", cryst4);
var test = $(".crystal4").attr("value");
// console.log("crystal4 " + test); 

//This logic determines the outcome of the game (wins/losses/usercount/reset), increasing and reducing sores and usercount appropriately.

$(".crystal1").on("click", function()
{
    var test1 = $(this).attr("value");

    userCount = parseInt(userCount) + parseInt(test1);
    // console.log("crystal* " + test1);
    // console.log("usercount*** " + userCount);
    $("#usercount").html(userCount);
     
if (userCount === targetScore) {
    wins++;
     play();
    // alert ("You Win!!")
    $("#wins-text").text('Wins: ' + wins);
     reset();
 }else if (userCount >= targetScore) {
     losses++;
     play();
    // alert ("You Lost!!")
     $("#losses-text").text('Losses: ' + losses);
     reset();
 }

});

//This logic determines the outcome of the game (wins/losses/usercount/reset), increasing and reducing sores and usercount appropriately.

$(".crystal2").on("click", function()
{
    var test1 = $(this).attr("value");

    userCount = parseInt(userCount) + parseInt(test1);
    //  console.log("crystal* " + test1);
    //  console.log("usercount*** " + userCount);
    $("#usercount").html(userCount);

    if (userCount === targetScore) {
        wins++;
        play();
        $("#wins-text").text('Wins: ' + wins);
        reset();
     }else if (userCount >= targetScore) {
         losses++;
         play();
         $("#losses-text").text('Losses: ' + losses);
         reset();
     }
});

//This logic determines the outcome of the game (wins/losses/usercount/reset), increasing and reducing sores and usercount appropriately.

$(".crystal3").on("click", function()
{
    var test1 = $(this).attr("value");

    userCount = parseInt(userCount) + parseInt(test1);
    // console.log("crystal* " + test1);
    // console.log("usercount*** " + userCount);
    $("#usercount").html(userCount);

    if (userCount === targetScore) {
        wins++;
        play(); 
        // alert ("You Win!!")
        $("#wins-text").text('Wins: ' + wins);
        reset();
     }else if (userCount >= targetScore) {
         losses++;
        play();
        // alert ("You Lost!!")
         $("#losses-text").text('Losses: ' + losses);
         reset();  
     }
});

//This logic determines the outcome of the game (wins/losses/usercount/reset), increasing and reducing sores and usercount appropriately.

$(".crystal4").on("click", function()
{
    var test1 = $(this).attr("value");

    userCount = parseInt(userCount) + parseInt(test1);
    // console.log("crystal* " + test1);
    // console.log("usercount*** " + userCount);
    $("#usercount").html(userCount);

    if (userCount === targetScore) {
        wins++;
        play();
        $("#wins-text").text('Wins: ' + wins);
        reset();
     }else if (userCount >= targetScore) {
         losses++;
         play();
         $("#losses-text").text('Losses: ' + losses);
         reset();
     }
});

//This function will help reset the game when there is a win or loss.
// reset

function reset()
{
    targetScore = Math.floor(Math.random() * 101) +19;
    targetScore = Math.floor(Math.random() * 100) +20;
    $("#number-to-guess").html(targetScore);

    //  console.log(targetScore);

var cryst1 = Math.floor(Math.random() * (12 - 1) + 1);
var cryst2 = Math.floor(Math.random() * (12 - 1) + 1);
var cryst3 = Math.floor(Math.random() * (12 - 1) + 1);
var cryst4 = Math.floor(Math.random() * (12 - 1) + 1);
userCount = 0;

$("#usercount").html(userCount);

$(".crystal1").attr("value", cryst1);
var test = $(".crystal1").attr("value");
//  console.log("crystal1 " + test); 

$(".crystal2").attr("value", cryst2);
var test = $(".crystal2").attr("value");
//  console.log("crystal2 " + test); 

$(".crystal3").attr("value", cryst3);
var test = $(".crystal3").attr("value");
//  console.log("crystal3 " + test); 

$(".crystal4").attr("value", cryst4);
var test = $(".crystal4").attr("value");
//  console.log("crystal4 " + test); 
};

// This function displays the 'Winner :) or loser :(' notification.
function play(event)
{
    if (userCount === targetScore) {
        $("#display-text").html("You Won!! &#128526;"  + display);  
     }else if (userCount >= targetScore) {
        $("#display-text").html("You Lost!! &#128545;" + display);
     }
};






