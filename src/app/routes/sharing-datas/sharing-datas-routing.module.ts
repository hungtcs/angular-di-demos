import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharingDatasComponent } from './sharing-datas.component';

const routes: Routes = [
  {
    path: '',
    component: SharingDatasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharingDatasRoutingModule { }
