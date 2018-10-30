import { NgModule } from "@angular/core";
import { ConferenceCardListComponent } from "./conference-card-list.component";
import { ConferenceCardComponent } from "./conference-card.component";
import { ConferenceDetailsComponent } from "./conference-details.component";
import { ConferenceDetailsLevelComponent } from "./conference-details-level.component";
import { SponsorBoxComponent } from "./sponsor-box.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [
    ConferenceCardListComponent,
    ConferenceCardComponent,
    ConferenceDetailsComponent,
    ConferenceDetailsLevelComponent,
    SponsorBoxComponent
  ],
  exports: [ConferenceCardListComponent, ConferenceDetailsComponent]
})
export class ConferenceModule {}
