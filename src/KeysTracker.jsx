import React, {useEffect, useState} from 'react';

export const KeysTracker = () => {
    const [text, setText] = useState('')
    console.log('component rendered with' + text)
/*
    useEffect(() => {
        const handler = (e) => {
            console.log('effect occurred, key:', e.key)
            setText((prevState) => prevState + e.key)
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            console.log('cleared sideEffect')
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])*/
    return (
        <div>
            typed: {text}
        </div>
    );
};

