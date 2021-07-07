import React, { useContext } from 'react';

import { SocketContext } from '../Context';

const VideoPlayer = (handle) => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, setMyVideo } = useContext(SocketContext);


    return (
        <div >

            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {stream && (
                <div style={{width:'50%', display:'flex', justifyContent:'center', flexDirection:'column'}}>
                        <span style={{ fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', color:'dodgerblue', width:'fit-content', marginLeft:'auto', marginRight:'auto'}}>{handle.handle || ''}</span>
                    <video playsInline muted ref={(video)=>(
                        setMyVideo(video)
                    )} 
                    autoPlay style={{width:'100%', border: "1px solid black", borderRadius: "24px", marginRight:'10px' }}/>
                </div>

            )}
            {callAccepted && !callEnded && (
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                        <span style={{
                            fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', color: 'firebrick', width: 'fit-content', marginLeft: 'auto', marginRight:'auto' }}>{'My Friend' || ''}</span>

                        <video playsInline ref={userVideo} autoPlay style={{ width: '100%', border: "1px solid black", borderRadius: "24px", marginLeft: '10px' }}/>
                </div>

            )};

             </div>
        </div>
    )
};

export default VideoPlayer;