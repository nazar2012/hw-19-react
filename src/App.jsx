import { useState, useEffect, use } from 'react'
import './App.css'
import { fetchImages } from './api'
import SearchBar from './Components/Searchbar/Searchbar'
import Loader from './Components/Loader/Loader'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Button from './Components/Button/Button'

function App() {
  const [qwery, setQwery] = useState("")
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  function loadMore() {
    setPage((prevPage) => prevPage + 1)
  }

  const handleSearch = (newQwery) => {
    if (newQwery === qwery) return
    setQwery(newQwery)
    setPage(1)
  }

  useEffect(() => {
    if (!qwery) return;

    setLoading(true);

    fetchImages(qwery, page)
      .then((data) => {
        setImages((prevImages) =>
          page === 1 ? data : [...prevImages, ...data]
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [qwery, page]);


  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      <ImageGallery images={images} />
      {images.length > 0 && <Button onClick={loadMore} />}
    </>
  )
}

export default App
