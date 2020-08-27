import { useState, useRef, useEffect } from 'react';

export default function useTypingGame(START_TIME = 5) {
    const [text, setText] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(START_TIME);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const textareaRef = useRef(null);

    const handleChange = (e) => {
        const userInput = e.target.value;
        setText(userInput);
    };
    const countTypedWords = (text) => {
        let numWords;
        !text
            ? (numWords = 0)
            : (numWords = text
                  .trim()
                  .split(' ')
                  .filter((char) => char !== '').length);
        setWordCount(numWords);
    };

    const handleStartGame = () => {
        textareaRef.current.disabled = false;
        textareaRef.current.focus();
        setTimeRemaining(START_TIME);
        setText('');
        setIsTimeRunning(true);
        setWordCount(0);
    };

    const handleEndGame = () => {
        setIsTimeRunning(false);
        countTypedWords(text);
    };

    useEffect(() => {
        if (timeRemaining > 0 && isTimeRunning) {
            setTimeout(() => {
                setTimeRemaining((timeRemaining) => timeRemaining - 1);
            }, 1000);
        } else {
            handleEndGame();
        }
    }, [timeRemaining, isTimeRunning]);

    return [
        handleChange,
        text,
        isTimeRunning,
        textareaRef,
        timeRemaining,
        handleStartGame,
        wordCount,
    ];
}
