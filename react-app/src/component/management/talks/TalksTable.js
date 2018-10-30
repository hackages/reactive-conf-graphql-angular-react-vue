import React from "react";
import Navigation from "../../table/navigation";
import Table from "../../table/Table";
import TalkRow from "./TalkRow";

export const TalksTable = ({
  talks,
  deleteTalk,
  getTalks,
  total,
  amountPerPage,
  pageNumber,
  navigateToPage,
  deleteItem,
  labels
}) => (
  <>
    <Table labels={labels}>
      {talks.map(talk => (
        <TalkRow
          key={talk.id}
          talk={talk}
          deleteTalk={talkId => deleteItem(talkId, deleteTalk, getTalks)}
        />
      ))}
    </Table>
    <Navigation
      total={total}
      amountPerPage={amountPerPage}
      pageNumber={pageNumber}
      page={pageNumber => navigateToPage(pageNumber, getTalks)}
    />
  </>
);
