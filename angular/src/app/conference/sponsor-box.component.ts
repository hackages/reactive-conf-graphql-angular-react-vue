import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "cp-sponsor-box",
  template: `
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img [src]="picture"
                 alt="Image"/>
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{name}}</strong>
              <br>
              {{description}}
            </p>
          </div>
        </div>
      </article>
    </div>
  `
})
export class SponsorBoxComponent implements OnInit {
  @Input() picture: String;

  @Input() name: String;

  @Input() description: String;

  constructor() {}

  ngOnInit() {}
}
