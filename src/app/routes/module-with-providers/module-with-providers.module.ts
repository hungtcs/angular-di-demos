import { NgModule } from '@angular/core';
import { View1Module } from './view1/view1.module';
import { View2Module } from './view2/view2.module';
import { CommonModule } from '@angular/common';
import { ConfigurableModule } from './configurable/configurable.module';
import { ModuleWithProvidersComponent } from './module-with-providers.component';
import { ModuleWithProvidersRoutingModule } from './module-with-providers-routing.module';

@NgModule({
  imports: [
    View1Module,
    View2Module,
    CommonModule,
    ModuleWithProvidersRoutingModule,
    ConfigurableModule.register({
      textColor: '#FFFFFF',
      backgroundColor: 'black',
    }),
  ],
  declarations: [
    ModuleWithProvidersComponent,
  ],
})
export class ModuleWithProvidersModule {

}
