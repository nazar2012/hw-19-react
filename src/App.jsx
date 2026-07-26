import { useState, useEffect, use } from 'react'
import './App.css'
import { fetchImages } from './api'
import SearchBar from './Components/Searchbar/Searchbar'
import ImageGallery from './Components/ImageGallery/ImageGallery'

function App() {
  const [qwery, setQwery] = useState("")
  const [images, setImages] = useState([])

  useEffect(() => {
    if (qwery === "") {
      return
    }

    fetchImages(qwery).then((data) => {
      setImages(data)
    })
  }, [qwery])

  const handleSearch = (newQwery) => {
    setQwery(newQwery)
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images}/>
    </>
  )
}

export default App
