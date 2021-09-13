console.log('***** Music Collection *****')
let collection = [];
// establish empty array variable

function addToCollection(albumTitle, albumArtist, albumYearPublished, albumTracks) {
  newAlbum = {
    title: albumTitle,
    artist: albumArtist,
    yearPublished: albumYearPublished,
    tracks: albumTracks
// assign the variables given to the appropriate object properties
};
  collection.push(newAlbum);
  // adding the new object to the collection array
  return newAlbum;
}
// adding some albums
console.log('Added album to collection:', addToCollection('Double Negative', 'Low', 2018,
[{name: 'Quorum', duration: '3:42'}, {name: 'Fly', duration: '5:48'},
{name: 'Dancing and Blood', duration: '6:22'}]));
console.log('Added album to collection:', addToCollection('Aquemini', 'Outkast', 1998,
[{name: 'Hold On, Be Strong', duration: '1:12'}, {name:'Return of the G', duration: '4:49'},
{name: 'Rosa Parks', duration: '5:24'}]));
console.log('Added album to collection:', addToCollection('Singularity', 'Jon Hopkins', 2018,
[{name: 'Singularity', duration: '6:29'}, {name: 'Emerald Rush', duration: '5:37'},
{name: 'Neon Pattern Drum', duration: '6:07'}]));
console.log('Added album to collection:', addToCollection('Fantasma', 'Cornelius', 1998,
[{name: 'Mic Check', duration: '3:01'}, {name: 'The Micro...', duration: '3:37'},
{name: 'New Music Machine', duration: '3:53'}]));
console.log('Added album to collection:', addToCollection('ATLiens', 'Outkast', 1996,
[{name: 'You May Die', duration: '1:05'}, {name: 'Two Dope Boyz', duration: '2:46'},
{name: 'ATLiens', duration: '3:50'}]));
console.log('Added album to collection:', addToCollection('Point', 'Cornelius', 2002,
[{name: 'Bug', duration: '0:40'}, {name: 'Point of View Point', duration: '3:56'},
{name: 'Smoke', duration: '5:50'}]));

function showCollection(array) {
  // use the length property of the array to print the number of albums in the collection
  console.log(`Number of albums in collection is ${array.length}:`);
  for (album of array) {
    // calling each of the array properties in a template literal
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:`);
    // create another loop for all of the album tracks
    for (let i = 0; i < album.tracks.length; i++) {
      console.log(`${i+1}. NAME: ${album.tracks[i].name} DURATION: ${album.tracks[i].duration}`);
    } // end of loop through tracks
  } // end of loop through albums
} // end of showCollection function

showCollection(collection);

// Creating findByArtist
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

// Creating albumSearch functions

function albumSearch(searchCriteria) {
  // console.log('In albumSearch');
  let resultsArray = [];
  // First checking to see if searchCriteria is empty, because we need to return
  // the full collection in that case and not go through the function. To check
  // for an empty object, I Googled for a solution and decided to use the
  // Object.keys property, which should be an empty array if serachCriteria is
  // empty.

  if (searchCriteria === undefined || Object.keys(searchCriteria).length === 0) {
    console.log('Search was empty, returning full collection');
    return collection;
    }
  for (album of collection) { // looping through each album in the collection
    // creating a conditional that checks for a match between both artist and year
    // properties for searchCriteria and collection objects
    // console.log(album.artist, album.yearPublished, 'vs', searchCriteria.artist, searchCriteria.year);
    if (album.artist === searchCriteria.artist &&
    album.yearPublished === searchCriteria.year) {
      resultsArray.push(album);
    } // end of criteria check
  } // end of loop through the albums in collection
  return resultsArray; // return the matches in the array
} // end of albumSearch functions

// I'll test this function by calling the results of albumSearch in the showCollection function,
// since showCollection works for any array.

// Testing for two albums in the collection that have multiple items with that year or artists

console.log('2018 Jon Hopkins albums in collection (should show one titled Singularity):');
showCollection((albumSearch({artist: 'Jon Hopkins', year: 2018})));

console.log('1998 Outkast albums in collection (should show one titled Aquemini):');
showCollection((albumSearch({artist: 'Outkast', year: 1998})));

console.log('1998 Cornelius albums in collection (should show one titled Fantasma):');
showCollection((albumSearch({artist: 'Cornelius', year: 1998})));

// Testing for an album that would never be in my collection

console.log('1999 Crazy Town albums in collection (should show none):');
showCollection((albumSearch({artist: 'Crazy Town', year: 1999})));

// Testing for searches that match only one searchCriteria

console.log('2016 Jon Hopkins albums in collection (should show none):');
showCollection((albumSearch({artist: 'Jon Hopkins', year: 2016})));

console.log('2018 Mitski albums in collection (should show none):');
showCollection((albumSearch({artist: 'Mitski', year: 1998})));

// Testing for searches with nothing or an empty object.

console.log('Testing albumSearch with no criteria (should show the full collection):');
showCollection((albumSearch()));

console.log('Testing albumSearch with empty criteria (should show the full collection):');
showCollection((albumSearch({})));
