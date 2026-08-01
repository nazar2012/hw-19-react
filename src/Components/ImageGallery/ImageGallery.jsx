import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

function ImageGallery({ images }) {
    return (
        <ul>
            {images.map((image) => {
                return (
                    <ImageGalleryItem key={image.id} image={image} />
                )
            })}
        </ul>
    )
}

export default ImageGallery