import React, { useEffect, useState } from "react";
import { countdown } from "../../helpers/getCountdown";
import "./countdown.css";
import UserRegistration from '../userRegistration/UserRegistration'



export default function Countdown() {
    const [daysLeft, setDaysLeft] = useState('00');
    const [hoursLeft, setHoursLeft] = useState('00');
    const [minsLeft, setMinsLeft] = useState('00');
    const [secsLeft, setSecsLeft] = useState('00');
    const [hasEnded, setHasEnded] = useState();
    const [buttonState, setButtonState] = useState('false');
    
    //Set the final day here
    const targetDate = '09/02/2022'


    useEffect(() => {
        let getCountdown = new countdown(targetDate);
        setHasEnded(getCountdown.hasEnded());

        const interval = setInterval(() => {

            let getCountdown = new countdown(targetDate);
            setDaysLeft(getCountdown.days());
            setHoursLeft(getCountdown.hours());
            setMinsLeft(getCountdown.mins());
            setSecsLeft(getCountdown.secs());

        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, [hasEnded]);

    const handleSubscribeButton = () => {
        return buttonState ? setButtonState(!buttonState) : setButtonState(!buttonState)
    }
    const handleExitButton = () => {
        return buttonState ? 'countdown-close-button-active' : 'countdown-close-button'
    }

    return (
        <>
            <div className="countdown-container">
                <p id="title">READY TO LAUNCH IN...</p>
                <div className="countdown-inner-container">
                    <div className="countdown-items">Dias <p className="countdown-numbers">{daysLeft}</p> </div>
                    <div className="countdown-items">Horas <p className="countdown-numbers">{hoursLeft}</p> </div>
                    <div className="countdown-items">Minutos <p className="countdown-numbers">{minsLeft}</p> </div>
                    <div className="countdown-items">Segundos <p className="countdown-numbers">{secsLeft}</p> </div>
                </div>
                <p className='countdown-subscribe'>Inscreva-se para saber mais sobre o lançamento</p>
                <button onClick={() => { handleSubscribeButton() }} className='countdown-button'>Inscreva-se</button>
            </div>
            <UserRegistration buttonStates={buttonState} />
            <button onClick={() => { handleSubscribeButton() }} className={handleExitButton()}>✖</button>
        </>
    );
}
