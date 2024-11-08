/*CONSEGNA:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*Variabili iniziali*/
let nKm; /*Numero km da percorrere*/
let eta; /*Età passeggero*/

/*Richiesta dati a utente e validazione dati pre calcolo (prezzo non può essere minore di 0 ed eta non può essere ne minore di 0 ne maggiore di 150)*/
/*Richiesta e validazione numero km*/
nKm = parseInt(prompt("Buongiorno, benvenuti da rapidTrain, quanti kilometri desidera percorrere?"));
while(nKm < 0) {
    console.log("Siamo spiacenti, il numero di kilometri indicato risulta minore di 0!");
    nKm = parseInt(prompt("Quanti kilometri desidera percorrere?"));
}

/*Richiesta e validazione età*/
eta = parseInt(prompt("Quanti anni ha? (Abbiamo uno sconto dedicato a minorenni ed un altro a over 65!)"));
while(eta < 0 || eta > 150) {
    console.log("Siamo spiacenti, l'età inserita risulta non valida!");
    eta = parseInt(prompt("Per favore reinserisca la sua età"));
}

/*Calcolo del prezzo */
let prezzo = 0.21 * nKm;/*Dichiarazione variabile prezzo e calcolo del valore di base (0.21 * nkm)*/

/*Under-18*/
if(eta < 18) {
        console.log("Complimenti, appartiene alla fascia scontata under-18, ha diritto ad uno sconto del 20% sul prezzo del biglietto");
        prezzo = prezzo * 0.8;
}

/* eta compresa tra 18 e 65 anni*/
else if(eta >= 18 && eta <= 65)
    console.log("Non appartiene a nessuna fascia scontata");

/*Over-65*/
else {
    console.log("Complimenti, appartiene alla fascia scontata over-65, ha diritto ad uno sconto del 40% sul prezzo del biglietto");
    prezzo = prezzo * 0.6;
}
 
/*Formattazione prezzo con solo 2 cifre decimali*/
let prezzoFormattato = prezzo.toFixed(2);

/*Visualizzazione del risultato in console*/
console.log("il prezzo del suo biglietto è "+prezzoFormattato+"€");