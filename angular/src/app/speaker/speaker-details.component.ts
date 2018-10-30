import { Component, OnDestroy, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { getSpeakerById, getSpeakerByIdResponse } from "./speaker.apollo-query";
import { chunk, unsubscribeAll } from "../utils";
import { empty, Subscription } from "rxjs";
import { Speaker } from "./types";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "cp-speaker-details",
  template: `
    <div>
      <cp-page-header
        [headers]="[speaker?.username, '@' + speaker?.publicName]">
      </cp-page-header>
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <p class="title is-3 has-text-muted">
                {{speaker?.bio}}
              </p>
              <hr/>
              <p class="title is-4">
                Talks :
              </p>

              <div class="columns" *ngFor="let chunkTalks of speaker?.talks">
                <div class="column is-6" *ngFor="let talk of chunkTalks">
                  <cp-talk-card
                    [talk]="talk"
                  >
                  </cp-talk-card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  `
})
export class SpeakerDetailsComponent implements OnInit, OnDestroy {
  speaker: Speaker;
  loading;
  subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.getSpeaker = this.getSpeaker.bind(this);
  }

  ngOnInit() {
    const getSpeaker$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get("id")),
        switchMap(this.getSpeaker)
      )

      .subscribe(({ data }) => {
        this.loading = data.loading;
        this.speaker = this.updateSpeaker(data);
      });

    this.subscriptions = this.subscriptions.concat(getSpeaker$);
  }

  getSpeaker(speakerId: string) {
    // TODO: Write getSpeakerById in speaker.apollo.query.ts
    return empty();
  }

  updateSpeaker(data: getSpeakerByIdResponse): Speaker {
    return Object.assign({}, ...data.speaker, {
      talks: chunk(data.speaker.talks, 2)
    });
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
