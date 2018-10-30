import React from "react";
import SpeakerItem from "./SpeakerItem";

export const AddSpeakerToTalkForm = ({
  speakers,
  deleteSpeaker,
  addSpeaker,
  speaker,
  talkId
}) => {
  return (
    <>
      <div className="section product-header">
        <div className="container">
          <div className="columns">
            <div className="column">
              <span className="title is-3">Talks</span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">Management</span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">
                Add or Remove speaker on Talk
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-4 ">
              <nav className="panel">
                <p className="panel-heading">Speaker List</p>
                {speakers.map(speaker => (
                  <SpeakerItem
                    key={speaker.id}
                    attending={false}
                    speaker={speaker}
                    onClick={speakerId => addSpeaker(talkId, speakerId)}
                  />
                ))}
              </nav>
            </div>
            <div className="column is-4 is-offset-2">
              <nav className="panel">
                <p className="panel-heading">Talk Speaker</p>
                {speaker ? (
                  <SpeakerItem
                    key={speaker.id}
                    attending={true}
                    speaker={speaker}
                    onClick={_ => deleteSpeaker(talkId)}
                  />
                ) : (
                  <a className="panel-block">No speaker yet on this talk</a>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
