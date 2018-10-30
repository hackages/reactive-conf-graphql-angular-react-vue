import { Component, OnDestroy, OnInit } from "@angular/core";
import { Conference } from "../conference/types";
import { Apollo } from "apollo-angular";
import {
  deleteConference,
  getAllConferences,
  getAllConferencesResponse
} from "./management.apollo-query";
import { DEFAULT_ITEMS_PER_PAGE, START_PAGE } from "../table.config";
import { empty, Subscription } from "rxjs";
import { unsubscribeAll } from "../utils";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "cp-conference-table-list",
  template: `
    <div>
      <cp-page-header
        [headers]="['Conferences']">
    <span class="title is-4 is-info is-pulled-right ">
      <a
        class="icon is-large"
        routerLink="/secure/conference">
        <i class="fa fa-plus-circle"></i>
      </a>
      </span>
      </cp-page-header>

      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <cp-table
                [labels]="['ID', 'Name', 'City', 'Country', 'Start Date']"
                [amountPerPage]="amountPerPage"
                [total]="total"
                [pageNumber]="pageNumber"
                [navigateToPage]="navigateToPage">
                <tr cp-conference-table-row *ngFor="let conference of conferences"
                    [conference]="conference"
                    [deleteConference]="deleteConference">
                </tr>
              </cp-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ConferenceTableListComponent implements OnInit, OnDestroy {
  conferences: [Conference];
  amountPerPage = DEFAULT_ITEMS_PER_PAGE;
  total = 0;
  pageNumber = START_PAGE;
  subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo) {
    this.deleteConference = this.deleteConference.bind(this);
    this.navigateToPage = this.navigateToPage.bind(this);
  }

  ngOnInit() {
    this.getConferencesChunk();
  }

  navigateToPage(pageNumber) {
    this.getConferencesChunk(pageNumber);
  }

  getAllConferences(pageNumber = 1) {
    // TODO: Write getAllConferences
    return empty();
  }

  getConferencesChunk(pageNumber = 1) {
    const getAllConferences$ = this.getAllConferences(pageNumber).subscribe(
      ({ data }) => {
        this.conferences = data.conferences;
        this.total = data._allConferencesMeta.count;
        this.pageNumber = pageNumber;
      }
    );

    this.subscriptions = this.subscriptions.concat(getAllConferences$);
  }

  deleteConference(id) {
    // TODO: Write deleteConference and execute it
    const deleteConference$ = empty()
      .pipe(switchMap(_ => this.getAllConferences()))
      .subscribe(({ data }) => {
        this.conferences = data.conferences;
        this.total = data._allConferencesMeta.count;
        this.pageNumber = 1;
      });

    this.subscriptions = this.subscriptions.concat(deleteConference$);
  }

  ngOnDestroy() {
    unsubscribeAll(this.subscriptions);
  }
}
