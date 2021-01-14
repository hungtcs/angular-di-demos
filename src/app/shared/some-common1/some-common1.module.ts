import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Common1Com1Component } from './common1-com1/common1-com1.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    Common1Com1Component,
  ],
  declarations: [
    Common1Com1Component,
  ],
})
export class SomeCommon1Module {

}
