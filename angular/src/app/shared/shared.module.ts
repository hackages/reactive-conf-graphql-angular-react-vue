import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SpeakerCardComponent } from "./speaker-card.component";
import { TalkCardComponent } from "./talk-card.component";
import { SuccessModal } from "./success-modal.component";
import { TableComponent } from "./table.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PageHeaderComponent } from "./page-header.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SpeakerCardComponent,
    TalkCardComponent,
    SuccessModal,
    PageHeaderComponent,
    TableComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SpeakerCardComponent,
    TalkCardComponent,
    SuccessModal,
    PageHeaderComponent,
    TableComponent
  ]
})
export class SharedModule {}
