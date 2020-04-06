import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUser) {<Redirect to="/" />}
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value })
    }

    render() {
        // const { formType, errors } = this.props;
        // let myLink;
        // if (formType === 'login') {
        //     myLink = <Link to="/signup">Sign Up</Link>
        // } else {
        //     myLink = <Link to="/login">Login</Link>
        // }
        const errorsLi = this.props.errors.map(error => <li>{error}</li>)

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to SoundSky!
                <br />
                Please {this.props.formType} or {this.props.otherForm}
                <div 
                onClick={this.props.closeModal} 
                className="close-x">X</div>
                    {errorsLi}
                    <div className="login-form">
                        <br />
                        <label>Username:
                        <input type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                        <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);

