import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { SomeCommon1Module } from './some-common1/some-common1.module';
import { SomeCommon2Module } from './some-common2/some-common2.module';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule,
    SomeCommon1Module,
    SomeCommon2Module,
  ],
  exports: [
    HighlightModule,
    SomeCommon1Module,
    SomeCommon2Module,
  ],
})
export class SharedModule {

}
