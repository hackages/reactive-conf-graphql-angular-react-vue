import { Component, OnDestroy, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import {
  getSpeakers,
  getSpeakersResponse,
  updateTalkSpeaker
} from "./management.apollo-query";
import { ActivatedRoute } from "@angular/router";
import { Speaker } from "../speaker/types";
import { empty, Subscription } from "rxjs";
import { unsubscribeAll } from "../utils";

@Component({
  selector: "cp-add-speaker-to-talk",
  template: `
    <cp-page-header
      [headers]="['Talks', 'Management', 'Add or remove speaker on talk']">
    </cp-page-header>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 ">
            <nav class="panel">
              <p class="panel-heading">
                Speaker List
              </p>
              <cp-speaker-row
                *ngFor="let speaker of speakers"
                [attending]="false"
                [speaker]="speaker"
                [onClick]="addSpeaker"
              >
              </cp-speaker-row>

            </nav>
          </div>
          <div class="column is-4 is-offset-2">
            <nav class="panel">
              <p class="panel-heading">
                Talk Speaker
              </p>
              <cp-speaker-row
                [attending]="true"
                [speaker]="speakerOnTalk"
                [onClick]="deleteSpeaker"
                *ngIf="speakerOnTalk">
              </cp-speaker-row>
              <a class="panel-block" *ngIf="!speakerOnTalk">
                No speaker yet on this talk
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AddSpeakerToTalkComponent implements OnInit, OnDestroy {
  speakerOnTalk: Speaker;
  speakers: [Speaker];
  talkIdParam: string;
  subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.talkIdParam = this.route.snapshot.params["id"];
    this.addSpeaker = this.addSpeaker.bind(this);
    this.deleteSpeaker = this.deleteSpeaker.bind(this);
  }

  ngOnInit() {
    this.getSpeakersAndSpeakersOnTalk();
  }

  getSpeakersAndSpeakersOnTalk() {
    // TODO: Write getSpeakers
    const getSpeakers$ = empty().subscribe(({ data }) => {
      this.speakers = data.speakers;
      this.speakerOnTalk = this.getSpeakerOnTalk(data.speakers);
    });

    this.subscriptions = this.subscriptions.concat(getSpeakers$);
  }

  addSpeaker(speakerId) {
    // TODO: Write updateTalkSpeaker
    const updateTalkSpeaker$ = empty().subscribe(_ => {
      this.speakerOnTalk = this.speakers.find(
        speaker => speaker.id === speakerId
      );
    });

    this.subscriptions = this.subscriptions.concat(updateTalkSpeaker$);
  }

  deleteSpeaker() {
    // TODO: Execute updateTalkSpeaker
    const updateTalkSpeaker$ = empty().subscribe(_ => {
      this.speakerOnTalk = null;
    });

    this.subscriptions = this.subscriptions.concat(updateTalkSpeaker$);
  }

  getSpeakerOnTalk(speakers: Speaker[]): Speaker {
    return speakers.find(speaker => {
      return speaker.talks.some(talk => talk.id === this.talkIdParam);
    });
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
