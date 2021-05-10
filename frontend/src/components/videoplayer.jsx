import React, { useContext } from 'react';

import { SocketContext } from '../Context';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


    return (
        <div>

            {stream && (
                <div>
                    <h1>{call.name || 'Look at that beautiful face!'}</h1>
                    <video playsInline muted ref={myVideo} autoPlay />
                </div>

            )}
            {callAccepted && !callEnded && (
                <div>

                    <h1>{call.name || 'Look at that beautiful face!'}</h1>

                    <video playsInline ref={userVideo} autoPlay />
                </div>

            )};
        </div>
    )
};

export default VideoPlayer;