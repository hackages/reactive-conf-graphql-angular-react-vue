import { Component, OnDestroy, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Conference } from "./types";
import {
  AllConferencesQuery,
  AllConferencesQueryResponse
} from "./conference.apollo-query";
import { chunk, unsubscribeAll } from "../utils";
import { empty, Subscription } from "rxjs";

@Component({
  selector: "cp-conference-card-list",
  template: `
    <div class="container section">
      <div class="columns section">
        <div class="column is-8">
          <div class="title">Conferences</div>
        </div>
      </div>
      <div class="columns" *ngFor="let conferenceChunk of chunkConferences(allConferences)">
        <div class="column is-4"
             *ngFor="let conference of conferenceChunk">
          <a [routerLink]="['/conference/', conference.id]">
            <cp-conference-card [conference]="conference"></cp-conference-card>
          </a>
        </div>
      </div>
    </div>
  `
})
export class ConferenceCardListComponent implements OnInit, OnDestroy {
  loading: boolean;
  allConferences: Conference[];
  subscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit() {
    // TODO: Write AllConferencesQuery in conference.apollo-query.ts and execute it
    const allConferences$ = empty().subscribe(({ data }) => {
      this.loading = data.loading;
      this.allConferences = data.allConferences;
    });

    this.subscriptions = this.subscriptions.concat(allConferences$);
  }

  chunkConferences(conferences: Conference[] = []): Conference[][] {
    return chunk(conferences, 3);
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
