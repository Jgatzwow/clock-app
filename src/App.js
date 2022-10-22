import './App.css';
import {useEffect, useState} from 'react';

export const App = () => {
    const date = new Date()
    const currentDate = new Date().toDateString()
    const initTime = date.toLocaleTimeString('en-US', {hour12: false})
    const [time, setTime] = useState(initTime)

    useEffect(()=> {

        setInterval(()=> {
            setTime((new Date().toLocaleTimeString('en-US', {hour12: false})))
        }, 1000)

    }, [])

    return (

        <div className="clock__App">
                {time}
            <div>
                {currentDate}
            </div>
        </div>
    );
}


