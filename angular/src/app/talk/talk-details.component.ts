import { Component, OnDestroy, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Talk } from "./types";
import { getTalkById, getTalkByIdQueryResponse } from "./talk.apollo-query";
import { empty, Subscription } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { unsubscribeAll } from "../utils";

@Component({
  selector: "cp-talk-details",
  template: `
    <div>
      <cp-page-header
        [headers]="[talk?.title]">
        <div class="columns">
          <div class="column">
            <span class="subtitle is-6">Room: {{talk?.room}}</span>
            <span class="subtitle is-6 has-text-muted">&nbsp;|&nbsp;</span>
            <span class="subtitle is-6">Start at: {{talk?.startsAt | date:'HH:mm'}}</span>
          </div>
        </div>
      </cp-page-header>
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <p class="title is-4 has-text-muted">
                {{talk?.description}}
              </p>
              <hr/>
              <p class="title is-4">
                Speaker :
              </p>
              <div class="columns">
                <div class="column is-3" *ngIf="talk?.speaker">
                  <cp-speaker-card
                    [speaker]="talk.speaker">
                  </cp-speaker-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TalkDetailsComponent implements OnInit, OnDestroy {
  loading: boolean;
  subscriptions: Subscription[] = [];
  talk: Talk;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.getTalkDetails = this.getTalkDetails.bind(this);
  }

  ngOnInit() {
    const getTalkDetails$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get("id")),
        switchMap(this.getTalkDetails)
      )

      .subscribe(({ data }) => {
        this.loading = data.loading;
        this.talk = data.talk;
      });

    this.subscriptions = this.subscriptions.concat(getTalkDetails$);
  }

  getTalkDetails(talkId: string) {
    // TODO: Write getTalkById in speaker.apollo.query.ts
    return empty();
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
