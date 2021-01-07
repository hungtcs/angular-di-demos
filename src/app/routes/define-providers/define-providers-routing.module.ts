import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefineProvidersComponent } from './define-providers.component';

const routes: Routes = [
  {
    path: '',
    component: DefineProvidersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefineProvidersRoutingModule { }
