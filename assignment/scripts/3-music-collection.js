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

console.log('Added album to collection:', addToCollection('Double Negative', 'Low', 2018));
console.log('Added album to collection:', addToCollection('Aquemini', 'Outkast', 1998));
console.log('Added album to collection:', addToCollection('Singularity', 'Jon Hopkins', 2018));
console.log('Added album to collection:', addToCollection('Fantasma', 'Cornelius', 1998));
console.log('Added album to collection:', addToCollection('ATLiens', 'Outkast', 1996));
console.log('Added album to collection:', addToCollection('Point', 'Cornelius', 2002));
