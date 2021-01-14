import { Component } from '@angular/core';
import { BACKGROUND_COLOR } from '../injection-tokens';

@Component({
  selector: 'did-child1',
  styleUrls: ['./child1.component.scss'],
  templateUrl: './child1.component.html',
  // providers: [
  //   {
  //     provide: BACKGROUND_COLOR,
  //     // 绿色
  //     useValue: 'lightseagreen'
  //   },
  // ],
  viewProviders: [
    {
      provide: BACKGROUND_COLOR,
      // 红色
      useValue: 'lightcoral'
    },
  ],
})
export class Child1Component {

}
