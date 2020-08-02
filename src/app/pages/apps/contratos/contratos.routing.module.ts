import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { ContratosComponent } from './contratos.component';
import { ContratosCreateUpdateComponent } from './contratos-create-update/contratos-create-update.component';


const routes: VexRoutes = [
  {
    path: '',
    component: ContratosComponent,
    data: {
      toolbarShadowEnabled: true
    }    
  },
  {
    path: 'create',
    component: ContratosCreateUpdateComponent,
    data: {
      toolbarShadowEnabled: true
    }    
  },
  {
    path: 'create/{id}',
    component: ContratosCreateUpdateComponent,
    data: {
      toolbarShadowEnabled: true
    }    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratosRoutingModule {
}
