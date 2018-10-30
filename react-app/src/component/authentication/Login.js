import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { Form } from "react-form";
import { Link } from "react-router-dom";
import { errorPropsConfig, validateLoginForm } from "../../utils";
import { LoginForm } from "./LoginForm";

// TODO write a query to signinUser
const LOGIN_MUTATION = undefined;

class Login extends Component {
  onSubmit = mutationFn => values => {
    mutationFn({
      variables: values
    })
      .then(re => {
        this.setState({
          userNotFound: false
        });
        localStorage.setItem("userName", values.email);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          userNotFound: true
        });
      });
  };

  constructor(props) {
    super(props);

    this.state = {
      userNotFound: false
    };
  }

  render() {
    // TODO Use the LOGIN_MUTATION  query to login

    // Remove this variable when you will get the mutate function from Mutation component
    const mutate = () =>
      alert("You should get the correct function from the mutation component");

    return (
      <div className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-4 is-offset-4">
              <h1 className="title">Sign in</h1>
              <Form
                onSubmit={this.onSubmit(mutate)}
                validate={validateLoginForm}
                className="box"
              >
                {({ submitForm }) => (
                  <LoginForm
                    submitForm={submitForm}
                    errorPropsConfig={errorPropsConfig}
                    userNotFound={this.state.userNotFound}
                  />
                )}
              </Form>
              <p className="has-text-centered">
                <Link to="/authentication/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
