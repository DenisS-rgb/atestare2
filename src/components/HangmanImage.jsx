function HangmanImage({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            style={{ width: '250px', marginBottom: '20px' }}
        />
    );
}

export default HangmanImage;
