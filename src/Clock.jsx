import React from 'react';
import {DigitalClock} from './DigitalClock';
import {AnalogClock} from './AnalogClock';

export const Clock = (props) => {
const {currentDate,mode,time,date,setTime,setDate} = props
    if (mode === 'digital') return <DigitalClock
        currentDate={currentDate}
        time={time}
        setTime={setTime}/>
    return <AnalogClock date={date} setDate={setDate}/>
};

