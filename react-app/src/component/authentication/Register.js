import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { Form } from "react-form";
import { Link } from "react-router-dom";
import { errorPropsConfig, validateRegisterForm } from "../../utils";
import { RegisterForm } from "./RegisterForm";

// TODO write a query to createUser
const REGISTER_MUTATION = undefined;

class Register extends Component {
  submitRegistration = mutationFn => values => {
    const { passwordConfirmation, ...newUser } = values;
    mutationFn({
      variables: newUser
    }).then(() => {
      this.props.history.push("/authentication/login");
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      validation: {},
      data: {}
    };
  }

  render() {
    // TODO Use the REGISTER_MUTATION  query to login

    // Remove this variable when you will get the mutate function from Mutation component
    const mutate = () =>
      alert("You should get the correct function from the mutation component");

    return (
      <div className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-4 is-offset-4">
              <h1 className="title">Register an Account</h1>
              <Form
                onSubmit={this.submitRegistration(mutate)}
                validate={validateRegisterForm}
                className="box"
              >
                {({ submitForm }) => (
                  <RegisterForm
                    errorPropsConfig={errorPropsConfig}
                    submitForm={submitForm}
                  />
                )}
              </Form>

              <div className="section forgot-password">
                <p className="has-text-centered">
                  <Link to="/authentication/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
