// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
document.querySelector("aside div:last-of-type li:has(+li:last-of-type)").remove();

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
function deletePadre(figlio) {
    figlio.parentElement.remove();
}
const FONTWEIGHTBOLDS = document.querySelectorAll(".font-weight-bold");
for (const FONTWEIGHTBOLD of FONTWEIGHTBOLDS) {
    FONTWEIGHTBOLD.addEventListener("click", () => { deletePadre(FONTWEIGHTBOLD) })
}
const STRETCHEDLINKS = document.querySelectorAll(".stretched-link");
for (const STRETCHEDLINK of STRETCHEDLINKS) {
    STRETCHEDLINK.addEventListener("click", () => { deletePadre(STRETCHEDLINK) })
}

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post
const AUTHORS = document.querySelectorAll(".blog-post p:first-of-type a");
for (const AUTHOR of AUTHORS) {
    AUTHOR.addEventListener("mouseover", () => { advise(AUTHOR.textContent) });
}
function advise(author) {

    alert(`L'autore è ${author}`);
}