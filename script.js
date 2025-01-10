const tip = document.querySelector(".tip")
tip.textContent = "請輸入1~100的數字";

let answer = (Math.random() * 100) + 1;
answer = Math.floor(answer);
console.log("答案是" + answer);
let min=1,max=100;

document.querySelector("#ok").addEventListener("click", function () {
    console.log("按下按鈕");
    let number = document.querySelector("#number").value;
    console.log("你猜的數字是" + number);
    if(number==answer){
        tip.textContent = "恭喜你答對了";
    }
    else if(number>answer){
        tip.textContent = `請輸入${min}~${number}的數字`;
        max = number;
    }
    else{
        tip.textContent = `請輸入${number}~${max}的數字`;
        min = number;
    }
});