function ImageGalleryItem({image}) {
    return (
        <>
            <li>
                <img src={image.webformatURL} alt={image.id} />
            </li>
        </>
    )
}

export default ImageGalleryItem