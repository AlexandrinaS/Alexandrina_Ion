import React from 'react';
import { GiPositionMarker } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import stylesClass from './styles.module.scss';

const Location = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: "rgb(236, 236, 216)", paddingTop: "20px" }}>
            <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', paddingLeft: '5px', paddingRight: '5px' }}>
                Vă invităm să ne fiți alături, să râdem, să dansăm și să ne bucurăm împreună! Ziua va fi cu adevărat specială doar dacă sunteți și voi alături de noi.               </span>

            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', display: 'flex', flexDirection: 'column', fontWeight: 500 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}> <MdDateRange /> <span>Data: 10 mai 2026 </span> </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}> <IoMdTime /> <span>Ora: 16:00</span> </div>
                <div style={{ display: "flex", gap: '5px', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <GiPositionMarker /> <span> Petrecerea: Italia, Bolzano, Tenuta Larcherhof</span>
                    </div>

                    {/* Container hartă responsive */}
                    <div style={{
                        position: "relative",
                        width: "100%",      // 100% din containerul părinte
                        maxWidth: "400px",  // dimensiune maximă pe desktop
                        height: "0",
                        paddingBottom: "56.25%", // 16:9 ratio
                        marginTop: "10px"
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.595728034778!2d11.380315474875417!3d46.49631696398773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47829e05eb5bfc6f%3A0xc370661099f1bbb1!2sTenuta%20Larcherhof!5e0!3m2!1sro!2sit!4v1769801660035!5m2!1sro!2sit"
                            style={{
                                border: 0,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                borderRadius: "12px"
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        <a
                            href="https://maps.app.goo.gl/43ymtuNXNjrnUq3G8"
                            target="_blank"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                textIndent: "-9999px",
                                display: "block",
                                cursor: "pointer",
                                zIndex: 10,
                            }}
                        >
                            Vezi direcții Google Maps
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Location;
