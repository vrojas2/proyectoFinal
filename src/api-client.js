const apiKey = '5cd0b8ccacc54963812d0343a8b04825';
const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;

export default function getMusicData() {
    console.log('api');
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }) 
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist => {
            return {
                id: artist.mbid,
                name: artist.name,
                image: artist.image[3]['#text']
            }
        }));
}



