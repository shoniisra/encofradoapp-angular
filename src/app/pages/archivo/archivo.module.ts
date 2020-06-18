import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ArchivoPage } from "./archivo.page";
import { TarjetaArchivoComponent } from "src/app/components/tarjeta-archivo/tarjeta-archivo.component";

const routes: Routes = [
  {
    path: "",
    component: ArchivoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArchivoPage, TarjetaArchivoComponent]
})
export class ArchivoPageModule {}
