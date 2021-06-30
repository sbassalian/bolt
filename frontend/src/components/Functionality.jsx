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
    
  


    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <span style={{ color: 'white', marginTop: 'auto', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', marginLeft: 'auto', marginRight: 'auto', marginTop:'10px' }} >Make a Call</span>

            <form noValidate autoComplete="off" style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                {/* <span>Account Info</span>
                <input type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} /> */}


                

                <input style={{ marginRight: '10px', width: '200px', backgroundColor: 'white', color: 'black', borderRadius: '12px', justifyContent: 'center', border: 'none', padding: '7px' }} type="text" label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} placeholder="Enter friend's ID"/>
                
                            {callAccepted && !callEnded ? (
                    <button style={{ marginLeft: '10px', width: '200px',  color: 'black', backgroundColor: 'rgb(74,199,118)', borderRadius: '12px',  fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '600', border: 'none', padding: '10px', cursor: 'pointer' }} onClick={leaveCall}>
                                    Hang Up
                                </button>
               
                            ) : (
                        <button style={{ marginLeft: '10px', width: '200px',  color: 'black', backgroundColor: 'rgb(74,199,118)', borderRadius: '12px', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '600', border: 'none', padding: '10px', cursor: 'pointer' }} onClick={(e) => {
                            e.preventDefault();

                            callUser(idToCall)}}>
                                    Call
                                </button>
                            
                            )}
            </form>
                <CopyToClipboard text={me}>
                    <button style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', color: 'black', backgroundColor: 'rgb(74,199,118)', borderRadius: '12px', marginTop: '15px', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '600', border: 'none', padding: '10px', cursor: 'pointer' }}>Copy your ID</button>
                </CopyToClipboard>
            {children}
        </div>

       
    );
};

export default Functionality;