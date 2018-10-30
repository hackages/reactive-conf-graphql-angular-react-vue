import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { timeToInput, unsubscribeAll } from "../utils";
import {
  addTalk,
  getTalk,
  getTalkResponse,
  updateTalk
} from "./management.apollo-query";
import { empty, Subscription } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";

@Component({
  selector: "cp-talk-form",
  template: `
    <cp-page-header
      [headers]="['Talks', 'Management', 'Add|update']">
    </cp-page-header>
    <cp-success-modal
      [isVisible]="showModalSuccess"
      title="Success"
      [subTitle]=""
      [text]="'The talk has successfully been ' + (idParam ? 'updated' : 'added')">
    </cp-success-modal>
    <form
      novalidate
      [formGroup]="talkForm"
      class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Title*</label>
              <p class="control">
                <input
                  class="input"
                  [class.is-danger]="talkForm.get('title').invalid && talkForm.get('title').dirty"
                  type="text"
                  placeholder="Talk title"
                  formControlName="title"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Description*</label>
              <p class="control">
                <input
                  class="input"
                  [class.is-danger]="talkForm.get('description').invalid && talkForm.get('description').dirty"
                  type="text"
                  placeholder="An awesome talk"
                  formControlName="description"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Room</label>
              <p class="control">
                <input
                  class="input"
                  [class.is-danger]="talkForm.get('room').invalid && talkForm.get('room').dirty"
                  type="text"
                  placeholder="A 41b"
                  formControlName="room"
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Starts at*</label>
              <p class="control">
                <input
                  class="input"
                  [class.is-danger]="talkForm.get('startsAt').invalid && talkForm.get('startsAt').dirty"
                  type="text"
                  placeholder="12:00"
                  formControlName="startsAt"
                  required
                />
              </p>
            </div>

            <div class="field is-grouped">
              <p class="control">
                <button
                  class="button"
                  [class.is-danger]="talkForm.invalid"
                  [class.is-info]="talkForm.valid"
                  [disabled]="talkForm.invalid"
                  (click)="submitTalk($event)">
                  <span *ngIf="!idParam">Add</span>
                  <span *ngIf="idParam">Update</span>
                </button>
              </p>
              <p class="control">
                <a routerLink="/secure/talks" class="button is-link">Cancel</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  `
})
export class TalkFormComponent implements OnInit, OnDestroy {
  idParam: String;
  showModalSuccess = false;
  subscriptions: Subscription[] = [];

  talkForm: FormGroup;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.setupForm();
    this.getTalk = this.getTalk.bind(this);
    this.idParam = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    const getTalk$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get("id")),
        filter((idParam: string) => !!idParam),
        switchMap(this.getTalk)
      )

      .subscribe(({ data }) => {
        this.updateTalkForm(data);
      });

    this.subscriptions = this.subscriptions.concat(getTalk$);
  }

  getTalk(id) {
    // TODO: Write getTalk
    return empty();
  }

  submitTalk($event) {
    $event.preventDefault();

    // TODO: Write updateTalk and updateTalk
    const submitTalk$ = this.apollo
      .mutate({
        mutation: this.idParam ? updateTalk : addTalk,
        variables: {
          ...this.talkForm.value,
          id: this.idParam,
          startsAt: new Date(
            1990,
            1,
            1,
            this.talkForm
              .get("startsAt")
              .value.slice(0, this.talkForm.get("startsAt").value.indexOf(":")),
            this.talkForm
              .get("startsAt")
              .value.slice(this.talkForm.get("startsAt").value.indexOf(":") + 1)
          )
        }
      })
      .subscribe(({ data }) => {
        this.showModalSuccess = true;
      });

    this.subscriptions = this.subscriptions.concat(submitTalk$);
  }

  setupForm() {
    this.talkForm = this.fb.group({
      title: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      description: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250)
        ]
      ],
      room: ["", [Validators.minLength(2), Validators.maxLength(20)]],
      startsAt: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern(/^[0-9]{2}\:[0-9]{2}$/)
        ]
      ]
    });
  }

  updateTalkForm(data: getTalkResponse) {
    this.talkForm.patchValue({
      ...data.talk,
      startsAt: timeToInput(data.talk.startsAt)
    });
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
