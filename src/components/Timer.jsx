import React, { useState, useEffect } from 'react';

export const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = new Date(targetDate) - now;

            if (difference <= 0) {
                clearInterval(interval);
                setFinished(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const timeUnits = [
        { label: "Zile", value: timeLeft.days },
        { label: "Ore", value: timeLeft.hours },
        { label: "Minute", value: timeLeft.minutes },
        { label: "Secunde", value: timeLeft.seconds },
    ];

    return (
        <div style={{ backgroundColor: "rgb(250, 250, 240)", padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', marginBottom: '20px' }}>
                Nu putem să ne bucurăm fără voi! Haideți să facem împreună o zi de neuitat!
            </div>

            <div>
                {!finished && <span style={{ fontSize: '22px' }}>Ne vedem în:</span>}

                {!finished ? <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontFamily: 'Cormorant Garamond' }}>
                    {timeUnits.map((unit, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
                            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>{unit.value}</span>
                            <span>{unit.label}</span>
                        </div>
                    ))}
                </div> :
                    <h2 style={{ textAlign: "center", marginTop: 20 }}>
                        🎉 Bine ați venit! 🎉
                    </h2>
                }
            </div>
        </div>
    );
};

export default Countdown;
