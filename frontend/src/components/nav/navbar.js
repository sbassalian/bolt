import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);

    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    forward(field){
        this.props.history.push(field)
    }



    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    {/* <button onClick={() => push('home')}>Home</button> */}

                    {/* <Link to={'/home'}>All Homes</Link> */}
                   
                    <button onClick={this.logoutUser} style={{ background: "none", border: "1.5px solid black", borderRadius: "12px", fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '500', cursor: "pointer", padding: '5px' }}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={() => this.forward('signup')} style={{ background: "none", border: "1.5px solid black", borderRadius: "12px", fontFamily:'sans-serif', padding:'5px', fontSize:'18px', fontWeight:'500', cursor: "pointer", marginRight:'10px' }}>Signup</button>
                    <button onClick={() => this.forward('login')} style={{ background: "none", border: "1.5px solid black", borderRadius:"12px", fontFamily:'sans-serif', fontSize:'18px', fontWeight:'500', cursor: "pointer", padding:'5px' }}>Login</button>

                    {/* <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/home'}>All Homes</Link>
                    <Link to={'/'}>MAIN</Link> */}
                </div>
            );
        }
    }

    render() {
        return (
            <div style={{backgroundColor: "rgb(74,199,118)", display: 'flex', borderRadius:"24px", marginTop:"20px", alignItems:"center", height:'75px', width:'1000px', marginLeft:'auto', marginRight:'auto'}}>
                <button onClick={()=>this.forward('/home')}style={{display: 'flex', width:"80", marginLeft:"20px",alignItems:"center", background:"none", border:"none", cursor:"pointer"}}>
                    <span style={{ fontFamily: 'sans-serif',  fontSize: '24px', fontWeight: '500' }}>Bolt</span>
                    <img src="https://lh3.googleusercontent.com/2HZKv8L5B5pUD2MqjAdcmaPH6RVTH-vLd_sS109YhO2o_MQiL5hsQHZ5oFmJeVuNHYe7CNZPSCOitTP7iteo6-yGZlUGGJHQ5kWWALDfUKcochVoALX-0gjFfxLUo02LDyLIhEYK=w2400?source=screenshot.guru" style={{ height:"50px", width:"50px"}}></img>
                </button>

                <div style={{ display: 'flex', flex:"1", justifyContent:'space-evenly', alignItems:'center'}}>
                    <a href="https://www.linkedin.com/in/solomon-bassalian-software-engineer/" target="_blank" style={{ textDecoration: 'none', backgroundColor:'none', color:'black'}}>
                        <span style={{ fontFamily: 'sans-serif',  fontSize: '16px', fontWeight: '500' }}>Linkedin</span>
                    </a>
                    <a href="https://angel.co/u/solomon-bassalian" target="_blank" style={{ textDecoration: 'none', backgroundColor: 'none', color: 'black' }}>
                        <span style={{ fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '500' }}>AngelList</span>
                    </a>
                    <a href="https://github.com/sbassalian" target="_blank" style={{ textDecoration: 'none', backgroundColor: 'none', color: 'black' }}>
                        <span style={{ fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '500' }}>Github</span>
                    </a>
            
                </div>

                <div style={{ display: 'flex', width:"20%", justifyContent: 'center' }}>
                { this.getLinks()}
                </div>
            </div>
        );
    }
}

export default withRouter(NavBar);