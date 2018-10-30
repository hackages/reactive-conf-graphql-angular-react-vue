import { Component } from "@angular/core";

@Component({
  selector: "cp-conference-planner",
  template: `
    <cp-app-header></cp-app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
