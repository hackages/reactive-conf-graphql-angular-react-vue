import { NgModule } from "@angular/core";
import { ConferenceTableListComponent } from "./conference-table-list.component";
import { SharedModule } from "../shared/shared.module";
import { ConferenceFormComponent } from "./conference-form/conference-form.component";
import { TalkTableListComponent } from "./talk-table-list.component";
import { TalkTableRow } from "./talk-table-row.component";
import { TalkFormComponent } from "./talk-form.component";
import { SpeakerRowComponent } from "./speaker-row.component";
import { AddSpeakerToTalkComponent } from "./add-speaker-to-talk.component";
import { AddTalksToConferenceComponent } from "./add-talks-to-conference.component";
import { TalkRowComponent } from "./talk-row.component";
import { ConferenceTableRow } from "./conference-table-row.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    ConferenceTableListComponent,
    ConferenceFormComponent,
    ConferenceTableRow,
    TalkTableListComponent,
    TalkTableRow,
    TalkFormComponent,
    SpeakerRowComponent,
    AddSpeakerToTalkComponent,
    AddTalksToConferenceComponent,
    TalkRowComponent
  ],
  exports: [
    ConferenceTableListComponent,
    ConferenceFormComponent,
    TalkTableListComponent,
    TalkFormComponent,
    AddSpeakerToTalkComponent,
    AddTalksToConferenceComponent
  ]
})
export class ManagementModule {}
