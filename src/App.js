import React from 'react';
import useTypingGame from './hooks/useTypingGame';
import './App.css';

function App() {
    const [
        handleChange,
        text,
        isTimeRunning,
        textareaRef,
        timeRemaining,
        handleStartGame,
        wordCount,
    ] = useTypingGame(5);
    return (
        <main>
            <h1>How Fast Can You Type?</h1>
            <textarea
                onChange={handleChange}
                cols='30'
                rows='10'
                value={text}
                disabled={!isTimeRunning}
                ref={textareaRef}
            />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button disabled={isTimeRunning} onClick={handleStartGame}>
                Start Game
            </button>
            <hr />
            <h1>Word Count: {wordCount}</h1>
        </main>
    );
}

export default App;
