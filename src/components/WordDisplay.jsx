function WordDisplay({ word, guesses, isLoser }) {
    return (
        <div style={{ fontSize: '32px', marginBottom: '20px' }}>
            {word.split('').map((letter, index) => (
                <span key={index} style={{ marginRight: '10px' }}>
                    {guesses.includes(letter) || isLoser ? letter : '_'}
                </span>
            ))}
        </div>
    );
}

export default WordDisplay;
