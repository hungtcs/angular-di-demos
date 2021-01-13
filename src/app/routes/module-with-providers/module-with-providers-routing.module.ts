import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProvidersComponent } from './module-with-providers.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleWithProvidersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleWithProvidersRoutingModule { }
