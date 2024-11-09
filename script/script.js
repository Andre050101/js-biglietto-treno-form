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

function calcolaPrezzo(){
    const nome = document.getElementById("nome").value;
    const nKm = parseFloat(document.getElementById("nKM").value);
    const eta = document.getElementById("eta").value;
    if (!nome || isNaN(nKm) || nKm <= 0) {
        alert("Per favore, inserisci tutti i dati correttamente.");
        return;
    }
    let prezzo = 0.21 * nKm;
    let offerta = "Biglietto Standard";

    if(eta === "minorenne"){
        prezzo *= 0.8;
        offerta= "Sconto Minorenne";
    }
    else if(eta === "over65"){
        prezzo *= 0.6;
        offerta = "Sconto Over 65";
    }
        
    const carrozza = Math.floor(Math.random() * 10) + 1; 
    const codiceCP = Math.floor(Math.random() * 90000) + 10000; 

    const dettagli = `
    <h2>IL TUO BIGLIETTO</h2>
      
        <table>
          <tr>
            <th>NOME PASSEGGERO</th>
            <th>Offerta</th>
            <th>Carrozza</th>
            <th>Codice CP</th>
            <th>Costo biglietto</th>
          </tr>
          <tr>
            <td>${nome}</td>
            <td>${offerta}</td>
            <td>${carrozza}</td>
            <td>${codiceCP}</td>
            <td>${prezzo.toFixed(2)}€</td>
          </tr>
        </table>
  `;
  document.getElementById("dettagli-biglietto").innerHTML = dettagli;
}
function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("nKM").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("dettagli-biglietto").innerHTML = "";
  }