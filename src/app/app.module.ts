import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VexModule } from "../@vex/vex.module";
import { HttpClientModule } from "@angular/common/http";

// <<<<<<<<<<<<<<<<<<<<<Mis dependencias>>>>>>>>>>>>>>>>>>>>>>>
import { GraphqlModule } from "./graphql.module";

import { environment } from "src/environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
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
    GraphqlModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
