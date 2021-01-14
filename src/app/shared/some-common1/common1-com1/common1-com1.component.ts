import { Component, OnInit } from '@angular/core';
import { Common2Service } from '../../some-common2/common2.service';

@Component({
  selector: 'did-common1-com1',
  styleUrls: ['./common1-com1.component.scss'],
  templateUrl: './common1-com1.component.html',
})
export class Common1Com1Component implements OnInit {

  public get value() {
    return this.common2Service.getValue();
  }

  constructor(
      private readonly common2Service: Common2Service) {

  }

  ngOnInit(): void {
  }

}
