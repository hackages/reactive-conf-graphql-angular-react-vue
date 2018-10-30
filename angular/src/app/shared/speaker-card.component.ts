import { Component, Input, OnInit } from "@angular/core";
import { Speaker } from "../speaker/types";

@Component({
  selector: "cp-speaker-card",
  template: `
    <div
      [routerLink]="['/speaker/', speaker.id]"
      class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img [src]="speaker.picture" [alt]="speaker.publicName"/>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{speaker.username}}</p>
            <p class="subtitle is-6">@{{speaker.publicName}}</p>
          </div>
        </div>
        <div class="content">
          {{speaker.bio}}
          <br/>
        </div>
      </div>
    </div>

  `
})
export class SpeakerCardComponent implements OnInit {
  @Input() speaker: Speaker;

  constructor() {}

  ngOnInit() {}
}
