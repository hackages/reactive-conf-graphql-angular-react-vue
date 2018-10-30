import React from "react";
import { Form, Text } from "react-form";
import { Link } from "react-router-dom";
import { SuccessModal } from "../../modal";

export const ConferenceForm = ({
  submitConference,
  validateConferenceForm,
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
        text={`Your conference has successfully been ${
          hasNoId ? "added" : "updated"
        }`}
      />
      <div className="section product-header">
        <div className="container">
          <div className="columns">
            <div className="column">
              <span className="title is-3">Conferences</span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">Management</span>
            </div>
          </div>
        </div>
      </div>
      <Form
        onSubmit={submitConference}
        validate={validateConferenceForm}
        defaultValues={defaultValues}
        className="box"
      >
        {({ submitForm }) => (
          <form noValidate onSubmit={submitForm}>
            <div className="section">
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">City*</label>
                      <div className="control">
                        <Text
                          className="input"
                          placeholder="Text input"
                          field="city"
                          errorProps={errorPropsConfig}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Country iso-code*</label>
                      <span>
                        Please choose a alpha-3 from :
                        https://fr.wikipedia.org/wiki/ISO_3166-1
                      </span>
                      <div className="control">
                        <Text
                          className="input"
                          type="text"
                          placeholder="Text input"
                          field="country"
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
                          placeholder="A cool description"
                          field="description"
                          errorProps={errorPropsConfig}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Start date*</label>
                      <div className="control">
                        <Text
                          className="input"
                          type="text"
                          placeholder="01/01/2017"
                          field="startDate"
                          errorProps={errorPropsConfig}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">End date*</label>
                      <div className="control">
                        <Text
                          className="input"
                          type="text"
                          placeholder="01/01/2017"
                          field="endDate"
                          errorProps={errorPropsConfig}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Logo*</label>
                      <div className="control">
                        <Text
                          className="input"
                          type="text"
                          placeholder="http://image-google.png"
                          field="logo"
                          errorProps={errorPropsConfig}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Name*</label>
                      <div className="control">
                        <Text
                          className="input"
                          type="text"
                          placeholder="My Conference"
                          field="name"
                          errorProps={errorPropsConfig}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Website</label>
                      <div className="control">
                        <Text
                          className="input"
                          type="text"
                          placeholder="http://my-website.com"
                          field="website"
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
                        <Link
                          to="/secure/conferences"
                          className="button is-link"
                        >
                          Cancel
                        </Link>
                      </p>
                    </div>
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
