import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        this.props.errors ? console.log(this.props.errors) : console.log("no")
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

    renderEmailError() {

        return (
            <span key={`error-email-2`} style={{ marginLeft: 'auto', marginRight: 'auto', color: 'blue', marginTop: '10px', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '400' }}>
                {this.props.errors['email']}
            </span>
        );
    }

    renderHandleError() {

        return (
            <span key={`error-email-2`} style={{ marginLeft: 'auto', marginRight: 'auto', color: 'blue', marginTop: '10px', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '400' }}>
                {this.props.errors['handle']}
            </span>
        );
    }

    renderPasswordError() {

        return (
            <span key={`error-password-2`} style={{ marginLeft: 'auto', marginRight: 'auto', color: 'blue', marginTop: '10px', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '400' }}>
                {this.props.errors['password']}
            </span>
        );
    }

    renderPassword2Error() {

        return (
            <span key={`error-password-2`} style={{ marginLeft: 'auto', marginRight: 'auto', color: 'blue', marginTop: '10px', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '400' }}>
                {this.props.errors['password2']}
            </span>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <div style={{ marginRight: 'auto', marginTop: '50px', marginLeft: 'auto', width: '650px', height: '600px', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '500', borderRadius: '24px', backgroundColor: "rgb(74,199,118)" }}>
                    <form onSubmit={this.handleSubmit} style={{ margin: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white', marginTop: '40px', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600' }}>Email</span>
                    
                            {this.renderEmailError()}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                                style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', color: 'white', borderRadius: '12px', marginTop: '20px', border: 'none', padding: '5px', fontFamily: 'sans-serif' }}
                           
                        />

                        <span style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white', marginTop: 'auto', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', marginTop: '20px' }}>Handle</span>
                            {this.renderHandleError()}
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                          
                            style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', color: 'white', borderRadius: '12px', marginTop: '20px', border: 'none', padding: '5px', fontFamily: 'sans-serif' }}
                        />
                  
                            <span style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white', marginTop: 'auto', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', marginTop: '20px' }}>Password</span>
                            {this.renderPasswordError()}
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                                style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', color: 'white', borderRadius: '12px', marginTop: '20px', justifyContent: 'center', marginTop: '20px', border: 'none', padding: '5px' }}
                        />

                            <span style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white', marginTop: 'auto', fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '600', marginTop: '20px' }}>Confirm Password</span>
                            {this.renderPassword2Error()}
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                                style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', color: 'white', borderRadius: '12px', marginTop: '20px', justifyContent: 'center', marginTop: '20px', border: 'none', padding: '5px' }}
                            
                        />
                  
                            <input type="submit" value="Submit" style={{ width: '25%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', color: 'white', borderRadius: '12px', marginBottom: '40px', marginTop: '40px', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '600', border: 'none', padding: '5px', cursor: 'pointer' }}/>

                        {/* {this.renderErrors()} */}
          
                        </div>
                </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);