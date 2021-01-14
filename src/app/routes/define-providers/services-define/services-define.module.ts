import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServiceCService } from './services/service-c.service';
import { ServicesDefineComponent } from './services-define.component';
import { ServiceAService } from './services/service-a.service';
import { SomeCommon1Module } from 'src/app/shared/some-common1/some-common1.module';
import { SelfHostComponent } from './self-host/self-host.component';
import { SetBackgroundColorDirective } from './self-host/set-background-color.directive';
import { Child1Component } from './self-host/child1/child1.component';
import { Child2Component } from './self-host/child2/child2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // SomeCommon1Module,
  ],
  exports: [
    ServicesDefineComponent,
  ],
  providers: [
    ServiceCService,
    // {
    //   provide: ServiceAService,
    //   useClass: ServiceCService,
    // },
    // {
    //   provide: ServiceAService,
    //   useExisting: ServiceCService,
    // },
    // {
    //   deps: [],
    //   provide: ServiceAService,
    //   useFactory: () => new ServiceCService(),
    // },
  ],
  declarations: [
    ServicesDefineComponent,
    SelfHostComponent,
    SetBackgroundColorDirective,
    Child1Component,
    Child2Component
  ],
})
export class ServicesDefineModule {

}
