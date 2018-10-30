import React from 'react';
import TalkItem from './TalkItem';

export function AddTalksOnConferenceForm({
                                           plannedTalks,
                                           talks,
                                           deleteTalk,
                                           addTalk,
                                           conferenceId
                                         }) {
  return (
    <div>
      <div className="section product-header">
        <div className="container">
          <div className="columns">
            <div className="column">
              <span className="title is-3">Talks</span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">Management</span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">
                Add or Remove talks on Conference
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
                <p className="panel-heading">Talk List</p>
                {talks.map(talk => (
                  <TalkItem
                    key={talk.id}
                    attending={false}
                    talk={talk}
                    onClick={talkId => addTalk(talkId, conferenceId)}
                  />
                ))}
              </nav>
            </div>
            <div className="column is-4 is-offset-2">
              <nav className="panel">
                <p className="panel-heading">Conference Talks</p>
                {plannedTalks.length > 0 ? (
                  plannedTalks.map(talk => (
                    <TalkItem
                      key={talk.id}
                      attending={true}
                      talk={talk}
                      onClick={talkId => deleteTalk(talkId, conferenceId)}
                    />
                  ))
                ) : (
                  <a className="panel-block">No Talks yet on this conference</a>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
