import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'did-father-and-son',
  templateUrl: './father-and-son.component.html',
  styleUrls: ['./father-and-son.component.scss']
})
export class FatherAndSonComponent implements OnInit {

  public code1 = `
    <app-parent>
      <app-child value="124"></app-child>
    </app-parent>
  `;

  public code2 = `
    <app-parent>
      <app-child (valueChange)="value = $event;"></app-child>
    </app-parent>
  `;

  public code3 = `
    <app-parent>
      <app-child [(value)]="value"></app-child>
    </app-parent>
  `;

  constructor() {

  }

  public ngOnInit(): void {
  }

}
