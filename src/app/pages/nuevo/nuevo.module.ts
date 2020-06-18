import { ListaUsuariosPageModule } from "./../lista-usuarios/lista-usuarios.module";
import { ListaUsuariosPage } from "./../lista-usuarios/lista-usuarios.page";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { NuevoPage } from "./nuevo.page";

const routes: Routes = [
  {
    path: "",
    component: NuevoPage
  }
];

@NgModule({
  entryComponents: [ListaUsuariosPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ListaUsuariosPageModule
  ],
  declarations: [NuevoPage]
})
export class NuevoPageModule {}
