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






