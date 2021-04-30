let word = new String();
let nrTries = 6, nrGood = 0;

function byDefault() {
    let wordSize = Math.floor(Math.random() * 5) + 4;
    for (let i = 0; i < wordSize; i++) {
        word += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        $('#hiddenword').append('<span class="border-bottom border-dark border-3 mx-2 px-3" id="letter' + i + '"></span>');
    }
    // alert(word);
    for (let i = 65; i <= 77; i++) {
        $('#lettersButton1').append('<button type="button" class="btn btn-info spaceButtons" id="button'
        + i + '" onclick="checkLetter(' + i + ')">' + String.fromCharCode(i) + '</button>');
    }
    for (let i = 78; i <= 90; i++) {
        $('#lettersButton2').append('<button type="button" class="btn btn-info spaceButtons" id="button'
        + i + '" onclick="checkLetter(' + i + ')">' + String.fromCharCode(i) + '</button>');
    }
}

function checkLetter(whichLetter) {
    $('#button' + whichLetter).prop('disabled', true);
    let itContains = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === String.fromCharCode(whichLetter)) {
            itContains = true;
            nrGood++;
            $('#letter' + i).removeClass("border-bottom border-dark border-3");
            $('#letter' + i).text(word[i]);
        }
    }
    if (!itContains) {
        nrTries--;
        $('#nrTries').text("You have " + nrTries + " more tries");
    }

    if (nrGood === word.length)
        $('#wonGameModal').modal();
    if (!nrTries)
        gameOver();
}

function gameOver() {
    for (let i = 0; i < word.length; i++) {
        $('#letter' + i).removeClass("border-bottom border-dark border-3");
        $('#letter' + i).text(word[i]);
    }
    $('#gameOverModal').modal();
}
