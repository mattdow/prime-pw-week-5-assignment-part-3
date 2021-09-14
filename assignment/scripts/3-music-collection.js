console.log('***** Music Collection *****')
let collection = [];
// establish empty array variable

function addToCollection(albumTitle, albumArtist, albumYearPublished, albumTracks) {
  let newAlbum = {
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
  // the full collection in that case and not go through the full function. To check
  // for an empty object, I Googled for a solution and decided to use the
  // Object.keys property, which should be an empty array if serachCriteria is
  // empty.

  if (searchCriteria === undefined || Object.keys(searchCriteria).length === 0) {
    console.log('Search was empty, returning full collection');
    return collection;
    }
  for (album of collection) { // looping through each album in the collection
    // Creating a nested conditional that checks for a match for artist and year if both are given
    // console.log(album.artist, album.yearPublished, 'vs', searchCriteria.artist, searchCriteria.year);
    if ((!searchCriteria.artist || // if nothing submitted for artist, this conditional won't require artist match
      (album.artist === searchCriteria.artist)) &&
      (!searchCriteria.year || // if nothing submitted for year, conditional won't require year match
      (album.yearPublished === searchCriteria.year))) {
        if (searchCriteria.trackName) { // verifying something is inputted for a trackName to check
          for (track of album.tracks) { // if artist and year match or are empty, check tracks
            if (searchCriteria.trackName === track.name) {
              resultsArray.push(album);
            }
          } // end of track loop
        } else resultsArray.push(album); // if there is no trackName given, the
        // album is added if any year and artist search terms that are given match
    } // end of year and artist criteria check
  } // end of loop through the albums in collection
  return resultsArray; // return the matches in the array
} // end of albumSearch function

// I'll test this function by calling the results of albumSearch in the showCollection function,
// since showCollection works for any array.

// Testing for three albums in the collection that have multiple items with that year or artists

console.log('2018 Jon Hopkins albums in collection (should show one titled Singularity):');
showCollection((albumSearch({artist: 'Jon Hopkins', year: 2018, trackName: 'Emerald Rush'})));

// Testing when the track name is not a match

console.log('2018 Jon Hopkins albums in collection (should show none b/c Jolene is not a track):');
showCollection((albumSearch({artist: 'Jon Hopkins', year: 2018, trackName: 'Jolene'})));

console.log('1998 Outkast albums in collection (should show one titled Aquemini):');
showCollection((albumSearch({artist: 'Outkast', year: 1998})));

console.log('Cornelius albums with "Mic Check" in collection (should show Fantasma):');
showCollection((albumSearch({artist: 'Cornelius', trackName: 'Mic Check'})));

// Testing for an album that would never be in my collection

console.log('1999 Crazy Town albums in collection (should show none):');
showCollection((albumSearch({artist: 'Crazy Town', year: 1999})));

// Testing for searches with one good search term, but one bad one

console.log('2016 Jon Hopkins albums in collection (should show none):');
showCollection((albumSearch({artist: 'Jon Hopkins', year: 2016})));

console.log('2018 Mitski albums in collection (should show none):');
showCollection((albumSearch({artist: 'Mitski', year: 1998})));

// Testing for searches with good terms but some terms blank

console.log('2018 albums in collection (should show Double Negative and Singularity):');
showCollection((albumSearch({year: 2018})));

console.log('Outkast albums in collection (should show Aquemini and ATLiens):');
showCollection((albumSearch({artist: 'Outkast'})));

console.log('Albums with the song "Fly" (Double Negative):');
showCollection((albumSearch({trackName: 'Fly'})));

console.log('Albums with the song "ATLiens" (ATLiens):');
showCollection((albumSearch({trackName: 'ATLiens'})));

// Testing if the album is right but the track name is wrong

console.log('Outkast Albums with the song "Fly" (none):');
showCollection((albumSearch({trackName: 'Fly', artist: 'Outkast'})));

console.log('Low 2018 albums, trackName empty (Double Negative):');
showCollection((albumSearch({artist: 'Low', year: 2018, trackName: ''})));

console.log('Low 2018 albums, trackName gibberish (None):');
showCollection((albumSearch({artist: 'Low', year: 2018, trackName: 'asdf'})));

// Testing for searches with nothing or an empty object.

console.log('Testing albumSearch with no criteria (should show the full collection):');
showCollection((albumSearch()));

console.log('Testing albumSearch with empty criteria (should show the full collection):');
showCollection((albumSearch({})));
