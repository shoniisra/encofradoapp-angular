import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VexModule } from "../@vex/vex.module";
import { HttpClientModule } from "@angular/common/http";

// <<<<<<<<<<<<<<<<<<<<<Mis dependencias>>>>>>>>>>>>>>>>>>>>>>>
// import { GraphqlModule } from "./graphql.module";

import { environment } from "src/environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
//<<<<APOLLO DEPENDENCIES>>>>>>>>>
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //Angular
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // Vex
    VexModule,
    //Apollo
    // GraphqlModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "https://encofrado-app.herokuapp.com/v1/graphql"
        })
      }
    },    
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
