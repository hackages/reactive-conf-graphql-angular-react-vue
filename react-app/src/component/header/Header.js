import React from "react";
import { withRouter } from "react-router-dom";

const logout = replace => {
  localStorage.removeItem("userName");
  replace("/");
};

const Header = ({ history: { push, replace } }) => {
  const loggedInUserName = localStorage.getItem("userName");
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item" onClick={() => push("/")}>
            <img
              src="https://cdn-images-1.medium.com/max/600/1*RCeGDSIqqW68bS5kYucTvA.png"
              alt="GraphQL logo"
            />
            Conference planner
          </a>
        </div>

        <span className="nav-toggle">
          <span />
          <span />
          <span />
        </span>

        <div className="nav-right nav-menu">
          <div className="nav-item">
            {loggedInUserName && <span>{loggedInUserName}</span>}
            {loggedInUserName && (
              <div className="field is-grouped">
                <p className="control">
                  <a className="button" onClick={() => logout(replace)}>
                    <span className="icon">
                      <i className="fa fa-pencil" aria-hidden="true" />
                    </span>
                    <span>Log out</span>
                  </a>
                </p>
              </div>
            )}
            {!loggedInUserName && (
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="button"
                    onClick={() => push("/authentication/register")}
                  >
                    <span className="icon">
                      <i className="fa fa-pencil" aria-hidden="true" />
                    </span>
                    <span>Register</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button"
                    onClick={() => push("/authentication/login")}
                  >
                    <span className="icon">
                      <i className="fa fa-user" aria-hidden="true" />
                    </span>
                    <span>Login</span>
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Header);
