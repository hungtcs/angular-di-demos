import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule,
  ],
  exports: [
    HighlightModule,
  ],
  providers: [

  ],
})
export class SharedModule { }
