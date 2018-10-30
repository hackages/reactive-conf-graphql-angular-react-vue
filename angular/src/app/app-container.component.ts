import { Component } from "@angular/core";

@Component({
  selector: "cp-app-container",
  template: `
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title">
                Conference planner
              </p>
              <p class="subtitle">
                The <strong>ultimate </strong> conference planner in town
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <nav class="tabs is-boxed">
            <ul>
              <li
                routerLink="/"
                routerLinkActive="is-active"
                [routerLinkActiveOptions]="{exact:true}"
              >
                <a>Conferences</a>
              </li>
              <li routerLink="/secure/conferences" routerLinkActive="is-active">
                <a>Conference Management</a>
              </li>
              <li routerLink="/secure/talks" routerLinkActive="is-active">
                <a>Talks management</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <router-outlet></router-outlet>

  `
})
export class AppContainerComponent {}
