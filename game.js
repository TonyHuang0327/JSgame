const clickDisplay = document.getElementById("counter");
const rateDisplay = document.getElementById("resetRate");
const scoreDisplay = document.getElementById("highScore");
const button = document.getElementById("clickButton");
const customAlert = document.getElementById("customAlert");
const closeAlertButton = document.getElementById("closeAlert");

let clickCount = 0;
let rate = 0;
let score = 0;
let highestScore = 0;

button.addEventListener('click',()=>{
    clickCount ++ ;
    score ++ ;
    rate += 0.01 ;
    const randomNumber = Math.random();
    if(randomNumber<rate){
        if(score>highestScore){
            highestScore = score ;
        }
        customAlert.style.display = 'block'; // 顯示彈窗
        score = 0;
        clickCount = 0 ;
        rate = 0 ;
    }
    clickDisplay.textContent = `Clicks Counter: ${clickCount}`;
    scoreDisplay.textContent = `Highest Score: ${highestScore}`;
    rateDisplay.textContent =  `Reset Rate: ${(rate*100).toFixed(0)}%`;

    // 添加關閉彈窗的事件監聽器
    closeAlertButton.addEventListener('click', () => {
    customAlert.style.display = 'none'; // 隱藏彈窗
    });
})

