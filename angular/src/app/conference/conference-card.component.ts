import { Component, Input, OnInit } from "@angular/core";
import { Conference } from "./types";

@Component({
  selector: "cp-conference-card",
  template: `
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <!--Country code (iso 3 letters in lowercase)-->
          <img [src]="getConferenceCountryLogo(conference.country)" class="avatar" alt="Conference country"/>
          <!--Name of conference-->
          {{conference.name}}
        </p>
        <span class="card-header-icon timestamp">
        <!--Conference city-->
      {{conference.city}}
    </span>
      </header>
      <div class="card-image">
        <figure class="image is-4by3">
          <!--Conference logo-->
          <img [src]="conference.logo" alt="Conference logo">
        </figure>
      </div>
      <div class="card-content">
        <div class="panel-block-item">
      <span class="likes">
        <span class="icon">
          <i class="fa fa-calendar"></i>
        </span>
        <!--Conference startDate-->
        {{conference.startDate | date:'dd/MM/yyyy'}}
      </span>
          <span class="comments">
        <span class="icon">
          <i class="fa  fa-users"></i>
        </span>
            <!--Number of attendee conference-->
        {{conference._attendeesMeta.count}} attendees
      </span>
        </div>
      </div>
    </div>
  `
})
export class ConferenceCardComponent implements OnInit {
  @Input() conference: Conference;

  constructor() {}

  ngOnInit() {}

  getConferenceCountryLogo(isoCountryCode: string) {
    return `https://restcountries.eu/data/${isoCountryCode &&
      isoCountryCode.toLocaleLowerCase()}.svg`;
  }
}
