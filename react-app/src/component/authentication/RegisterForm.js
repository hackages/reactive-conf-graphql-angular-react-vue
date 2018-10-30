import React from "react";
import { Text, Textarea } from "react-form";

export const RegisterForm = ({ submitForm, errorPropsConfig }) => {
  return (
    <form noValidate onSubmit={submitForm}>
      <div className="box">
        <label className="label">Username*</label>
        <div className="control">
          <Text
            className="input"
            field="username"
            placeholder="jsmith"
            errorProps={errorPropsConfig}
          />
        </div>
        <label className="label">Tweet handle*</label>
        <div className="field has-addons">
          <p className="control">
            <a className="button is-static">@</a>
          </p>
          <div className="control">
            <Text
              className="input"
              field="publicName"
              placeholder="jsm"
              errorProps={errorPropsConfig}
            />
          </div>
        </div>
        <label className="label">Picture*</label>
        <div className="control">
          <Text
            className="input"
            field="picture"
            type="text"
            placeholder="https://graphql.org/image/lee-byron.jpg"
            errorProps={errorPropsConfig}
          />
        </div>
        <label className="label">Email*</label>
        <div className="control">
          <Text
            className="input"
            type="email"
            placeholder="jsmith@example.org"
            field="email"
            errorProps={errorPropsConfig}
          />
        </div>
        <hr />
        <label className="label">Password*</label>
        <div className="control">
          <Text
            className="input"
            type="password"
            placeholder="●●●●●●●"
            field="password"
            errorProps={errorPropsConfig}
          />
        </div>
        <label className="label">Confirm Password*</label>
        <div className="control">
          <Text
            className="input"
            type="password"
            placeholder="●●●●●●●"
            field="passwordConfirmation"
            errorProps={errorPropsConfig}
          />
        </div>
        <hr />
        <label className="label">Bio*</label>
        <div className="control">
          <Textarea
            className="textarea"
            placeholder="Say HI"
            field="bio"
            errorProps={errorPropsConfig}
          />
        </div>
        <hr />
        <div className="control">
          <button
            className="button is-outlined is-large is-fullwidth is-info"
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};
