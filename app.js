let choices = document.querySelectorAll(".options button");
let result = document.querySelector("#res");
let disp = document.querySelector(".display");
let userScore = document.querySelector("#uscore");
let compScore = document.querySelector("#cscore");
let ucount=0;
let ccount=0;
let ushow = document.querySelector(".uselect");
let cshow = document.querySelector(".cselect");
choices.forEach((val)=>{
    val.addEventListener("click",()=>{
        let userChoice = val.getAttribute("id");
        compgen(userChoice);
    })
})
const compgen = (userChoice)=>{
    let options = ["rock","paper","scissor"];
    let value = Math.floor(Math.random()*3);
    let compChoice = options[value];
    final(userChoice,compChoice);
}
const final = (userChoice, compChoice) => {
    if (userChoice == compChoice) {
        result.innerText = "It's a draw!";
        ushow.classList.remove("hide");
        cshow.classList.remove("hide");
        ushow.innerText=`you selected : ${userChoice}`;
        cshow.innerText=`computer selected : ${compChoice}`;
    } else if (userChoice == "rock" && compChoice == "paper") {
        ccount++;
        compScore.innerText = ccount;
        result.innerText = "Computer Won!";
        ushow.classList.remove("hide");
        cshow.classList.remove("hide");
        ushow.innerText=`you selected : ${userChoice}`;
        cshow.innerText=`computer selected : ${compChoice}`;
    } else if (userChoice == "rock" && compChoice == "scissor") {
        ucount++;
        userScore.innerText = ucount;
        result.innerText = "You Won!";
        ushow.classList.remove("hide");
        cshow.classList.remove("hide");
        ushow.innerText=`you selected : ${userChoice}`;
        cshow.innerText=`computer selected : ${compChoice}`;
    } else if (userChoice == "paper" && compChoice == "rock") {
        ucount++;
        userScore.innerText = ucount;
        result.innerText = "You Won!";
        ushow.classList.remove("hide");
        cshow.classList.remove("hide");
        ushow.innerText=`you selected : ${userChoice}`;
        cshow.innerText=`computer selected : ${compChoice}`;
    } else if (userChoice == "paper" && compChoice == "scissor") {
        ccount++;
        compScore.innerText = ccount;
        result.innerText = "Computer Won!";
        ushow.classList.remove("hide");
        cshow.classList.remove("hide");
        ushow.innerText=`you selected : ${userChoice}`;
        cshow.innerText=`computer selected : ${compChoice}`;
    } else if (userChoice == "scissor" && compChoice == "rock") {
        ccount++;
        compScore.innerText = ccount;
        result.innerText = "Computer Won!";
        ushow.classList.remove("hide");
        cshow.classList.remove("hide");
        ushow.innerText=`you selected : ${userChoice}`;
        cshow.innerText=`computer selected : ${compChoice}`;
    } else if (userChoice == "scissor" && compChoice == "paper") {
        ucount++;
        userScore.innerText = ucount;
        result.innerText = "You Won!";
        ushow.classList.remove("hide");
        cshow.classList.remove("hide");
        ushow.innerText=`you selected : ${userChoice}`;
        cshow.innerText=`computer selected : ${compChoice}`;
    }
}

