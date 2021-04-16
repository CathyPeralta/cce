/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean ska och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.

start program
Enter shape 
if shape is circle ask for radius
calculate area 
print area 
else if shape is rectangel ask for width and height
calculate area 
print area 
else if shape is triangle ask for base and height
calculate area 
print area 
end program
*/
let shape = prompt("Enter shape")
if( shape === "circle"){
    let radius = prompt("Enter Radius")
    let area = radius * radius * 3.14
    alert("Area is " + area + ".")
}
else if ( shape === "rectangel"){
    let width = prompt("Enter width")
    let height = prompt("Enter height")
    let area = width * height
    alert("Area is " + area + ".")
}
else if ( shape === "triangle"){
    let base = prompt("Enter base")
    let height = prompt("Enter height")
    let area = base * height / 2
    alert("Area is " + area + ".")
}
else {
    alert("Wrong shape")
}
