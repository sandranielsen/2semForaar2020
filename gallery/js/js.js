/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Stardate 235678.89: JavaScript from js/js.js is up and running.');

// paste your javascript here 
// the image names should be real image names
var myGallery = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg"

];

//create the html
for (i = 0; i < myGallery.length; i++) {
    // note the shorthand code below
    exhibition.innerHTML += '<img src="images/' +
        myGallery[i] +
        '"alt="from my galleries">';
}
// let the loop create the HTML for your gallery
