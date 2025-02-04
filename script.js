const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(serachTerm) {
    const url = 'http://localhost:300/artists?name_like=${searchTerm}'
    fecth(url)
        .them((response) => response.json())
        .them((result) => displayResults(result))
}

document.addEventListener('input', function(){
    const  searchTerm = searchInput.value.toLowCase();
    if(searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})
