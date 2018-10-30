import { Component, OnDestroy, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { ActivatedRoute } from "@angular/router";
import {
  getTalksOnConference,
  getTalksOnConferenceResponse,
  updateTalksOnConference
} from "./management.apollo-query";
import { empty, Subscription } from "rxjs";
import { unsubscribeAll } from "../utils";
import { Talk } from "../talk/types";

@Component({
  selector: "cp-add-talks-to-conference",
  template: `
    <cp-page-header
      [headers]="['Conferences', 'Management', 'Add or remove talks on conference']">
    </cp-page-header>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 ">
            <nav class="panel">
              <p class="panel-heading">
                Talk List
              </p>
              <cp-talk-row
                *ngFor="let talk of talks"
                [attending]="false"
                [talk]="talk"
                [onClick]="addTalk">
              </cp-talk-row>
            </nav>
          </div>
          <div class="column is-4 is-offset-2">
            <nav class="panel">
              <p class="panel-heading">
                Conference Talks
              </p>
              <cp-talk-row
                *ngFor="let talk of talksOnConference"
                [attending]="true"
                [talk]="talk"
                [onClick]="deleteTalk">
              </cp-talk-row>
              <a class="panel-block" *ngIf="!talksOnConference?.length">
                No talks yet on this conference
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AddTalksToConferenceComponent implements OnInit, OnDestroy {
  talksOnConference: Talk[] = [];
  talks: Talk[] = [];
  conferenceIdParam: string;
  subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.conferenceIdParam = this.route.snapshot.params["id"];
    this.addTalk = this.addTalk.bind(this);
    this.deleteTalk = this.deleteTalk.bind(this);
  }

  ngOnInit() {
    this.getTalksAndTalksOnConference();
  }

  getTalksAndTalksOnConference() {
    // TODO: Write getTalksOnConference
    const getTalksOnConference$ = empty().subscribe(({ data }) => {
      this.talks = data.talks;
      this.talksOnConference = this.getTalksOnConference(data.talks);
    });

    this.subscriptions = this.subscriptions.concat(getTalksOnConference$);
  }

  addTalk(talkId) {
    // TODO: Write updateTalksOnConference and execute it
    const updateTalksOnConference$ = empty().subscribe(_ => {
      const talkToAdd = this.talks.find(talk => talk.id === talkId);
      this.talksOnConference = this.talksOnConference.concat(
        this.talksOnConference.includes(talkToAdd) ? [] : talkToAdd
      );
    });

    this.subscriptions = this.subscriptions.concat(updateTalksOnConference$);
  }

  deleteTalk(talkId: string) {
    // TODO: Execute updateTalksOnConference
    const updateTalksOnConference$ = empty().subscribe(_ => {
      this.talksOnConference = this.talksOnConference.filter(
        talk => talk.id !== talkId
      );
    });

    this.subscriptions = this.subscriptions.concat(updateTalksOnConference$);
  }

  getTalksOnConference(talks: Talk[] = []): Talk[] {
    return talks.filter(talk => {
      return talk.conferences.some(
        conference => conference.id === this.conferenceIdParam
      );
    });
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
