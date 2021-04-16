/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.

Prograsm start
Rock, paper, scissor? 
Set computer answer
User enter answer
if the answer are equal
    print draw
    end program
else if user has rock and computer has paper
    print you lose
    end program
else if user has rock and computer has scissor
    print you win
    end program
else if user has scissor and computer has paper
    print you win
    end program
else if user has scissor and computer has rock
    print you lose
    end program
else if user has paper and computer has scissor
    print you lose
    end program
else if user has paper and computer has rock
    print you lose
    end program





*/

var nummer = Math.random();
nummer = nummer * 3;
nummer = Math.ceil(nummer);
let computer
if (nummer === 1) { computer = "rock"}
else if (nummer === 2) { computer = "scissor"}
else if (nummer === 3) { computer = "paper"}


let user = prompt("Enter rock, paper or scissor")


let win =
    (user === "rock" && computer === "scissor")
    || (user === "paper" && computer === "rock")
    || (user === "scissor" && computer === "paper")
let draw = user === computer
if ((user !== "rock") && (user !== "paper") && (user !== "scissor")){
    alert ("invalid input")
}
else if (win) {
    alert ("You win!" + " Computer chose " + computer)
} 
else if (draw) {
    alert ("Draw" + " Computer chose " + computer) 
}
else {
    alert ("You lose!" + " Computer chose " + computer)
}





