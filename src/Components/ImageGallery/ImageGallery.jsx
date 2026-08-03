import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

function ImageGallery({ images, onImagesClick }) {
    return (
        <ul>
            {images.map((image) => {
                return (
                    <ImageGalleryItem onImagesClick={onImagesClick} key={`${image.id}-${image.webformatURL}`} image={image} />)
            })}
        </ul>
    )
}

export default ImageGallery