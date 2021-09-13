console.log('***** Music Collection *****')
let collection = [];
// establish empty array variable

function addToCollection(albumTitle, albumArtist, albumYearPublished) {
  newAlbum = {
    title: albumTitle,
    artist: albumArtist,
    yearPublished: albumYearPublished
// assign the variables given to the appropriate object properties
  }
  collection.push(newAlbum);
  // adding the new object to the collection array
  return newAlbum;
}
// adding some albums
console.log('Added album to collection:', addToCollection('Double Negative', 'Low', 2018));
console.log('Added album to collection:', addToCollection('Aquemini', 'Outkast', 1998));
console.log('Added album to collection:', addToCollection('Singularity', 'Jon Hopkins', 2018));
console.log('Added album to collection:', addToCollection('Fantasma', 'Cornelius', 1998));
console.log('Added album to collection:', addToCollection('ATLiens', 'Outkast', 1996));
console.log('Added album to collection:', addToCollection('Point', 'Cornelius', 2002));

function showCollection(array) {
  // use the length property of the array to print the number of albums in the collection
  console.log(`Number of albums in collection is ${array.length}:`);
  for (album of array) {
    // calling each of the array properties in a template literal
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  } // end of for loop
} // end of showCollection function

showCollection(collection);

function findByArtist(artist) {
  let resultsArray = []
  for (album of collection) { // looping through the albums in collection
    if (artist === album.artist) { // conditional checking if the query artist matches the album artist
      resultsArray.push(album); // if there's a match, add the matching album to the results array
    } // end of if statement
  } // end of loop through the albums in collection
  return resultsArray; // return the results, which should still be empty if there are no matches
}
// I'll test this function by calling the results of findByArtist in the showCollection function,
// since showCollection works for any array.

console.log('Jon Hopkins albums in collection (should show one titled Singularity):');
showCollection(findByArtist('Jon Hopkins'));

console.log('Outkast albums in collection (should show ATLiens and Aquemini):');
showCollection(findByArtist('Outkast'));

console.log('Cornelius albums in collection (should show Point and Fantasma):');
showCollection(findByArtist('Cornelius'));

console.log('Crazy Town albums in collection (should show none):');
showCollection(findByArtist('Crazy Town'));
