function ImageGalleryItem({ image, onImagesClick }) {
    return (
        <>
            <li>
                <img onClick={() => onImagesClick(image.largeImageURL)} src={image.webformatURL} alt={image.tags} />            </li>
        </>
    )
}

export default ImageGalleryItem