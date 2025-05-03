import React, { useState } from 'react';
import { words } from '../constants/words';
import { stages } from '../constants/stages';
import { letters } from '../constants/letters';
import '../index.css';

import WordDisplay from './WordDisplay';
import Keyboard from './Keyboard';
import HangmanImage from './HangmanImage';

function Hangman() {
    const [word, setWord] = useState(() =>
        words[Math.floor(Math.random() * words.length)].toUpperCase()
    );
    const [guesses, setGuesses] = useState([]);

    const incorrect = guesses.filter((letter) => !word.includes(letter));
    const isLoser = incorrect.length >= stages.length - 1;
    const isWinner = word.split('').every((letter) => guesses.includes(letter));

    const handleClick = (letter) => {
        if (guesses.includes(letter) || isWinner || isLoser) return;
        setGuesses((prev) => [...prev, letter]);
    };

    const restartGame = () => {
        setWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
        setGuesses([]);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <HangmanImage src={stages[incorrect.length]} alt={`Stage ${incorrect.length}`} />
            <WordDisplay word={word} guesses={guesses} isLoser={isLoser} />
            <Keyboard
                letters={letters}
                guesses={guesses}
                isWinner={isWinner}
                isLoser={isLoser}
                onClick={handleClick}
            />
            {(isWinner || isLoser) && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{isWinner ? 'Ai câștigat!' : `Ai pierdut!`}</h2>
                    <button onClick={restartGame} style={{ marginTop: '10px', padding: '10px 20px' }}>
                        Joacă din nou
                    </button>
                </div>
            )}
        </div>
    );
}

export default Hangman;
