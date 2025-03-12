
document.body.style.background = "black";

const textContainer = document.querySelector("#textContainer");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Welcome to Rock, Paper & Scissors Game!";
content.style.color="white";
container.appendChild(content);

// buttons is a node list. It looks and acts much like an array.
// const button=document.querySelectorAll("button");
// const buttonOne = document.querySelector("#one");
// buttonOne.addEventListener("click", gethumanSelection);


// const buttonTwo = document.querySelector("#two");
// buttonTwo.addEventListener("click", getcomputerSelection);


const buttonThree = document.querySelector("#three");
buttonThree.addEventListener("click", playGame);




//Function to play game
  
 function playGame()
 {
    let humanScore=0;
    let computerScore=0;
    const humanSelection = gethumanSelection();
    const computerSelection = getcomputerSelection();
    
    if(computerSelection === humanSelection)
        { 
            const output = document.createElement("div");
            output.classList.add("output");
            output.textContent = "it is a tie. you both picked same item";
            output.style.color="white";
            container.appendChild(output);  
        }
        else if(humanSelection === "rock" && computerSelection === "scissors")
        {
            const output = document.createElement("div");
            output.classList.add("output");
            output.textContent = "You win! rock beats scissor";
            output.style.color="white";
            container.appendChild(output); 
            humanScore++;
        }
        else if(humanSelection === "rock" && computerSelection === "paper")
        { 
            const output = document.createElement("div");
            output.classList.add("output");
            output.textContent = "You win! paper beats rock";
            output.style.color="white";
            container.appendChild(output); 
            humanScore++;
        }
         else if(humanSelection === "scissors" && computerSelection === "paper")
        {
            const output = document.createElement("div");
            output.classList.add("output");
            output.textContent = "You win! scissors beats paper";
            output.style.color="white"; container.appendChild(output); 
            humanScore++;
        }
        else
        {   const output = document.createElement("div");
            output.classList.add("output");
            output.textContent = "you lose! Computer selection beats you";
            output.style.color="white"; 
            container.appendChild(output); 
            computerScore++;
        }
    
        const output = document.createElement("div");
        output.classList.add("output");
        output.textContent = "Final score: " + humanScore + " to " + computerScore + "";
        output.style.color="white"; 
        container.appendChild(output);
    
 }

//   for (let i = 1; i <= 5; i++) {
//     playGame(i);
//  }

//Function to get value for computer
function getcomputerSelection()
{
  const randomValue= Math.floor(Math.random()*3);
    if(randomValue<1)
        {
            return "rock";
        }
        else if(randomValue>1)
        {
            return "paper";
        }
        else
        {
            return "scissors";
        }
}

//Function to get value for human player
function gethumanSelection()
{
    let humanInput = prompt("Please enter your choice:(rock, paper, or scissors):");
    return humanInput;
}
