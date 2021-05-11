
import React from 'react';
import { withRouter } from 'react-router-dom';
import {SocketContext} from '../../Context';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.currentUser === true) {
    //         this.props.history.push('/');
    //     }

    //     // Set or clear errors
    //     this.setState({ errors: nextProps.errors })
    // }

    // Handle field updates (called in the render method)
    update(field) {
        console.log(this.state);
        
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    demoLogin() {
        

        let user = {
            email: 'richbass@gmail.com',
            password: 'password'
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        
        return (
            <div>
                <div style={{ marginRight: 'auto', marginTop: '100px', marginLeft: 'auto', width: '650px', height: '395px', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '500', borderRadius: '24px', backgroundColor: "rgb(74,199,118)" }}>
                    <form onSubmit={this.handleSubmit} style={{margin:'auto'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <span style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white', marginTop: '40px', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600' }}>Email</span>

                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                   
                                style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', color: 'white', borderRadius: '12px', marginTop: '20px', border: 'none', padding: '5px', fontFamily:'sans-serif'}}
                                />
                            <span style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white', marginTop: 'auto', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', marginTop: '20px' }}>Password</span>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                              
                                style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', color: 'white', borderRadius: '12px', marginTop: '20px', justifyContent: 'center', marginTop: '20px', border: 'none', padding: '5px'  }}
                                />
                            
                            <button onClick={this.demoLogin} style={{ width: '35%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', color: 'rgb(74,199,118)', borderRadius: '12px', marginTop: '40px', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '600', border: 'none', padding: '5px', cursor: 'pointer'  }}>
                                Demo User Login
                            </button>
              
                            <input type="submit" value="Submit" style={{ width: '25%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', color: 'white', borderRadius: '12px', marginBottom: '40px', marginTop: '40px', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '600', border: 'none', padding: '5px', cursor:'pointer'  }}/>
                       
                            {/* {this.renderErrors()} */}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);

        //     <h1 className="formtype">{this.props.formType}</h1>
        //         <form className="login-form" onSubmit={this.handleSubmit}>
        //             <div className="form-header">
        //                 <button className="x-icon" onClick={this.props.closeModal}>
        //                     <img  src={window.x} alt="" />
        //                 </button>
        //             </div>

        //             <div className="rend-errors">
        //                 <div className="rend-errors-2">

        //                 {this.renderErrors()}
        //                 </div>
        //             </div>
                    

        //             <div className="no-shot-this-works">
        //                 <div className="form-border">
        //                     <div className="data" id="fix">
        //                         <input type="text"
        //                             value={this.state.email}
        //                             onChange={this.update('email')}
        //                             className="login-input"
        //                             placeholder="Email"
        //                         />
        //                         {/* 
        //                         <label className="form-label">Email:
        //                         </label> */}

        //                     </div>

        //                     <div className="data">

        //                         <input type="password"
        //                             value={this.state.password}
        //                             onChange={this.update('password')}
        //                             className="login-input"
        //                             placeholder="Password"
        //                         />

        //                         {/* <label className="form-label">Password:
        //                         </label> */}
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="modal-button-continue">
        //                 <button >Continue</button>
        //             </div>

        //             <div className="or-line">
        //             </div>

        //             <div className="or">
        //                 <span>or</span>
        //             </div>
        //                 {/* need to make a link to do something --> Sign up!*/}
                   
        //             {/* </div> */}

        //         </form>

        //         <div className="continue-with">
        //             <div className="continue-with-2">

        //                 <div className="try-this">
        //                     <a href="https://www.linkedin.com/in/solomon-bassalian-ba3662174/">
        //                         <button>
        //                         <div className="plz">
        //                             {<img className="continue-with-icons" src={window.linkedin} alt="" />}
        //                             Continue to my LinkedIn
        //                         </div>
        //                         </button>
        //                     </a>
        //                 </div>

        //                     <div className="try-this">
        //                 <a href="https://github.com/sbassalian">
        //                          <button>
        //                              <div className="plz">

        //                              {<img className="continue-with-icons" src={window.github} alt="" />}Continue to my Github
        //                              </div>
        //                         </button>
        //                 </a>
        //                     </div>



        //                     <div className="try-this">
        //                         <a href="https://www.google.com/">
        //                         <button>
        //                             <div className="plz">

        //                                 {<img className="continue-with-icons" src={window.googleimg} alt="" />}
                                        
        //                                 {<span>Continue with Google</span>}
        //                                 {/* Continue with Google  */}
        //                             </div>
        //                         </button>   
        //                         </a>

        //                     </div>


        //                 {/* <div className="try-this">
        //                     <a href="https://www.facebook.com/">
        //                             <button>
        //                                 <div className="plz">
        //                                     {<img className="continue-with-icons" src={window.facebook} alt="" />}
        //                                     Continue with Facebook
        //                                 </div>
        //                             </button>
        //                     </a>
        //                 </div> */}

        //                 <div className="try-this">
        //                     {/* <a href="https://www.facebook.com/"> */}
        //                     <button onClick={this.handleDemoSubmit}>
        //                                 <div className="plz">
        //                                     {<img className="continue-with-icons" src={window.aA} alt="" />}
        //                                     Continue with Demo User
        //                                 </div>
        //                     </button>
        //                     {/* </a> */}
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="dont-have-acct">
        //             <span className="dhac">Dont have an account?</span>
        //             <button onClick={() => this.props.closeModal()} onClick={() => this.props.openModal('signup')}>Sign up here!</button>
                    
        //         </div>
        //     </div >
        // )
