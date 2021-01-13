import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1.component';
import { ConfigurableModule } from '../configurable/configurable.module';

@NgModule({
  imports: [
    CommonModule,
    ConfigurableModule.register({
      textColor: 'red',
      backgroundColor: 'black',
    }),
  ],
  exports: [
    View1Component,
  ],
  declarations: [
    View1Component,
  ],
})
export class View1Module { }
