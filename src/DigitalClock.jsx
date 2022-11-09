import {useEffect} from 'react';

export const DigitalClock = (props) => {
    const {setTime, time, currentDate} = props
    useEffect(() => {

        const intId = setInterval(() => {
            setTime((new Date().toLocaleTimeString('en-US', {hour12: false})))
        }, 1000)
        return () => {
            clearInterval(intId)
        }
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


