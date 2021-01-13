import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FatherAndSonComponent } from './father-and-son/father-and-son.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { SameLevelChildComponent } from './same-level-child/same-level-child.component';
import { PtcChild1Component } from './parent-to-child/ptc-child1/ptc-child1.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FatherAndSonComponent,
    ParentToChildComponent,
    SameLevelChildComponent,
  ],
  declarations: [
    FatherAndSonComponent,
    ParentToChildComponent,
    SameLevelChildComponent,
    PtcChild1Component,
  ],
})
export class ParentChildsModule {

}
