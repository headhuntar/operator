/*
getProblem(int difficulty, boolean hard).
@param difficulty integer from 1 to 5.
@param hard true for 1-13, false for 1-9
@return array containing the card numbers
*/
function getProblem(difficulty, hard) {
    var card1 = null;
    var card2 = null;
    var card3 = null;
    var card4 = null;
    var hue;
    $.ajax({
        async: false,
        type: "GET",
        url: "getProblem.php",
        dataType: "json",
        data: {difficulty: difficulty, hard: hard},
        success: function(data) {
            card1 = data.card1;
            card2 = data.card2;
            card3 = data.card3;
            card4 = data.card4;
        }
    });
    return [card1, card2, card3, card4];
}

function displayProblem() {
    var testArray = getProblem(5, true);
    alert(testArray);
}