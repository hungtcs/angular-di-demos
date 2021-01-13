import { Component } from '@angular/core';

@Component({
  selector: 'did-same-level-child',
  templateUrl: './same-level-child.component.html',
  styleUrls: ['./same-level-child.component.scss']
})
export class SameLevelChildComponent {

  public code1 = `
    <app-child-a #childA></app-child-a>
    <app-child-b [value]="childA.value"></app-child-a>
  `;

}
