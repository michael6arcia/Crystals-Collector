var crystals = ["red", "blue", "yellow", "purple"];

var startNum = "";
var totalScore = 0;

var winCount = 0;
var lossCount = 0;

$(document).ready(function () {

    // Display stats, starting number, and total score.

    var startNum = Math.floor(Math.random() * 120) + 19;
    $("#startNum").text(startNum);

    $("#totalScore").text(totalScore);

    $("#winCount").text(winCount);

    $("#lossCount").text(lossCount);

    // Click functions for gems.

    for (var i = 0; i < crystals.length; i++) {
        i = Math.floor(Math.random() * 12) + 1;
    }
















});