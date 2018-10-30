import React from "react";
import { Form, Text } from "react-form";
import { Link } from "react-router-dom";
import { SuccessModal } from "../../modal";

export const TalkForm = ({
  submitTalk,
  validateTalkForm,
  defaultValues,
  errorPropsConfig,
  hasNoId,
  showSuccessModel,
  onHideSuccessModal
}) => {
  return (
    <>
      <SuccessModal
        isVisible={showSuccessModel}
        hide={onHideSuccessModal}
        title="Success"
        text={`Your talk has successfully been ${
          hasNoId ? "added" : "updated"
        }`}
      />
      <div className="section product-header">
        <div className="container">
          <div className="columns">
            <div className="column">
              <span className="title is-3">Talk</span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">Management</span>
            </div>
          </div>
        </div>
      </div>
      <Form
        onSubmit={submitTalk}
        validate={validateTalkForm}
        defaultValues={defaultValues}
        className="section"
      >
        {({ submitForm }) => (
          <form onSubmit={submitForm} noValidate>
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <label className="label">Title*</label>
                    <div className="control">
                      <Text
                        className="input"
                        type="text"
                        placeholder="Super talk"
                        field="title"
                        errorProps={errorPropsConfig}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Description*</label>
                    <div className="control">
                      <Text
                        className="input"
                        type="text"
                        placeholder="I will do this and that"
                        field="description"
                        errorProps={errorPropsConfig}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Room</label>
                    <div className="control">
                      <Text
                        className="input"
                        type="text"
                        placeholder="12A"
                        field="room"
                        errorProps={errorPropsConfig}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Starts at*</label>
                    <div className="control">
                      <Text
                        className="input"
                        type="text"
                        placeholder="12:00"
                        field="startsAt"
                        errorProps={errorPropsConfig}
                      />
                    </div>
                  </div>

                  <div className="field is-grouped">
                    <p className="control">
                      <button className="button is-primary" type="submit">
                        {hasNoId ? <span>Add</span> : <span>Update</span>}
                      </button>
                    </p>
                    <p className="control">
                      <Link to="/secure/talks" className="button is-link">
                        Cancel
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Form>
    </>
  );
};
