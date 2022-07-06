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



#////Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

//creo un ciclo for per stampare in pagina

#////Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
# Consigli del giorno:
 Ragioniamo tanto sulla definizione dell'oggetto, se sbagliamo quello tutto diventa più difficile!*/

//RECUPERO ELEMENTO CONTAINER DAL DOM
const container = document.getElementById('container')


const post = [
    {
        id: 1,
        username: 'Alessio Cordari',
        userPic: 'https://unsplash.it/300/300?image=110',
        date: '09/14/2022',
        text: 'Distinctio minima iusto',
        pic: 'https://unsplash.it/600/300?image=108',
        likes: 184
    },
    {
        id: 2,
        username: 'Marco Lanci',
        userPic: 'https://unsplash.it/300/300?image=109',
        date: '06/10/2020',
        text: 'Placeat libero ipsa nobis',
        pic: 'https://unsplash.it/600/300?image=215',
        likes: 125
    },
    {
        id: 3,
        username: 'Simone Sanna',
        userPic: 'https://unsplash.it/300/300?image=102',
        date: '01/05/2021',
        text: 'Et nihil ullam aut alias',
        pic: 'https://unsplash.it/600/300?image=305',
        likes: 213
    },
    {
        id: 4,
        username: 'Fabrizio Mastrobattista',
        userPic: 'https://unsplash.it/300/300?image=133',
        date: '01/05/2021',
        text: 'Et nihil ullam aut alias',
        pic: 'https://unsplash.it/600/300?image=315',
        likes: 2000
    },
    {
        id: 5,
        username: 'Enrico Campani',
        userPic: 'https://unsplash.it/300/300?image=122',
        date: '01/05/2021',
        text: 'Et nihil ullam aut alias',
        pic: 'https://unsplash.it/600/300?image=325',
        likes: 500
    },
]

console.table(post)

//CICLO FOR SULL'ARRAY
for (let i = 0; i < post.length; i++) {
    //VARIABILE PER EVITARE RIPETIZIONI NEL CODICE
    let current = post[i];
    container.innerHTML += `<div class="post">
    <div class="post__header">
    <div class="post-meta">
    <div class="post-meta__icon">
    <img class="profile-pic" src="${current.userPic}" alt="${current.username}" />
    </div>
    <div class="post-meta__data">
    <div class="post-meta__author">${current.username}</div>
    <div class="post-meta__time">${current.date}</div>
    </div>
    </div>
    </div>
    <div class="post__text">
    ${current.text}
    </div>
    <div class="post__image">
    <img src="${current.pic}" alt="${current.username}" />
    </div>
    <div class="post__footer">
    <div class="likes js-likes">
    <div class="likes__cta">
    <a class="like-button js-like-button" href="#" data-postid="${current.id}">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </a>
    </div>
    <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${current.likes}</b> persone</div>
    </div>
    </div>
    </div>
    </div>`
    
};


//RECUPERO BOTTONE LIKES
const button = document.querySelectorAll('.like-button')
//RECUPERO CONTATORE
const counter = document.querySelectorAll('.js-likes-counter')

for (let i = 0; i < button.length; i++)
button[i].addEventListener('click', function (x) {
    x.preventDefault();
    button[i].classList.toggle('like-button--liked')
    counter[i].innerHTML = `${post[i].likes + 1}`
    
})