
import React, { useContext } from 'react';


import { SocketContext } from '../Context';

const Notifications = (handle) => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);


    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    <span style={{ color: 'white', marginTop: 'auto', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', marginLeft: 'auto',  }}>{handle.handle} is calling :</span>
                    <button style={{ width: '300px', marginLeft: '30px', marginRight: 'auto', color: 'black', backgroundColor: 'dodgerblue', borderRadius: '12px', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '600', border: 'none', padding: '10px', cursor: 'pointer' }} onClick={answerCall}>
                        Answer Call
                    </button>
                </div>
            )}
        </>
    );
};

export default Notifications;