import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ListaUsuariosPage } from "./lista-usuarios.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ListaUsuariosPage]
})
export class ListaUsuariosPageModule {}
