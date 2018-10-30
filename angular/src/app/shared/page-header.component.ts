import {Component, Input} from '@angular/core';

@Component({
  selector: 'cp-page-header',
  template: `
    <div class="section product-header">
      <div class="container">
        <div class="columns">
          <div class="column">

            <ng-container *ngFor="let header of headers; let i = index;">
              <ng-container *ngIf="i === 0; then mainHeader else defaultHeader">
              </ng-container>

              <ng-template #mainHeader>
            <span class="title is-3">
             {{header}}
            </span>
              </ng-template>

              <ng-template #defaultHeader>
                <span class="title is-3 has-text-muted" *ngIf="pipe">&nbsp;|&nbsp;</span>
                <span class="title is-4 has-text-muted">
               {{header}}
            </span>
              </ng-template>

            </ng-container>

            <ng-content></ng-content>

          </div>
        </div>
      </div>
    </div>

  `
})
export class PageHeaderComponent {
  @Input()
  headers: [string];

  @Input()
  pipe = true;
}
