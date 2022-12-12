function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    return sum / 3;
}

function createSentence(num, noun) {
    return "On average, a Berkeley student has " + num + " " + noun + "s.";
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function toggleSongs(){
    document.getElementById("songs-second-half").classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggle-button").onclick = toggleSongs;
})