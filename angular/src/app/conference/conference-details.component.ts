import { Component, OnDestroy, OnInit } from "@angular/core";
import { Conference, ConferenceDetails } from "./types";
import { Apollo } from "apollo-angular";
import {
  DetailedConferenceQuery,
  DetailedConferenceQueryResponse
} from "./conference.apollo-query";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { empty, Subscription } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { chunk, unsubscribeAll } from "../utils";
import { Talk } from "../talk/types";

@Component({
  selector: "cp-conference-details",
  template: `
    <cp-page-header
      [headers]="[conference?.name, conference?.city]"
    ></cp-page-header>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <cp-conference-details-level
              [attendeesCount]="conference?.attendeesCount?.count || 0"
              [sponsorsCount]="conference?.sponsorsCount?.count || 0"
              [speakersCount]="conference?.speakerCount"
            ></cp-conference-details-level>
            <p class="title is-3 has-text-muted">
              <!--Conference description-->
              {{conference?.description}}
            </p>
            <hr>
            <br>
            <p class="title is-4">
              Talks :
            </p>
            <!--Conference talks-->

            <div class="columns" *ngFor="let talkChunks of conference?.talks">
              <div class="column is-6" *ngFor="let talk of talkChunks">
                <cp-talk-card
                  [talk]="talk"
                ></cp-talk-card>
              </div>
            </div>
            <hr>

            <p class="title is-4">
              Speakers :
            </p>

            <!--Conference Speakers-->
            <div class="columns" *ngFor="let speakersChunk of conference?.speakers">
              <div class="column is-6" *ngFor="let speaker of speakersChunk">
                <cp-speaker-card
                  [speaker]="speaker"
                ></cp-speaker-card>
              </div>
            </div>
            <hr>
            <!--Conference sponsors-->
            <p class="title is-4 is-spaced">
              Sponsors :
            </p>
            <!--Conference sponsors : GOLD-->
            <p class="subtitle is-5">GOLD</p>
            <cp-sponsor-box
              *ngFor="let sponsor of conference?.goldSponsors"
              [picture]="sponsor.entreprise?.logo"
              [name]="sponsor.entreprise?.name"
              [description]="sponsor.entreprise?.description"
            ></cp-sponsor-box>
            <br>
            <!--Conference sponsors : SILVER-->
            <p class="subtitle is-5">SILVER</p>
            <cp-sponsor-box
              *ngFor="let sponsor of conference?.silverSponsors"
              [picture]="sponsor.entreprise?.logo"
              [name]="sponsor.entreprise?.name"
              [description]="sponsor.entreprise?.description"
            ></cp-sponsor-box>
            <br>
            <!--Conference sponsors : BRONZE-->
            <p class="subtitle is-5">BRONZE</p>
            <cp-sponsor-box
              *ngFor="let sponsor of conference?.bronzeSponsors"
              [picture]="sponsor.entreprise?.logo"
              [name]="sponsor.entreprise?.name"
              [description]="sponsor.entreprise?.description"
            ></cp-sponsor-box>
            <br>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ConferenceDetailsComponent implements OnInit, OnDestroy {
  loading: boolean;
  conference: ConferenceDetails;

  subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.getConferenceDetails = this.getConferenceDetails.bind(this);
  }

  ngOnInit() {
    const conferenceDetails$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get("id")),
        switchMap(this.getConferenceDetails)
      )

      .subscribe(({ data }) => {
        // Set the loading to this.loading

        // Apollo give you back a conference type
        // you have to convert it to the ConferenceDetails type
        // using the method 'formatConference' and set it to this.conference
        this.conference = this.formatConference(data.conference);
      });

    this.subscriptions = this.subscriptions.concat(conferenceDetails$);
  }

  getConferenceDetails(conferenceId: String) {
    // TODO: Write DetailedConferenceQuery
    return empty();
  }

  formatConference(data: Conference): ConferenceDetails {
    return Object.assign({}, data, {
      speakerCount:
        data.talks.reduce((acc, talk) => acc + (talk.speaker ? 1 : 0), 0) || 0,
      talks: this.formatArray(data.talks),
      speakers: this.formatArray(this.getSpeakersFromTalks(data.talks))
    });
  }

  formatArray(array: any[]) {
    return chunk(array, 2);
  }

  getSpeakersFromTalks(talks: Talk[]) {
    return talks.map(talk => talk.speaker).filter(speaker => !!speaker);
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
