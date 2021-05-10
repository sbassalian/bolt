import React, { useState, useContext } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext } from '../Context';

class Helper extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
    }
}


const Functionality = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    
    console.log(children);


    return (
        <div>
            <form noValidate autoComplete="off">
                <span>Account Info</span>
                <input type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <CopyToClipboard text={me}>
                    <button>Copy your ID</button>
                </CopyToClipboard>
                <span>Make a Call</span>
                <input type="text" label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)}/>
                
                            {callAccepted && !callEnded ? (
                                <button onClick={leaveCall}>
                                    Hang Up
                                </button>
               
                            ) : (
                                 <button onClick={() => callUser(idToCall)}>
                                    Call
                                </button>
                            
                            )}
            </form>
            {children}
        </div>

       
    );
};

export default Functionality;