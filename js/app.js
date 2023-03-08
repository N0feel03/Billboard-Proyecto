const tarjetas = document.getElementById('tarjetas')
const song = document.getElementById('song').content
const fragment = document.createDocumentFragment()

let topMusic = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusic()
})

const loadMusic = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e7cd95045msh49f76516dc24a6dp140bb6jsn981c21246f6b',
            'X-RapidAPI-Host': 'billboard3.p.rapidapi.com'
        }
    };
    
    fetch('https://billboard3.p.rapidapi.com/hot-100?date=2022-07-07&range=1-10', options)
        .then(response => response.json())
        .then(response => {
            topMusic = response
            Listatops()
        })
        .catch(err => console.error(err));
}

const Listatops = () => {
    topMusic.forEach((canciones) => {
        song.querySelector('img').setAttribute('src', canciones.image)
        song.querySelectorAll('p')[0].textContent = canciones.title
        song.querySelectorAll('p')[1].textContent = canciones.artist
        song.querySelectorAll('p')[2].textContent = canciones.rank
        song.querySelectorAll('p')[3].textContent = canciones.change
        song.querySelectorAll('p')[4].textContent = canciones.weeksAtNo1
        const clone = song.cloneNode(true)
        fragment.appendChild(clone)
    })
    tarjetas.appendChild(fragment)
}