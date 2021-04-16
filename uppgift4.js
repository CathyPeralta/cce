/*
Ni ska programmera ett spel som går ut på att användaren ska gissa ett slumpvalt nummer 
mellan 0 och 10 som programmet har slumpat fram i förväg. 
Om spelaren gissar fel så ska den få ett försök till (totalt 2 gissningar) 
tillsammans med en text som berättar om gissningen var för hög eller för låg. 
Om spelaren gissar rätt ska spelet meddela spelaren att den har vunnit. 

Gör leken i verkligheten tillsammans med en bordskamrat och tänk efter hur ni gör denna process, detta kommer att underlätta tänkandet.

När ni har fått en känsla för hur detta utspelar sig mellan två människor ska ni översätta det för datorn. 
Börja med att göra en flowchart som beskriver processen. 
Gå sedan vidare och skriv pseudokod. 
Nedan finner ni en startkod för hur man gör ett slumpvalt nummer.

Start program
Set correct number 
User enter number between 0-10
If the number is correct answer "You win"
Else if the number is lower answer "To low, last chance" 
Else it the number is higher answer "to high, last chance"
User enter number agian
If the number is correct answer "You win"
Else answer "you lose"
End game


*/ 

//Tar ett slumpvalt värde mellan 0 och 10


var nummer = Math.random();
console.log(nummer);
nummer = nummer * 10;
console.log(nummer);
nummer = Math.round(nummer);
console.log(nummer);
let user = Number(prompt("Enter a number betwwen 0-10") )
let user2 


console.log(user);
console.log(typeof user);
if (user === nummer) {
    alert("You win!");
}
else if (user < nummer) {
    alert ("To low, last chance")  
    user2 = prompt("To low, last chance") 
    if( Number(user2) === nummer) {
        alert("You win!")
    }
    else {alert("You lose!")}
} 

else if (user > nummer) {
    alert ("To high, last chance")
    user2 = prompt("To high, last chance") 
    if( Number(user2) === nummer) {
        alert("You win!")
     }
    else {alert("You lose!")}
 }




/* FORTSÄTT MED EGEN KOD HÄR */
