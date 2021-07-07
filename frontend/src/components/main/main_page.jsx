import React from 'react';
import VideoPlayer from '../videoplayer';
import Notifications from '../notifcations';
import Functionality from '../Functionality';

class MainPage extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
    }
    render() {
        return (
            <div>
                <div style={{display:'flex', justifyContent:'center', marginTop:'20px', marginBottom:'20px'}}>
                    <span style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', width: 'fit-content', }}>Copy your personal id and send it out to a friend to chat!</span>
                </div>
                <Notifications handle={this.props.state.session.user.handle} />

                <VideoPlayer handle={this.props.state.session.user.handle} />
                <Functionality handle={this.props.state.session.user.handle}>
                    {/* <Notifications handle={this.props.state.session.user.handle}/> */}
                </Functionality>
            </div>

        );
    }
}

export default MainPage;