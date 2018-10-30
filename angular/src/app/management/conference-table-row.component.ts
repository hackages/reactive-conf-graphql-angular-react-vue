import { Component, Input } from "@angular/core";
import { Conference } from "../conference/types";

@Component({
  selector: "[cp-conference-table-row]",
  template: `
    <th>{{conference?.id}}</th>
    <td>
      <a [href]="conference?.website || 'https://www.hackages.io/'" title="GraphQL Europe">
        {{conference?.name}}
      </a>
    </td>
    <td>{{conference?.city}}</td>
    <td>{{conference?.country}}</td>
    <td>{{conference?.startDate | date:'dd/MM/yyyy'}}</td>
    <td>
      <a
        class="button is-info is-outlined"
        [routerLink]="['/secure/conference/', conference.id, 'talks']"
      >Manage talks</a>
    </td>
    <td>
      <a
        [routerLink]="['/secure/conference/', conference.id]"
        class="button is-primary is-outlined"
      >Edit</a>
    </td>
    <td>
      <a
        class="button is-danger is-outlined"
        (click)="deleteConference(conference?.id)"
      >Delete</a>
    </td>
  `
})
export class ConferenceTableRow {
  @Input() conference: Conference;

  @Input() deleteConference: (id: string) => void;
}
