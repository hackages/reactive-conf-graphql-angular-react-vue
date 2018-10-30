import { Component, OnDestroy, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { DEFAULT_ITEMS_PER_PAGE, START_PAGE } from "../table.config";
import { Talk } from "../talk/types";
import { Subscription, empty } from "rxjs";
import { unsubscribeAll } from "../utils";
import {
  deleteTalk,
  getAllTalks,
  getAllTalksResponse
} from "./management.apollo-query";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "cp-talk-table-list",
  template: `
    <div>
      <cp-page-header
        [headers]="['Talks']">
        <span class="title is-4 is-info is-pulled-right ">
          <a class="icon is-large"
             routerLink="/secure/talk">
            <i class="fa fa-plus-circle"></i>
          </a>
        </span>
      </cp-page-header>
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <cp-table
                [labels]="['ID', 'title', 'Room', 'Starts At']"
                [amountPerPage]="amountPerPage"
                [total]="total"
                [pageNumber]="pageNumber"
                [navigateToPage]="navigateToPage">
                <tr cp-talk-table-row *ngFor="let talk of talks"
                    [talk]="talk"
                    [deleteTalk]="deleteTalk">
                </tr>
              </cp-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TalkTableListComponent implements OnInit, OnDestroy {
  talks: Talk[];
  amountPerPage = DEFAULT_ITEMS_PER_PAGE;
  total = 0;
  pageNumber = START_PAGE;
  private subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo) {
    this.deleteTalk = this.deleteTalk.bind(this);
    this.navigateToPage = this.navigateToPage.bind(this);
  }

  ngOnInit() {
    this.getTalksChunk();
  }

  navigateToPage(pageNumber) {
    this.getTalksChunk(pageNumber);
  }

  getTalks(pageNumber = 1) {
    // TODO: Write getAllTalks
    return empty();
  }

  deleteTalk(id) {
    // TODO: Write deleteTalk
    const deleteTalk$ = empty()
      .pipe(switchMap(_ => this.getTalks()))
      .subscribe(({ data }) => {
        this.talks = data.talks;
        this.total = data._allTalksMeta.count;
        this.pageNumber = 1;
      });
    this.subscriptions = this.subscriptions.concat(deleteTalk$);
  }

  getTalksChunk(pageNumber = 1) {
    const getAllTalks$ = this.getTalks(pageNumber).subscribe(({ data }) => {
      this.talks = data.talks;
      this.total = data._allTalksMeta.count;
      this.pageNumber = pageNumber;
    });

    this.subscriptions = this.subscriptions.concat(getAllTalks$);
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
