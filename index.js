
/**
 * Effettua una richiesta all'API Pexels per recuperare foto in base al parametro fornito.
 * Questo è il corretto funzionamento del codice:
 *
 * - Utilizza la funzione fetch per effettuare una richiesta all'API Pexels,
 *   specificando l'endpoint di ricerca con il parametro di ricerca.
 * - Invia una richiesta all'API Pexels incluso l'header di autorizzazione.
 * - Converte la risposta in formato JSON utilizzando la funzione then di promises.
 * - Elabora la risposta JSON creando dinamicamente il contenuto dell'elemento HTML con l'ID 'album'
 *   utilizzando il metodo map e il metodo join per creare una stringa HTML.
 * - Aggiorna l'elemento HTML con l'ID 'album' con il contenuto creato.
 *
 * @param {string} parametro - Il parametro di ricerca per l'API Pexels.
 * @return {Promise<void>} Una promessa che si risolve quando l'elemento HTML con l'ID 'album' viene aggiornato con le foto recuperate.
 */
function cercaFoto( parametro ){

  // Effettua una richiesta all'API Pexels
  let chiamata = fetch(`https://api.pexels.com/v1/search?query=${parametro}`, { 
      headers: {
        // Aggiunge l'header di autorizzazione
        Authorization : 'ehhhhhh_volevi'
      } 
    } 
  );
  // Converte la risposta in formato JSON
  chiamata.then((risposta)=>risposta.json()).then((rispostaElaborata)=>{
    // Elabora la risposta JSON
    console.log(rispostaElaborata);
    
    // Crea il contenuto dell'elemento HTML con l'ID 'album'
    document.getElementById('album').innerHTML = rispostaElaborata.photos.map((image)=>
    `<div class="col">
      <div class="card shadow-sm">
        <img src="${image.src.small}">
        <p>Photographer ${image.photographer}</p>
        <div class="card-body">
          <p class="card-text">${image.alt}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
    
            </div>
            <small class="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>;`
    ).join(""); // Unisce le stringhe in un'unica stringa HTML
  });

}
