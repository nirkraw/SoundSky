import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.createDemoUser = this.createDemoUser.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value })
    }

    createDemoUser(e) {
        e.preventDefault();
        this.props.processForm({ username: "Nir Kay", password: "demopassword" }).then(this.props.closeModal);
    }

    render() {
        const errorsLi = this.props.errors.map(
            error => <li 
            className = "session-errors"
            key ={error}
            >{error}</li>
            )
     
        return (
          <div className="session-form-container">
            <form className="login-form-box">
              <div onClick={this.props.closeModal} className="close-x">
                X
              </div>
              <div className="login-form">
                <h3>{this.props.formType}</h3>
                {errorsLi}
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleInput("username")}
                  className="login-input"
                />
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Your Password"
                  onChange={this.handleInput("password")}
                  className="login-input"
                />
                <div className="session-submit" onClick={this.handleSubmit}>
                  <p>{this.props.button}</p>
                </div>
                {this.props.formType !== "Create your SoundSky account" ? (
                  <div
                    className="demo-user"
                    onClick={this.createDemoUser}
                    type="submit"
                  >
                  <p>Demo User</p>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        );
    }
}

export default withRouter(SessionForm);

