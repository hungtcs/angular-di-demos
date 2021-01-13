import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'define-providers',
  },
  {
    path: 'define-providers',
    loadChildren: () => import('./define-providers/define-providers.module').then(module => module.DefineProvidersModule),
  },
  {
    path: 'module-with-providers',
    loadChildren: () => import('./module-with-providers/module-with-providers.module').then(module => module.ModuleWithProvidersModule),
  },
  {
    path: 'sharing-datas',
    loadChildren: () => import('./sharing-datas/sharing-datas.module').then(module => module.SharingDatasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
