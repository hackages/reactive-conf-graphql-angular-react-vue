import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { LoginMutation, LoginResponse } from "../authentication.apollo-query";
import { empty, Subscription } from "rxjs";
import { unsubscribeAll } from "../../utils";
import { Router } from "@angular/router";

@Component({
  selector: "cp-login-component",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit, OnDestroy {
  userNotFound = false;
  publicName: string;
  loginForm: FormGroup;

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        "",
        [Validators.required, Validators.email, Validators.maxLength(50)]
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ]
    });
  }

  login(values: { email: string; password: string }) {
    // TODO: Write LoginMutation and execute it
    const loginMutation$ = empty().subscribe(
      ({ data }) => {
        this.userNotFound = false;
        this.publicName = data.signinUser.user.publicName;
        this.storePublicNameInLocalStorage(this.publicName);
        this.navigateToHome();
      },
      error => {
        this.userNotFound = true;
      }
    );

    this.subscriptions = this.subscriptions.concat(loginMutation$);
  }

  storePublicNameInLocalStorage(name: string) {
    localStorage.setItem("cp-public-name", name);
  }

  navigateToHome() {
    this.router.navigate(["/"]);
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
