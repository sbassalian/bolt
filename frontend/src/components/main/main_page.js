import React from 'react';
import VideoPlayer from '../videoplayer';
import Notifications from '../notifcations';
import Functionality from '../Functionality';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <VideoPlayer />
                <Functionality>
                    <Notifications/>
                </Functionality>
            </div>

        );
    }
}

export default MainPage;