# Applicazione Store

Questa è un'applicazione che simula uno shop online. È stata sviluppata seguendo un tutorial su YouTube.

## Tecnologie Utilizzate

- **Angular**: L'applicazione è realizzata con Angular versione 17.1.1.
- **Angular Material**: Le componenti dell'applicazione sono realizzate con Angular Material.
- **Tailwind CSS**: Il CSS dell'applicazione è gestito con Tailwind CSS.

## Installazione

Per installare e avviare l'applicazione, seguire i seguenti passaggi:

1. Clonare il repository.
2. Installare le dipendenze con `npm install`.
3. Avviare l'applicazione con `ng serve`.


## Componenti

Vediamo le componenti: 

- `headers`: è la barra degli strumenti dell'applicazione. Include un link alla pagina home, un pulsante del carrello della spesa che attiva un menu a discesa, e una lista di prodotti nel carrello con le relative opzioni. Questa componente utilizza Angular Material per la UI e Tailwind CSS per lo stile.

- `HomeComponent`: Questa componente gestisce la visualizzazione della pagina principale dello shop. Include un cassetto laterale per i filtri e un layout principale per i prodotti. Il numero di colonne di prodotti mostrate può essere modificato attraverso il componente `ProductsHeaderComponent`.

- `ProductsHeaderComponent`: Questa componente fornisce controlli per ordinare i prodotti, modificare il numero di prodotti mostrati e cambiare il layout dei prodotti. Comunica con la `HomeComponent` attraverso l'emissione di eventi.

- `FiltersComponent`: Fornisce un pannello espandibile che mostra le categorie di prodotti disponibili. Quando si seleziona una categoria, la componente emette un evento `showCategory` con la categoria selezionata.

La componente `HomeComponent` include la componente `FiltersComponent` e ascolta l'evento `showCategory`. Quando questo evento viene emesso, la `HomeComponent` aggiorna la categoria di prodotti da mostrare.


- `ProductBoxComponent`: Rappresenta una card di un prodotto. La card mostra un'immagine del prodotto, il nome del prodotto, una descrizione (se `fullWidthMode` è `true`), il prezzo del prodotto e un pulsante per aggiungere il prodotto al carrello.


La componente `HomeComponent` include la componente `ProductBoxComponent` in una griglia. Il numero di colonne della griglia e l'altezza delle righe sono determinati dal valore di `cols` e `rowHeight`, rispettivamente. Se `cols` è 1, allora `fullWidthMode` è `true`. 

Quando un prodotto viene aggiunto al carrello, `ProductBoxComponent` emette un evento addToCart che viene ascoltato dal `HomeComponent`.
Il HomeComponent quindi aggiunge il prodotto al carrello utilizzando il `CartService`, che gestisce lo stato del carrello della spesa


- `CartComponent` rappresenta il carrello. Mostra una tabella con i dettagli di ogni articolo nel carrello, tra cui il prodotto, il nome, il prezzo, la quantità, il totale e le azioni disponibili. Se il carrello è vuoto, mostra un messaggio che dice "Your cart is empty" e un pulsante per iniziare a fare shopping.

La componente `CartComponent` ha un metodo `getTotal(items: Array<CartItem>)` che calcola il totale del carrello sommando il prezzo di ogni articolo moltiplicato per la sua quantità.


## Service 

- `CartService` è un servizio che gestisce lo stato del carrello della spesa. Utilizza un `BehaviorSubject` per tenere traccia degli articoli nel carrello. Questo permette di avere un flusso reattivo di dati che può essere sottoscritto da altri componenti, rendendo facile aggiornare la vista quando lo stato del carrello cambia. Il `CartService` fornisce anche un metodo `addToCart` che permette di aggiungere nuovi articoli al carrello. Quando un articolo viene aggiunto, il `BehaviorSubject` viene aggiornato con il nuovo stato del carrello. Inoltre, il servizio fornisce un feedback visivo all’utente ogni volta che un articolo viene aggiunto al carrello, utilizzando un `MatSnackBar` per visualizzare un messaggio di conferma.


