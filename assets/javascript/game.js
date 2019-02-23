var crystals = ["red", "blue", "yellow", "purple"];

var startNum = Math.floor(Math.random() * 120) + 19;;
var totalScore = 0;

var winCount = 0;
var lossCount = 0;

$(document).ready(function () {

    // Display stats, starting number, and total score.

    $("#startNum").text(startNum);
    $("#totalScore").text(totalScore);
    $("#winCount").text(winCount);
    $("#lossCount").text(lossCount);

    // Random number assignment for gems.

    for (var i = 0; i < crystals.length; i++) {
        crystals[i] = Math.floor(Math.random() * 11) + 1;
        var redValue = crystals[0];
        var blueValue = crystals[1];
        var yellowValue = crystals[2];
        var purpleValue = crystals[3];
    }

    // Click function assignment for gems.

    $("#red").on("click", function () {
        totalScore += redValue;
        $("#totalScore").text(totalScore);
    });

    $("#blue").on("click", function () {
        totalScore += blueValue;
        $("#totalScore").text(totalScore);
    });

    $("#yellow").on("click", function () {
        totalScore += yellowValue;
        $("#totalScore").text(totalScore);
    });

    $("#purple").on("click", function () {
        totalScore += purpleValue;
        $("#totalScore").text(totalScore);
    });

    // Winning Conditional

    if (totalScore === startNum) {
        winCount++;
        $("#winCount").text(winCount);
        resetGame();
    }

    // Losing Conditional

    else if (totalScore >= startNum) {
        lossCount++;
        $("#lossCount").text(lossCount);
        resetGame();
    }

    // Reset Function

    function resetGame() {
        // Starting number and total score reset.
        var startNum = Math.floor(Math.random() * 120) + 19;;
        var totalScore = 0;

        // Crystal value reassignment.
        for (var i = 0; i < crystals.length; i++) {
            crystals[i] = Math.floor(Math.random() * 11) + 1;
            var redValue = crystals[0];
            var blueValue = crystals[1];
            var yellowValue = crystals[2];
            var purpleValue = crystals[3];
        }
    }
    resetGame();















});