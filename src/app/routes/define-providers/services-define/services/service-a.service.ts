import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // 'root' | 'any' | 'platform'
})
export class ServiceAService {

  constructor() {

  }

  public getValue() {
    return 'A';
  }

}
