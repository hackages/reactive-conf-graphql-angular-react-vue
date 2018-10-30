import { Component, Input } from "@angular/core";
import { Speaker } from "../speaker/types";

@Component({
  selector: "cp-speaker-row",
  template: `
    <a
      class="panel-block"
      (click)="onClick(speaker.id)">
      <span class="panel-icon">
          <i class="fa fa-check" *ngIf="attending"></i>
          <i class="fa fa-user" *ngIf="!attending"></i>
      </span>
      {{speaker.publicName}}
    </a>
  `
})
export class SpeakerRowComponent {
  @Input() attending: boolean;

  @Input() speaker: Speaker;

  @Input() onClick: (id: string) => void;
}
