import { Component } from '@angular/core';
import { BACKGROUND_COLOR } from './injection-tokens';

@Component({
  selector: 'did-self-host',
  styleUrls: ['./self-host.component.scss'],
  // providers: [
  //   {
  //     // @tips 此处介绍`InjectionToken`和直接使用字符串的区别
  //     provide: BACKGROUND_COLOR,
  //     // 橙色
  //     useValue: 'lightsalmon'
  //   },
  // ],
  viewProviders: [
    {
      // @tips 此处介绍`InjectionToken`和直接使用字符串的区别
      provide: BACKGROUND_COLOR,
      // 蓝色
      useValue: 'lightblue'
    },
  ],
  templateUrl: './self-host.component.html',
})
export class SelfHostComponent {

}
