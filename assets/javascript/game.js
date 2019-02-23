
$(document).ready(function () {
    var crystals = ["red", "blue", "yellow", "purple"];
    
    var startNum = Math.floor(Math.random() * 120) + 19;
    var totalScore = 0;

    console.log(startNum)
    console.log(totalScore)
    
    var winCount = 0;
    var lossCount = 0;
    
    // Display stats, starting number, and total score.

    $("#startNum").text(startNum);
    $("#totalScore").text(totalScore);
    $("#winCount").text(winCount);
    $("#lossCount").text(lossCount);

    // Random number assignment for gems.
    var redValue;
    var blueValue;
    var yellowValue;
    var purpleValue;

    for (var i = 0; i < crystals.length; i++) {
        crystals[i] = Math.floor(Math.random() * 11) + 1;
        redValue = crystals[0];
        blueValue = crystals[1];
        yellowValue = crystals[2];
        purpleValue = crystals[3];
        console.log(crystals);
    }

    // Click function assignment for gems.

    $("#red").on("click", function () {
        totalScore += redValue;

        if (totalScore === startNum) {
            winCount++;
            $("#winCount").text(winCount);
            
            startNum = Math.floor(Math.random() * 120) + 19;
            $("#startNum").text(startNum);
            totalScore = 0;
        }
    
        if (totalScore >= startNum) {
            lossCount++;
            console.log(lossCount)
            $("#lossCount").text(lossCount);
            
            startNum = Math.floor(Math.random() * 120) + 19;
            $("#startNum").text(startNum);
            totalScore = 0;
        }
        $("#totalScore").text(totalScore);
    });

    $("#blue").on("click", function () {
        totalScore += blueValue;

        if (totalScore === startNum) {
            winCount++;
            $("#winCount").text(winCount);

            startNum = Math.floor(Math.random() * 120) + 19;
            $("#startNum").text(startNum);
            totalScore = 0;
        }
    
        if (totalScore >= startNum) {
            lossCount++;
            console.log(lossCount)
            $("#lossCount").text(lossCount);
            
            startNum = Math.floor(Math.random() * 120) + 19;
            $("#startNum").text(startNum);
            totalScore = 0;
        }
        $("#totalScore").text(totalScore);
    });

    $("#yellow").on("click", function () {
        totalScore += yellowValue;
        
        if (totalScore === startNum) {
            winCount++;
            $("#winCount").text(winCount);

            startNum = Math.floor(Math.random() * 120) + 19;
            $("#startNum").text(startNum);
            totalScore = 0;
        }
    
        if (totalScore >= startNum) {
            lossCount++;
            console.log(lossCount)
            $("#lossCount").text(lossCount);

            startNum = Math.floor(Math.random() * 120) + 19;
            $("#startNum").text(startNum);
            totalScore = 0;
        }
        $("#totalScore").text(totalScore);
    });

    $("#purple").on("click", function () {
        totalScore += purpleValue;
        
        if (totalScore === startNum) {
            winCount++;
            $("#winCount").text(winCount);
            
            startNum = Math.floor(Math.random() * 120) + 19;
            $("#startNum").text(startNum);
            totalScore = 0;
        }
    
        if (totalScore >= startNum) {
            lossCount++;
            console.log(lossCount)
            $("#lossCount").text(lossCount);
            
            startNum = Math.floor(Math.random() * 120) + 19;
            $("#startNum").text(startNum);
            totalScore = 0;
        }
        $("#totalScore").text(totalScore);
    });
});