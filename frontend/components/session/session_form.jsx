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
        const errorsLi = this.props.errors.map(
            error => <li className = "session-errors">{error}</li>
            )
     
        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <div 
                onClick={this.props.closeModal} 
                className="close-x">X</div>
                    <div className="login-form">
                        <h3>{this.props.formType}</h3>
                        {errorsLi}
                        <input type="text"
                                value={this.state.username}
                                placeholder = "username"
                                onChange={this.handleInput('username')}
                                className="login-input"
                            />
                        <input type="password"
                                value={this.state.password}
                                placeholder="password"
                                onChange={this.handleInput('password')}
                                className="login-input"
                            />
                         <button className = "session-submit">{this.props.button}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);

