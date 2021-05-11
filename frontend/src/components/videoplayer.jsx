import React, { useContext } from 'react';

import { SocketContext } from '../Context';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


    return (
        <div >

            <h1>Copy your personal id and send it out to a friend to chat!</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

           
            {stream && (
                <div style={{width:'50%'}}>
                        <span style={{ fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', color:'white', width:'fit-content', marginLeft:'auto', marginRight:'auto'}}>{call.name || ''}</span>
                    <video playsInline muted ref={myVideo} autoPlay style={{width:'100%', border: "1px solid black", borderRadius: "24px", marginRight:'10px' }}/>
                </div>

            )}
            {callAccepted && !callEnded && (
                <div style= {{width:'50%'}}>

                        <span style={{
                            fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', color: 'white', width: 'fit-content', marginLeft: 'auto', marginRight:'auto' }}>{call.name || ''}</span>

                        <video playsInline ref={userVideo} autoPlay style={{ width: '100%', border: "1px solid black", borderRadius: "24px", marginLeft: '10px' }}/>
                </div>

            )};

             </div>
        </div>
    )
};

export default VideoPlayer;