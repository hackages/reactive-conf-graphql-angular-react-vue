import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ConferenceModule } from "./conference/conference.module";
import { GraphQLModule } from "./graphql.module";
import { AppRoutingModule } from "./app-routing.module";
import { TalkModule } from "./talk/talk.module";
import { SpeakerModule } from "./speaker/speaker.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { ManagementModule } from "./management/management.module";
import { HttpClientModule } from "@angular/common/http";
import { AppHeaderComponent } from "./app-header.component";
import { AppContainerComponent } from "./app-container.component";

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppContainerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GraphQLModule,
    ConferenceModule,
    TalkModule,
    SpeakerModule,
    AuthenticationModule,
    ManagementModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
