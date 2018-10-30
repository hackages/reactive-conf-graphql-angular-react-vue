import { Component, Input, OnInit } from "@angular/core";
import { Talk } from "../talk/types";

@Component({
  selector: "cp-talk-card",
  template: `
    <div
      [routerLink]="['/talk/', talk.id]"
      class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{talk.title}}</p>
          </div>
        </div>
        <div class="content">
          {{talk.description.slice(0, 150)}}

          {{talk.description.length > 150 ? '...' : ''}}
          <hr/>
          <div class="columns">
            <div class="column is-6">
              <small>{{talk.room}}</small>
            </div>
            <div class="column is-6">
              <small>{{talk.startsAt | date:'dd MM yyyy'}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TalkCardComponent implements OnInit {
  @Input() talk: Talk;

  constructor() {}

  ngOnInit() {}
}
