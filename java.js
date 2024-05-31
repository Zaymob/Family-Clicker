let points = 0;
let loisCount = 0;
let stewieCount = 0;
let peterCount = 0;

const pointsDisplay = document.getElementById("points");
const clickBtn = document.getElementById("clickBtn");
const buyLoisBtn = document.getElementById("buyLois");
const buyStewieBtn = document.getElementById("buyStewie");
const buyPeterBtn = document.getElementById("buyPeter");

clickBtn.addEventListener("click", () => {
    points += 1 + stewieCount;
    updatePointsDisplay();
});

buyLoisBtn.addEventListener("click", () => {
    if (points >= 200) {
        points -= 200;
        loisCount++;
        setInterval(() => {
            points += 10 * loisCount;
            updatePointsDisplay();
        }, 1000);
        updatePointsDisplay();
    } else {
        alert("Not enough points!");
    }
});

buyStewieBtn.addEventListener("click", () => {
    if (points >= 100) {
        points -= 100;
        stewieCount++;
        updatePointsDisplay();
    } else {
        alert("Not enough points!");
    }
});

buyPeterBtn.addEventListener("click", () => {
    if (points >= 50) {
        points -= 50;
        peterCount++;
        setInterval(() => {
            points += peterCount;
            updatePointsDisplay();
        }, 1000);
        updatePointsDisplay();
    } else {
        alert("Not enough points!");
    }
});

function updatePointsDisplay() {
    pointsDisplay.textContent = points;
}
