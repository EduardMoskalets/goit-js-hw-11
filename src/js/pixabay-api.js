export function getPhotos(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '44405907-01ac5a46b548f68b2a274235a'

    const params = {
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: API_KEY,   
    }

    const options = new URLSearchParams(params);
    return fetch(`${BASE_URL}?${options}`).then(res => {
        if (!res.ok) {
            throw new Error('Error!');
        }
        return res.json();
    });
}