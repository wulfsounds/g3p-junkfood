const giphyKey = "4mS9056TsNRnmdIb4UdHwp9KTesklL6s";
const giflist = $("#giflist")
let trendingGifs;

// This is for the munchies page really, but testing to see if I can render it to the page.
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


function renderGifs(){
    console.log(trendingGifs)
    for (i = 0; i < trendingGifs.data.length; i++){
        let gifs = trendingGifs.data[i].images.fixed_width.url
        giflist.append(`<div class="col-xl-3 col-md-6 col-xxl-3"><img id="gifies"
         class="img-responsive img-thumbnail" src="${gifs}"/></div>`)
    }
    
    
}

getAPI();