import { Injectable } from '@angular/core';
import { ServicesDefineModule } from '../services-define.module';

/**
 * you can't use this service in component
 * ERROR: circular dependencies
 * ERROR: ReferenceError: Cannot access 'ServicesDefineModule' before initialization
 * @see https://github.com/angular/angular/issues/25784
 */
@Injectable({
  providedIn: ServicesDefineModule,
})
export class ServiceBService {

  constructor() {

  }

  public getValue() {
    return 'B';
  }

}
