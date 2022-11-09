import styles from './AnalogClock.module.css'
import {useEffect} from 'react';

export const AnalogClock = (props) => {
    const {date,setDate} = props

    useEffect(() => {

        const intId = setInterval(() => {
            setDate((new Date()))
        }, 1000)
        return () => {
            clearInterval(intId)
        }
    }, [])

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <div className={styles.clock}>
            <div className={styles.analog__clock}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
            </div>
        </div>
    );
}


