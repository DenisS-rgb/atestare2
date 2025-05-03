function Keyboard({ letters, guesses, isWinner, isLoser, onClick }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {letters.map((letter) => (
                <button
                    key={letter}
                    onClick={() => onClick(letter)}
                    disabled={guesses.includes(letter) || isWinner || isLoser}
                    style={{
                        padding: '10px 16px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: guesses.includes(letter) ? 'gray' : 'black',
                        color: guesses.includes(letter) ? 'black' : 'white',
                    }}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}

export default Keyboard;
