import React from 'react';
import stylesClass from './styles.module.scss';

const InvitationPart = () => {
    return (
        <div className={stylesClass.invitationContainer}>
            <div style={{display: "flex", flexDirection: "column", gap: '20px',
                alignItems: "flex-start"}}>
                <div>
                    <input type={"checkbox"} checked={true}/>
                    <span>Sobol Alexandrina</span>
                </div>
                <div>
                    <input type={"checkbox"}/>
                    <span>Voi veni cu cineva</span>
                </div>
                <input placeholder={'Cu cine vii?'} className={stylesClass.inputInvitation}/>
                <div className={stylesClass.restrictiiAlimentare}>
                    <span>Restricții alimentare</span>
                    <input placeholder={'Ex: Vegetarian, fără lactoză'} className={stylesClass.inputInvitation}/>
                </div>
            </div>
            <button className={stylesClass.submitButton}>Submit</button>
        </div>
    );
};

export default InvitationPart;