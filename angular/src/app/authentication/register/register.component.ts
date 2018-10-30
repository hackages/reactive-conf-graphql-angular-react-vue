import { Component, OnDestroy, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterUserMutation } from "../authentication.apollo-query";
import { empty, Subscription } from "rxjs";
import { unsubscribeAll } from "../../utils";
import { Router } from "@angular/router";
import { AuthenticationValidators } from "../authentication.validators";

@Component({
  selector: "cp-register-component",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit, OnDestroy {
  publicName: string;
  alreadyExist = false;
  subscriptions: Subscription[] = [];
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    const defaultValue = "";
    const validatePasswordConfirmation =
      AuthenticationValidators.validatePasswordConfirmation;

    this.registerForm = this.fb.group({
      username: [
        defaultValue,
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      publicName: [
        defaultValue,
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      picture: [
        defaultValue,
        [
          Validators.required,
          Validators.maxLength(250),
          Validators.pattern(/^http/)
        ]
      ],
      email: [
        defaultValue,
        [Validators.required, Validators.maxLength(100), Validators.email]
      ],
      password: [
        defaultValue,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250)
        ]
      ],
      passwordConfirmation: [
        defaultValue,
        [
          Validators.required,
          Validators.maxLength(250),
          validatePasswordConfirmation
        ]
      ],
      bio: [defaultValue, [Validators.required]]
    });
  }

  submit() {
    // TODO: Write RegisterUserMutation and execute it
    const registerUserMutation$ = empty().subscribe(
      ({ data }) => {
        this.alreadyExist = false;
        this.publicName = this.registerForm.get("publicName").value;
        this.navigateToHome();
      },
      error => {
        this.alreadyExist = true;
      }
    );

    this.subscriptions = this.subscriptions.concat(registerUserMutation$);
  }

  navigateToHome() {
    this.router.navigate(["/authentication/login"]);
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
