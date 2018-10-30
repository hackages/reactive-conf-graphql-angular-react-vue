import { Component, Input } from "@angular/core";
import { Talk } from "../talk/types";

@Component({
  selector: "[cp-talk-table-row]",
  template: `
    <th>{{talk?.id}}</th>
    <td>{{talk?.title}}</td>
    <td>{{talk?.room}}</td>
    <td>{{talk?.startsAt | date:'dd/MM/yyyy'}}</td>
    <td>
      <a
        class="button is-info is-outlined"
        [routerLink]="['/secure/talk/', talk.id, 'speaker']"
      >Manage speakers</a>
    </td>
    <td>
      <a
        [routerLink]="['/secure/talk/', talk.id]"
        class="button is-primary is-outlined"
      >Edit</a>
    </td>
    <td>
      <a
        class="button is-danger is-outlined"
        (click)="deleteTalk(talk?.id)"
      >Delete</a>
    </td>
  `
})
export class TalkTableRow {
  @Input() talk: Talk;

  @Input() deleteTalk: (id: string) => void;
}
