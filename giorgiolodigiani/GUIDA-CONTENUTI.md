# Guida rapida gestione contenuti

Il sito e stato costruito per essere gestito in modo semplice, senza dover modificare ogni pagina manualmente.

## Dove aggiornare testi e contatti

Apri `assets/js/content.js`.

Le aree principali da modificare sono:

- `CONTACTS`: telefono, email, WhatsApp, Instagram, disponibilita.
- `BRAND_PILLARS`: i due pilastri principali del sito, "viaggi su misura" e "accompagnamento personale".
- `SERVICES`: card dei servizi.
- `JOURNEYS`: card della sezione "I miei viaggi".
- `TESTIMONIALS`: recensioni da mostrare nella home.
- `VISITED_LOCATIONS`: punti della mappa viaggi (nome, paese, latitudine, longitudine).
- `GALLERY_ITEMS`: foto e descrizioni della pagina galleria.
- `pages`: testi delle singole pagine, hero, CTA e descrizioni.

Ogni modifica fatta in questo file viene riutilizzata automaticamente in tutto il sito.

## Dove aggiornare immagini

Le immagini si trovano in `assets/images`.

Hai due modi semplici per aggiornarle:

1. Sostituisci il file immagine mantenendo lo stesso nome.
2. Oppure cambia il percorso dell'immagine nel file `assets/js/content.js`.

## Come aggiornare la mappa viaggi

La mappa si trova nella pagina `viaggi.html` ed e alimentata da `VISITED_LOCATIONS` in `assets/js/content.js`.
Usa una base OpenStreetMap con visualizzazione Leaflet, quindi i punti vengono localizzati su coordinate reali.

Per ogni nuova meta aggiungi un oggetto con questa struttura:

- `name`: nome citta/meta
- `country`: paese
- `lat`: latitudine (numero)
- `lon`: longitudine (numero)
- `featured` (opzionale): `true` se vuoi evidenziare la meta piu delle altre

## Come aggiornare la galleria

La pagina `galleria.html` legge tutto da `GALLERY_ITEMS` in `assets/js/content.js`.

Per ogni nuova foto puoi aggiornare questi campi:

- `image`: percorso del file immagine
- `alt`: testo alternativo dell'immagine
- `tag`: etichetta breve visibile sulla card
- `title`: titolo della card
- `text`: descrizione breve
- `location`: localita o area
- `chips`: piccoli tag opzionali
- `layout` (opzionale): `wide` o `tall` per cambiare il formato visivo

## Come funzionano le pagine

Le pagine HTML sono:

- `index.html`
- `chi-sono.html`
- `servizi.html`
- `viaggi.html`
- `galleria.html`
- `contatti.html`

Lo stile e in `assets/css/styles.css`.

La logica del sito e in `assets/js/site.js`.

## Nota sul form contatti

Il progetto e solo front-end, quindi il form non invia dati a un server.

Il comportamento attuale e questo:

- il visitatore compila il form
- il sito prepara un'email
- si apre il programma di posta predefinito del dispositivo

Se in futuro vuoi un invio diretto senza apertura dell'email, servira collegare il form a un servizio esterno o a un backend.
