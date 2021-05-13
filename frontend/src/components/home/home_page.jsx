import React, {useContext} from 'react';
import VideoPlayer from '../videoplayer';
import Notifications from '../notifcations';

import {SocketContext} from '../../Context'

const HomePage = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (

            <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center' }}>

                     {/* <h1 style={{  display: 'flex', justifyContent: 'center', color:"white", fontFamily:"sans-serif" }}>{call.name || 'Look at that beautiful face!'}</h1> */}

                     

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <video style={{width:'0px', border:"1px solid black", borderRadius:"24px"} }playsInline muted ref={myVideo} autoPlay />  
                    </div>


            </div>
        );
}


export default HomePage;