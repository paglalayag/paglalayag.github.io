let podcasts = JSON.parse(document.getElementById('podcasts').firstChild.data)

document.addEventListener('DOMContentLoaded', () => {
  for (x = 0; x < podcasts.length; x++) {
    var s = podcasts[x];
    var number = parseInt(x) + 1;
    var artist = document.createTextNode(number + ": " + s.title);
    var track_name = document.createTextNode(s.teaser);
    
    var listItem = document.createElement('div');
    var artist_text = document.createElement('h3');
    var track_text = document.createElement('p');
    var episode_link = document.createElement('a');


    artist_text.appendChild(artist);
    track_text.appendChild(track_name);
    
    listItem.appendChild(artist_text);
    listItem.appendChild(track_text);
    
    listItem.classList.add('item');
    listItem.dataset.index = x;
    
    document.getElementById('list').appendChild(listItem);
  }
  displayTrack(0);
  
  var listItems = document.querySelectorAll('.item');
  listItems.forEach(el => {
    el.onclick = () => {
      displayTrack(el.dataset.index);
    };
  });
  
  function displayTrack(x) {
    var active = document.querySelector('.is-active');
    if (active) {
      active.classList.remove('is-active'); 
    }
    var el = document.getElementById('list').children[x];
    el.classList.add('is-active');
    var s = podcasts[x],
        artist = s.title,
        track = s.teaser,
        audio = s.audio,
        img = s.image,
        number = parseInt(x) + 1;
    document.getElementById('title').innerText = number + ": " + artist;
    document.getElementById('song_title').innerHTML = '<a href="' + s.path + '">Episode Page</a>';
    var albumArt = document.getElementById('art');
    albumArt.src = img;
    albumArt.alt = artist + " " + track;
    document.getElementById('audio').src = audio;
  }
})