const giphyKey = "4mS9056TsNRnmdIb4UdHwp9KTesklL6s";
const giflist = $("#giflist")
const memelist = $("#memelist")
let trendingGifs;
let userSearch = $("#searchfield")
const searchButton = $("#shinybutton")

// Memes Section
async function getMemeAPI(){
    // The giphy trend API that allows you to modify how many and rating that comes back
    let hotMemes = `https://api.imgur.com/3/gallery/hot/viral/0.json`
   await fetch(hotMemes)
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(data) {
        trendingMemes = data;
        console.log(trendingMemes);
      return trendingMemes
    });
    renderMemes(trendingMemes);
}
function renderMemes(){
    console.log(trendingMemes)
    for (i = 0; i < trendingMemes.data.length - 48; i++){
        let memes = trendingMemes.data[i].images[0].link
        if (trendingMemes.data[i].images[0].link == null){continue;}{
        memelist.append(`<div class="col-xl-3 col-md-6 col-xxl-3"><a href="${memes}" target="_blank"><img id="gifies"
         class="img-responsive img-thumbnail" src="${memes}"/></a></div>`)
    }

}}
    









// Gifs Section
async function getAPI(){
    // The giphy trend API that allows you to modify how many and rating that comes back
    let gifTrend = `http://api.giphy.com/v1/gifs/trending?&api_key=${giphyKey}&rating=pg-13&limit=12`
   await fetch(gifTrend)
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(data) {
        trendingGifs = data;
        console.log(trendingGifs);
      return trendingGifs
    });
    renderGifs(trendingGifs);
}

//This function will allow the page to load initially with the trending gifs, but can be modified with the search gifs

function renderGifs(){
    console.log(trendingGifs)
    for (i = 0; i < trendingGifs.data.length; i++){
        let gifs = trendingGifs.data[i].images.fixed_width.url
        giflist.append(`<div class="col-xl-3 col-md-6 col-xxl-3"><a href="${gifs}" target="_blank"><img id="gifies"
         class="img-responsive img-thumbnail" src="${gifs}"/></a></div>`)
    }
    
    
}

searchButton.click(function(event){
    event.preventDefault();
    let searches = userSearch.val();
    // console.log(searches);
    searchAPI(searches);
});

function searchAPI(searches){
    console.log(searches)
    let searchURL = `http://api.giphy.com/v1/gifs/search?q=${searches}&api_key=${giphyKey}&rating=pg-13&limit=12`
    fetch(searchURL)
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(data) {
        searchGifs = data;
        console.log(searchGifs);
        renderGifsearch(searchGifs);
        return searchGifs
    });
}

function renderGifsearch(searchGifs){
   giflist.empty()
    console.log(searchGifs)
    for (i = 0; i < searchGifs.data.length; i++){
        let gifs = searchGifs.data[i].images.fixed_width.url
        giflist.append(`<div class="col-xl-3 col-md-6 col-xxl-3"><a href="${gifs}" target="_blank"><img id="gifies"
         class="img-responsive img-thumbnail" src="${gifs}"/></a></div>`)
    }
    
    
}
getAPI();
getMemeAPI();