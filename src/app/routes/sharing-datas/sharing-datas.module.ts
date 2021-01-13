import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentChildsModule } from './parent-childs/parent-childs.module';
import { SharingDatasRoutingModule } from './sharing-datas-routing.module';
import { SharingDatasComponent } from './sharing-datas.component';

@NgModule({
  imports: [
    CommonModule,
    ParentChildsModule,
    SharingDatasRoutingModule,
  ],
  exports: [

  ],
  declarations: [
    SharingDatasComponent,
  ],
})
export class SharingDatasModule { }
