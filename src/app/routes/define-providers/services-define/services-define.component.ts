import { Component, OnInit } from '@angular/core';
import { BACKGROUND_COLOR } from './self-host/injection-tokens';
import { ServiceAService } from './services/service-a.service';
// import { ServiceBService } from './services/service-b.service';
import { ServiceCService } from './services/service-c.service';

@Component({
  selector: 'did-services-define',
  templateUrl: './services-define.component.html',
  styleUrls: ['./services-define.component.scss'],
  viewProviders: [
    {
      provide: BACKGROUND_COLOR,
      useValue: 'red'
    },
  ],
})
export class ServicesDefineComponent implements OnInit {

  public get valueA() {
    return this.serviceA.getValue();
  }

  // public get valueB() {
  //   return this.serviceB.getValue();
  // }

  public get valueC() {
    return this.serviceC.getValue();
  }

  public get serviceAEqulasServiceC() {
    return this.serviceA === this.serviceC;
  }

  constructor(
      private readonly serviceA: ServiceAService,
      // private readonly serviceB: ServiceBService,
      private readonly serviceC: ServiceCService,) {

  }

  public ngOnInit(): void {

  }

}
