import { Component, Input } from "@angular/core";

@Component({
  selector: "cp-success-modal",
  template: `
    <div
      class="modal"
      [class.is-active]="isVisible">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{title}}</strong>
                  <small>{{subTitle}}</small>
                  <br/>
                  {{text}}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <button
        class="modal-close"
        (click)="hide()"
      ></button>
    </div>
  `
})
export class SuccessModal {
  @Input() isVisible: boolean;

  @Input() title: string;

  @Input() subTitle: string;

  @Input() text: string;

  hide() {
    this.isVisible = false;
  }
}
