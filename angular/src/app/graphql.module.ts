import { NgModule } from "@angular/core";
import { Apollo, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

@NgModule({
  exports: []
})
export class GraphQLModule {
  constructor() {
    // by default, this client will send queries to `/graphql` (relative to the URL of your app)
    // uri to use : https://api.graph.cool/simple/v1/cj1ufizxi5lgy0109064uyi7i

    // Setup your client here
  }
}
