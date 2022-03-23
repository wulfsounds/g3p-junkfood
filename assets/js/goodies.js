var imagesObject = [];

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = function(e) {
          displayImgData(e.target.result)
          addImage(e.target.result);
      };

      reader.readAsDataURL(f);
    }
}

function loadFromLocalStorage(){
  var images = JSON.parse(localStorage.getItem("images"))

  if(images && images.length > 0){
    imagesObject = images;
    
    displayNumberOfImgs();
    images.forEach(displayImgData);
  }
}
// Grabs the image from upload and stores them into local storage
function addImage(imgData){
  imagesObject.push(imgData);
  displayNumberOfImgs();
  localStorage.setItem("images", JSON.stringify(imagesObject));
}
// Places the info on the page, added some custom stylings
function displayImgData(imgData){
  var span = document.createElement('span');
  span.innerHTML = '<div class="col-xl-3 col-md-3 col-xxl-3"><img id="gifies" class="img-responsive img-thumbnail" src="' + imgData + '"/></div>';
  document.getElementById('list').insertBefore(span, null);
}
// Dispalys all the info Dynamically on the page 
function displayNumberOfImgs(){
  if(imagesObject.length > 0){

    document.getElementById("state").innerHTML = imagesObject.length + " image" + ((imagesObject.length > 1) ? "s" : "") + " stored in your browser";
    
    document.getElementById("deleteImgs").style.display = "inline";
    
  } else {
    document.getElementById("state").innerHTML = "Nope, nothing in your local storage.";
    document.getElementById("deleteImgs").style.display = "none";
  }
  
  
}

function deleteImages(){
  imagesObject = [];
  localStorage.removeItem("images");
  displayNumberOfImgs()
  document.getElementById('list').innerHTML = "";
}

document.getElementById('formFileLg').addEventListener('change', handleFileSelect, false);
document.getElementById('deleteImgs').addEventListener("click", deleteImages);
loadFromLocalStorage();