/*# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:



#//// Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*



#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

//creo un ciclo for per stampare in pagina

#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
# Consigli del giorno:
 Ragioniamo tanto sulla definizione dell'oggetto, se sbagliamo quello tutto diventa più difficile!*/

//RECUPERO ELEMENTO CONTAINER DAL DOM
const container = document.getElementById('container')
//RECUPERO BOTTONE LIKES
const button = document.getElementById('like-counter-1')


const post = [
    {
        id: 1,
        username: 'Alessio Cordari',
        userPic: 'alessio.jpg',
        date: '09/14/2022',
        text: 'Distinctio minima iusto',
        pic: 'https://unsplash.it/300/300?image=108',
        likes: '100'
    },
    {
        id: 2,
        username: 'Marco Lanci',
        userPic: 'marco.jpg',
        date: '06/10/2020',
        text: 'Placeat libero ipsa nobis',
        pic: 'https://unsplash.it/300/300?image=215',
        likes: '120'
    },
    {
        id: 3,
        username: 'Simone Sanna',
        userPic: 'simone.jpg',
        date: '01/05/2021',
        text: 'Et nihil ullam aut alias',
        pic: 'https://unsplash.it/300/300?image=300',
        likes: '200'
    },
]

//CICLO FOR SULL'ARRAY
for (let i = 0; i < post.length; i++) {
    //VARIABILE PER EVITARE RIPETIZIONI NEL CODICE
    let current = post[i];

}