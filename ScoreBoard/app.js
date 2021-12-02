const p1 = document.querySelector('#p1Btn');
const p2 = document.querySelector('#p2Btn');
const p1Scr = document.querySelector('#p1Score');
const p2Scr =document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
const dropdown = document.querySelector('#playTo');

let winningScore = 3;
let p1Score = 0;
let p2Score = 0;

let gameOver = false;

p1.addEventListener('click', function () {
    if(!gameOver) {
        if(p1Score !== winningScore) {
            p1Score += 1;
            p1Scr.textContent = p1Score;
            if (p1Score === winningScore) {
                gameOver = true;
                // p1Scr.style.color = "green";
                // p2Scr.style.color = "red";
                p1Scr.classList.add('has-text-success');
                p2Scr.classList.add('has-text-danger');
                disable()
            }
        } 
    }
});

p2.addEventListener('click', function () {
    if(!gameOver) {
        if(p2Score !== winningScore) {
            p2Score += 1;
            p2Scr.textContent = p2Score;
            if (p2Score === winningScore) {
                gameOver = true;
                // p1Scr.style.color = "red";
                // p2Scr.style.color = "green";
                p1Scr.classList.add('has-text-danger');
                p2Scr.classList.add('has-text-success');
                disable();
            } 
        } 
    }
});

dropdown.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetScore();
});

reset.addEventListener('click', resetScore)

function disable () {
    p1.disabled = true;
    p2.disabled = true;
}

function enable () {
    p1.disabled = false;
    p2.disabled = false;
}
function resetScore () {
    p1Score = p2Score = 0;
    p1Scr.textContent = p1Score;
    p2Scr.textContent = p2Score;
    gameOver = false;
    // p1Scr.style.color = "black";
    // p2Scr.style.color = "black";
    p1Scr.classList.remove('has-text-success', 'has-text-danger');
    p2Scr.classList.remove('has-text-success', 'has-text-danger');
    enable()
}