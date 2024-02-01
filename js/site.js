console.log('js loaded');

// elements
const currentImage = document.getElementById('currentImage');
const quoteOfTheDay = document.getElementById('quoteOTD');


//Get the Pictures

let images = [
    './images/media1.jpg',
    './images/media2.jpg',
    './images/media3.jpg',
    './images/pic1.jpg',];
let currentImageId = 0;

currentImage.src = images[currentImageId];


function updateImage(){
    currentImageId++;

    if(currentImageId >= images.length){
        currentImageId = 0;
    }

    console.log('changing image', currentImageId);
    currentImage.src = images[currentImageId];
}

setInterval(updateImage, 2000);

//Get the Quote

let quote = null;
let apiURL = "https://type.fit/api/quotes";
loadQuote(apiURL);

function loadQuote(apiURL){
    fetch(apiURL)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    quote = data[0];
                    let quote1 = quote.text;
                    let author = quote.author;
                    quoteOfTheDay.innerHTML =  
                    `
                    <div>
                    <p>
                        <label>Quote: </label>${quote1}
                        </br>
                        <label>Author: </label>${author}
                    </p>
                </div>
                    `
                    // processQuote(quote);
                });
}
