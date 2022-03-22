const giphyKey = "4mS9056TsNRnmdIb4UdHwp9KTesklL6s";
const giflist = $("#giflist")
const memelist = $("#memelist")
let trendingGifs;
let userSearch = $("#searchfield")
const searchButton = $("#shinybutton")
let imgurID = "b35300034a80255"
let data;
let searchbox= $("#searchbox")


// click prevents default, but enter refreshes page?
searchButton.click(function(event){
    event.preventDefault();
    let searches = userSearch.val();
    // console.log(searches);
    searchAPI(searches);
    searchMemes(searches);
});

searchbox.submit(function(event){
    event.preventDefault();
    let searches = userSearch.val();
    // console.log(searches);
    searchAPI(searches);
    searchMemes(searches);
})


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
    })
    renderMemes(trendingMemes);
}

function searchMemes(searches){
console.log(searches)
var myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID b35300034a80255");

// var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
//   body: formdata,
  redirect: 'follow'
};



 fetch(`https://api.imgur.com/3/gallery/search/?q_any=${searches}`, requestOptions)
  .then(function (response){
   console.log(response)
   return response.json();
  })
  .then(function(data){
      console.log(data)
      renderMemeSearch(data);
      return data
    })
}

async function renderMemes(){
    for (i = 0 ; i < trendingMemes.data.length - 35; i++){
        let memes = trendingMemes.data[i].images[0].link
        if(trendingMemes.data[i] === undefined){return}
        // we want to check to see if the url string includes a file extension of '.mp4'
        //if its a movie file we skip it ---could be updated to be put in a video rendering element instead
        if (memes.includes('.mp4')) {continue}{
            // console.log(`this is a movie that is skipped: ${memes}`)    
            //its an image file and we can use it on the page
            memelist.append(`<div class="col-xl-3 col-md-6 col-xxl-3"><a href="${memes}" target="_blank"><img id="gifies"
            class="img-responsive img-thumbnail" src="${memes}"/></a></div></div>`)
            
        }        
        
}}

function renderMemeSearch(data){
    memelist.empty()
    console.log(data)
    for (i = 0 ; i < 24; i++){
        if(!data || !data.data || !data.data[i] || !data.data[i].images[0]){return}
        let memes = data.data[i].images[0].link
        // we want to check to see if the url string includes a file extension of '.mp4'
        //if its a movie file we skip it ---could be updated to be put in a video rendering element instead
        if (memes.includes('.mp4')) {continue}{
            // console.log(`this is a movie that is skipped: ${memes}`)    
            //its an image file and we can use it on the page
            memelist.append(`<div class="col-xl-3 col-md-6 col-xxl-3"><a href="${memes}" target="_blank"><img id="gifies"
            class="img-responsive img-thumbnail" src="${memes}"/></a></div>`)
            
        }        
}};  
    



// https://i.imgur.com/PU15d5C.mp4





// Gifs Section
async function getAPI(){
    // The giphy trend API that allows you to modify how many and rating that comes back
    let gifTrend = `http://api.giphy.com/v1/gifs/trending?&api_key=${giphyKey}&rating=pg-13&limit=12`
   await fetch(gifTrend)
    .then(function(response) {
        // console.log(response)
        return response.json();
    })
    .then(function(data) {
        trendingGifs = data;
        // console.log(trendingGifs);
      return trendingGifs
    });
    renderGifs(trendingGifs);
}

//This function will allow the page to load initially with the trending gifs, but can be modified with the search gifs

function renderGifs(){
    // console.log(trendingGifs)
    for (i = 0; i < trendingGifs.data.length; i++){
        let gifs = trendingGifs.data[i].images.fixed_width.url
        giflist.append(`<div class="col-xl-3 col-md-6 col-xxl-3"><a href="${gifs}" target="_blank"><img id="gifies"
         class="img-responsive img-thumbnail" src="${gifs}"/></a></div>`)
    }
    
    
}


function searchAPI(searches){
    // console.log(searches)
    let searchURL = `http://api.giphy.com/v1/gifs/search?q=${searches}&api_key=${giphyKey}&rating=pg-13&limit=12`
    fetch(searchURL)
    .then(function(response) {
        // console.log(response)
        return response.json();
    })
    .then(function(data) {
        searchGifs = data;
        // console.log(searchGifs);
        renderGifsearch(searchGifs);
        return searchGifs
    });
}

function renderGifsearch(searchGifs){
   giflist.empty()
    // console.log(searchGifs)
    for (i = 0; i < searchGifs.data.length; i++){
        let gifs = searchGifs.data[i].images.fixed_width.url
        giflist.append(`<div class="col-xl-3 col-md-6 col-xxl-3"><a href="${gifs}" target="_blank"><img id="gifies"
         class="img-responsive img-thumbnail" src="${gifs}"/></a></div>`)
    }
    
    
}

$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });		
});

getAPI();
getMemeAPI();
