import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'cp-table',
  template: `
    <table class="table">
      <thead>
      <tr>
        <th *ngFor="let label of labels">
          <abbr [title]="label">{{label}}</abbr>
        </th>
      </tr>
      </thead>
      <tfoot>
      <tr>
        <th *ngFor="let label of labels">
          <abbr [title]="label">{{label}}</abbr>
        </th>
      </tr>
      </tfoot>
      <ng-content></ng-content>
    </table>

    <nav class="pagination">
      <a
        class="pagination-previous"
        title="This is the first page"
        [attr.disabled]="isDisabled(total, amountPerPage, pageNumber, -1)"
        (click)="!isDisabled(total, amountPerPage, pageNumber, -1) && navigateToPage(pageNumber - 1)"
      >
        Previous
      </a>
      <a
        class="pagination-next"
        [attr.disabled]="isDisabled(total, amountPerPage, pageNumber, 1)"
        (click)="!isDisabled(total, amountPerPage, pageNumber, 1) && navigateToPage(pageNumber + 1)"
      >Next page</a>
      <ul class="pagination-list">
        <li *ngFor="let page of pagesArray; let i = index;">
          <a
            class="pagination-link"
            [class.is-current]="pageNumber === (i + 1)"
            (click)="navigateToPage(i + 1)">
            {{i + 1}}
          </a>
        </li>
      </ul>
    </nav>
  `
})
export class TableComponent implements OnInit, OnChanges {
  @Input()
  labels: [string];

  @Input()
  amountPerPage = 1;

  @Input()
  total = 0;
  pagesArray = new Array(Math.ceil(this.total / this.amountPerPage)).fill(1);
  @Input()
  pageNumber = 1;

  @Input()
  navigateToPage: (i: number) => void;

  ngOnInit() {
    this.pagesArray = new Array(
      Math.ceil(this.total / this.amountPerPage)
    ).fill(1);
  }

  ngOnChanges() {
    this.pagesArray = new Array(
      Math.ceil(this.total / this.amountPerPage)
    ).fill(1);
  }

  isDisabled(total, amountPerPage, pageNumber, operation) {
    const res =
      pageNumber + operation < 1 ||
      Math.ceil(total / amountPerPage) < pageNumber + operation;
    return res || null;
  }
}
