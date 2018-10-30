import { Component, Input } from "@angular/core";
import { Talk } from "../talk/types";

@Component({
  selector: "cp-talk-row",
  template: `
    <a
      class="panel-block"
      (click)="onClick(talk.id)">
      <span class="panel-icon">
          <i class="fa fa-check" *ngIf="attending"></i>
          <i class="fa fa-user" *ngIf="!attending"></i>
      </span>
      {{talk.title}}
    </a>
  `
})
export class TalkRowComponent {
  @Input() attending: boolean;

  @Input() talk: Talk;

  @Input() onClick: (id: string) => void;
}
