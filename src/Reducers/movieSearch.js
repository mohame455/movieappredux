const init = [{ title: "Bad Boys", src: "https://www.canalolympia.com/wp-content/uploads/2020/01/bad-boys-for-life-1080x1600.jpg", rating: 4, id: Math.random(), description: "Bad Boys Despription" },
{ title: "Now you See Me", src: "https://img.filmsactu.net/datas/films/i/n/insaisissables/vm/insaisissables-affiche-519f792eb3730.jpg", rating: 4, id: Math.random(), description: "Now You See Me Despription" },
{ title: "The Dark Knight", src: "https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,804,center-middle,forcex,ffffff/img/var/plain_site/storage/images/loisirs/cinema/news/j-y-vais-j-y-vais-pas/the-dark-knight-rises-final-magistral-2128994/22608914-1-fre-FR/The-Dark-Knight-Rises-final-magistral.jpg", rating: 5, id: Math.random(), description: "Dark Knight Despription" },
{ title: "Grown Ups", src: "https://www.avoir-alire.com/local/cache-vignettes/L240xH320/arton13914-ecdc9.jpg?1578245241", rating: 3, id: Math.random(), description: "GrownUps Despription" },
{ title: "Avengers", src: "https://unificationfrance.com/IMG/jpg/400-277.jpg", rating: 4, id: Math.random(), description: "Avengers Despription" }]
const movieSearch = (state = init, action) => {
    if (action.type === "ADD_MOVIE") {
        return [...state, action.payload]
    } else if (action.type === "EDIT") {
        return state.map(el => (el.id === action.payload.id) ? action.payload : el)
    } else if (action.type === "REMOVE") {
        return state.filter(el => el.id !== action.payload)
    }
    else { return state }

}

export default movieSearch;