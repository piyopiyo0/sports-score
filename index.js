let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let homeScoreBtnFive = document.getElementById("home-score-btn-5");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");
let guestScoreBtnFive = document.getElementById("guest-score-btn-5");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function increaseHomeScoreByOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreByThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreByFive() {
    homeScore += 5;
    homeScoreEl.textContent = homeScore;
}

function increaseGuestScoreByOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreByThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreByFive() {
    guestScore += 5;
    guestScoreEl.textContent = guestScore;
}