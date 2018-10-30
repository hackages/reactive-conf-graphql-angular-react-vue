import React from "react";
import { Text } from "react-form";

export const LoginForm = ({ submitForm, errorPropsConfig, userNotFound }) => {
  return (
    <form onSubmit={submitForm} noValidate>
      <label className="label">Email*</label>
      <div className="control">
        <Text
          field="email"
          type="email"
          placeholder="jsmith@example.org"
          className="input"
          errorProps={errorPropsConfig}
        />
      </div>
      <label className="label">Password*</label>
      <div className="control">
        <Text
          field="password"
          className="input"
          type="password"
          placeholder="●●●●●●●"
          errorProps={errorPropsConfig}
        />
      </div>
      {userNotFound && <p>User not found</p>}

      <hr />

      <p className="control">
        <button
          className="button is-outlined is-large is-fullwidth is-info"
          type="submit"
        >
          Login
        </button>
      </p>
    </form>
  );
};
