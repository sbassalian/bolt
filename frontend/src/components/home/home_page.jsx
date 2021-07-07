import React, {useContext} from 'react';
import VideoPlayer from '../videoplayer';
import Notifications from '../notifcations';

import {SocketContext} from '../../Context'
import './homepage.css'

const HomePage = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (

            <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center' }}>

                     {/* <h1 style={{  display: 'flex', justifyContent: 'center', color:"white", fontFamily:"sans-serif" }}>{call.name || 'Look at that beautiful face!'}</h1> */}

                     

                    {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <video style={{width:'0px', border:"1px solid black", borderRadius:"24px"} }playsInline muted ref={myVideo} autoPlay />  
                    </div> */}
            <span id="inst">Login, Copy your personal id and send it out to a friend, and Enjoy your call!</span>


            <img src="https://sbassalian.github.io/solomonbassalian.github.io/images/bolt2.gif" alt="" id="hello" />
     

            </div>
        );
}


export default HomePage;