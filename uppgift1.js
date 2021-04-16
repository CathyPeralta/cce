/* 

Skapa ett program som frågar efter namn och ålder samt sparar ner dessa i separata variabler.
Börja med att göra en flowchart och sedan skriva pseudokod, detta för att arbeta in förberedelsemetoder inför programmeringsproblem.

Beroende på vilken åldern användaren skriver in ska olika popups komma upp. Dessa ska ni styra med if/else statements.
pseudokod:

Starta programmet
Ange namn 
Svara "Ok {namn}, hur gammal är du?"
ange ålder
Om ålder är mindre än 15 svara "Du måste ha hjälm när du cykla"
Om ålder är mindre än 18 svara "Du får inte rösta"
Om ålder är mindre än 23 svara "Det blir ingen finlandsfärga"
Om ålder är över 23 svara "Du är gammal nog att göra vad du vill"
Avsluta program



följande regler ska gälla:

* programmet ska svara med namnet innan den skriver ut reglerna

* om personen är under 15, visa texten "Du måste ha hjälm när du cyklar"

* om personen är under 18, visa texten "Du får inte rösta"

* om personen är under 23, visa texten "Det blir ingen finlandsfärga"

* om personen är över 23, visa texten "Du är gammal nog att göra vad du vill"

Programmet ska bete sig enligt följande när du är klar:

Hej, vad heter du? :Micke
Ok Micke, hur gammal är du? :17

Du får inte rösta, Micke!
Det blir ingen finlandsfärga, Micke!

*/
let name = prompt("Hej, vad heter du?")
let age = prompt("OK  " + name + ", hur gammal är du?")
if (age < 15){alert ("Du måste ha hjälm när du cyklar")}
if (age < 18){alert ("Du får inte rösta")}
if (age < 23){alert ("Det blir ingen finlandsfärga")}
if (age > 23){ alert ("Du är gammal nog att göra vad du vill")}
