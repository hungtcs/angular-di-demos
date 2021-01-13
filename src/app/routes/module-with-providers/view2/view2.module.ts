import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View2Component } from './view2.component';
import { ConfigurableModule } from '../configurable/configurable.module';

@NgModule({
  imports: [
    CommonModule,
    ConfigurableModule.register({
      textColor: 'blue',
      backgroundColor: 'black',
    }),
  ],
  exports: [
    View2Component,
  ],
  declarations: [
    View2Component,
  ],
})
export class View2Module {

}
