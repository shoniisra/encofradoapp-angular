import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsIcComponent } from './icons-ic.component';


const routes: Routes = [
  {
    path: '',
    component: IconsIcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsIcRoutingModule {
}
