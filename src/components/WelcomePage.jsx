import React from 'react';
import wedding_img from '../assets/wedding_2.jpg';
import stylesClass from './styles.module.scss';

const WelcomePage = () => {
    return (
        <div className={stylesClass.welcomePageContainer}>
            <img src={wedding_img} alt='img' style={{ height: '100vh', position: "absolute" }} />
            <div style={{
                position: 'relative', color: "white",
                lineHeight: 1,
                whiteSpace: 'normal',
                wordBreak: 'normal',
                display: "flex",
                flexDirection: "column",
                gap: '10px',
                marginTop: '30px'
            }}>
                <div style={{
                    top: 0, left: 0, fontSize: '55px'
                }}>
                    <p style={{ margin: 0 }}>Ion & Alexandrina</p>
                </div>
                <span style={{ fontSize: '30px' }}>10-mai-2026</span>
            </div>

        </div>
    );
};

export default WelcomePage;