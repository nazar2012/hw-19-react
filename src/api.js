const API_KEY = "54040917-f9e6420d7887ca7f24aa85fec"

export async function fetchImages(qwery, page = 1) {
    const URL = `https://pixabay.com/api/?q=${qwery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    const res = await fetch(URL)
    const data = await res.json()
    return data.hits
}