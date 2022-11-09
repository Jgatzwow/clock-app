import './App.css';
import {Clock} from './Clock';
import {useState} from 'react';
import {KeysTracker} from './KeysTracker';

export const App = () => {
    const date = new Date()
    const currentDate = new Date().toDateString()
    const initTime = date.toLocaleTimeString('en-US', {hour12: false})
    const [time, setTime] = useState(initTime)
    const [mode, setMode] = useState('analog')
    const [dateAn, setDateAn] = useState(new Date())

    const setMOdeHandler = (e) => {
        setMode(e.currentTarget.value)
    }

    return <div>
        <select onChange={setMOdeHandler} className={'select'}>
            <option value="analog">analog</option>
            <option value="digital">digital</option>
        </select>
        <Clock
            mode={mode}
            currentDate={currentDate}
            time={time}
            date={dateAn}
            setDate={setDateAn}
            setTime={setTime}
            setmoDe={setMode}
        />
        <KeysTracker/>
    </div>
}


