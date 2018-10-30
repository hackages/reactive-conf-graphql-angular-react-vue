import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "cp-app-header",
  template: `
    <nav class="nav">
      <div class="nav-left">
        <a
          class="nav-item"
          routerLink="/"
        >
          <img
            src="https://cdn-images-1.medium.com/max/600/1*RCeGDSIqqW68bS5kYucTvA.png"
            alt="GraphQL logo"/>
          Conference planner
        </a>
      </div>

      <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

      <div class="nav-right nav-menu">
        <div class="nav-item" *ngIf="!isAuthenticated()">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="button"
                routerLink="/authentication/register"
              >
          <span class="icon">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </span>
                <span>Register</span>
              </a>
            </p>
            <p class="control">
              <a
                class="button"
                routerLink="authentication/login"
              >
          <span class="icon">
                <i class="fa fa-user" aria-hidden="true"></i>
              </span>
                <span>Login</span>
              </a>
            </p>
          </div>
        </div>
        <div class="nav-item" *ngIf="isAuthenticated()">
          <div class="field is-grouped">
            <p class="control">
              <span>Welcome, {{getName()}}</span>
            </p>
            <p class="control" (click)="logout()">
          <span class="icon">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
          </span>
              <span>Logout</span>
            </p>
          </div>
        </div>
      </div>
    </nav>

  `
})
export class AppHeaderComponent {
  private key = "cp-public-name";

  constructor(private router: Router) {}

  isAuthenticated() {
    return !!this.getName();
  }

  getName() {
    return localStorage.getItem(this.key);
  }

  logout() {
    localStorage.removeItem(this.key);
    this.router.navigate(["/authentication/login"]);
  }
}
