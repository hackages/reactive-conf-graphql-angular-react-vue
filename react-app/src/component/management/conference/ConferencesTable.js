import React from "react";
import Navigation from "../../table/navigation";
import Table from "../../table/Table";
import ConferenceRow from "./ConferenceRow";

export const ConferencesTable = ({
  conferences,
  deleteConference,
  getConferences,
  total,
  amountPerPage,
  pageNumber,
  navigateToPage,
  deleteItem,
  labels
}) => (
  <>
    <Table labels={labels}>
      {conferences.map(conference => (
        <ConferenceRow
          key={conference.id}
          conference={conference}
          deleteConference={conferenceId =>
            deleteItem(conferenceId, deleteConference, getConferences)
          }
        />
      ))}
    </Table>
    <Navigation
      total={total}
      amountPerPage={amountPerPage}
      pageNumber={pageNumber}
      page={pageNumber => navigateToPage(pageNumber, getConferences)}
    />
  </>
);
