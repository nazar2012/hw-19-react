import { useState, useEffect, useCallback, useReducer } from 'react'
import './App.css'
import { fetchImages } from './api'
import SearchBar from './Components/Searchbar/Searchbar'
import Loader from './Components/Loader/Loader'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Button from './Components/Button/Button'
import Modal from './Components/Modal/Modal'

const initialState = {
  qwery: "",
  images: [],
  loading: false,
  page: 1
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_QWERY":
      return { ...state, qwery: action.payload }
    case "SET_LOADING":
      return { ...state, loading: action.payload }
    case "NEXT_PAGE":
      return { ...state, page: state.page + 1 }
    case "RESET_PAGE":
      return { ...state, page: 1 }
    default:
      return state
  }
}

function App() {
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [state, dispatch] = useReducer(reducer, initialState)

  const loadMore = useCallback(() => {
    // setPage(prevPage => prevPage + 1)
    dispatch({ type: "NEXT_PAGE" })
  }, [])

  const handleSearch = (newQwery) => {
    if (newQwery.trim() === state.qwery.trim()) return;
    dispatch({ type: "SET_QWERY", payload: newQwery })
    dispatch({ type: "RESET_PAGE" });
  }

  function openModal(imageUrl) {
    setSelectedImage(imageUrl)
  }

  function closeModal() {
    setSelectedImage(null)
  }

  useEffect(() => {
    if (!state.qwery) return;

    async function getImages() {
      try {
        dispatch({ type: "SET_LOADING", payload: true });

        const data = await fetchImages(state.qwery, state.page);

        setImages(prevImages =>
          state.page === 1 ? data : [...prevImages, ...data]
        );
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    }

    getImages();
  }, [state.qwery, state.page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {state.loading && <Loader />}
      <ImageGallery images={images} onImagesClick={openModal} />
      {images.length > 0 && !state.loading && <Button onClick={loadMore} />}
      {selectedImage && <Modal onClose={closeModal} image={selectedImage} />}
    </>
  )
}

export default App
