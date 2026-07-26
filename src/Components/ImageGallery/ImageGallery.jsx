function ImageGallery ({images}) {
    return (
        <ul>
            {images.map((image) => {
                return(
                    <li key={image.id}>
                        <img src={image.webformatURL} alt={image.id} />
                    </li>
                )
            })}
        </ul>
    )
}

export default ImageGallery