// inserisci nel sistema le mail di quelli che possono entrare

const emailCompagnia = ["gandalf@compagnia.com", "frodo@compagnia.com", "sam@compagnia.com", "aragorn@compagnia.com", "legolas@compagnia.com", "pipino@compagnia.com", "merry@compagnia.com", "gimli@compagnia.com", "boromir@compagnia.com"];


// SELEZIONA IL BOTTONE

const button = document.getElementById('myButton');
console.log(button);

// AGGANCIAMO L'EVENTO AL BOTTONE
button.addEventListener('click',
    function(){
        // PRENDI IL VALUE DELL'INPUT: // Chiedi all’utente la sua email,
        const nuovoValore = document.querySelector('input').value;
        const nuovoValoreNum = parseInt(nuovoValore);
        console.log(nuovoValoreNum);

        // STAMPA OUTPUT DELLA MAIL INSERITA DALL'UTENTE DELL'ARRAY
        const itemScelto = emailCompagnia[nuovoValoreNum];
        console.log(itemScelto);

        const container = document.getElementById('container');
        const nuovoItem = `<span>${itemScelto}</span>`
        container.innerHTML = nuovoItem;



        // Controlla che sia una di quelle della Compagnia:

        // traversiamo l'array

        for (let i = 0; i < emailCompagnia.length; i++) {

            // Ci salviamo il valore iesimo della const emailCompagnia relativo all'iterazione del for (i)
            const compagniaIesimo = emailCompagnia [i];

            console.log(compagniaIesimo);
     

            // Condizioni: 

            // Se la mail è una di quelle della Compagnia apparirà il messaggio 'tu puoi passare'

            if (compagniaIesimo === 1){
                console.log("Tu puoi passare");
            }

            // Se la mail non è una di quelle della Compagnia apparirà il messaggio 'tu non puoi passare'
            else {
                console.log("Tu non puoi passare");
            }

            
        }
    }  
    );













