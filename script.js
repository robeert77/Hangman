let word = new String();
let nrTries = 6, nrGood = 0;

function byDefault() {
    let wordSize = Math.floor(Math.random() * 5) + 4;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < wordSize; i++) {
        word += alphabet[Math.floor(Math.random() * alphabet.length)];
        $('#hiddenword').append('<span class="border-bottom border-dark border-3 mx-2 px-3" id="letter' + i + '"></span>');
    }
    // alert(word);
    for (let i = 0; i <= 12; i++) {
        $('#lettersButton1').append('<button type="button" class="btn btn-info spaceButtons" id="button'
        + alphabet[i] + '" onclick="checkLetter(\'' + alphabet[i] + '\')">' + alphabet[i] + '</button>');
    }
    for (let i = 13; i <= 25; i++) {
        $('#lettersButton2').append('<button type="button" class="btn btn-info spaceButtons" id="button'
        + alphabet[i] + '" onclick="checkLetter(\'' + alphabet[i] + '\')">' + alphabet[i] + '</button>');
    }
}

function checkLetter(currentChar) {
    $('#button' + currentChar).prop('disabled', true);
    let itContains = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === currentChar) {
            itContains = true;
            nrGood++;
            $('#letter' + i).removeClass("border-bottom border-dark border-3");
            $('#letter' + i).text(currentChar);
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
