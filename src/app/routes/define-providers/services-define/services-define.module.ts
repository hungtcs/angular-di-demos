import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCService } from './services/service-c.service';
import { ServicesDefineComponent } from './services-define.component';
import { ServiceAService } from './services/service-a.service';

@NgModule({
  imports: [
    CommonModule
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
    ServicesDefineComponent
  ],
})
export class ServicesDefineModule {

}
