import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "cp-conference-details-level",
  template: `
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Speakers</p>
          <p class="title">{{speakersCount}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Attendees</p>
          <p class="title">{{attendeesCount}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Sponsors</p>
          <p class="title">{{sponsorsCount}}</p>
        </div>
      </div>
    </nav>
  `
})
export class ConferenceDetailsLevelComponent implements OnInit {
  @Input() speakersCount: string;

  @Input() attendeesCount: string;

  @Input() sponsorsCount: string;

  constructor() {}

  ngOnInit() {}
}
