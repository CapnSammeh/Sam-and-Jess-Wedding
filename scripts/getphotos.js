function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    
    var text = xmlHttp.responseText.substr(1);
    text = text.substring(0, text.length - 1);
    text = text.replace(/['"]+/g, '');

    var xmlHTTPArray = text.split(',');
    
    return xmlHTTPArray;
}

function createPhotoGrid(photoArray) {
  photoArray.forEach(function(photo) {
    var count = photoArray.indexOf(photo) + 1;

    var photoDOM = document.getElementById("photos");

    var carouselNode = document.createElement("div");
    if ((count == 1)) {
      carouselNode.setAttribute("class", "carousel-item active");
    } else {
      carouselNode.setAttribute("class", "carousel-item");
    }

    var photoNode = document.createElement("img");
    photoNode.setAttribute("src", photo + "=w1920-h1080");

    photoNode.setAttribute("class", "d-block w-100");

    photoDOM.append(carouselNode);
    carouselNode.append(photoNode);

    console.log("Adding photo " + count);
  });

  console.log("Added " + photoArray.length + " photos");

}