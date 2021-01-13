import { Component, OnInit } from '@angular/core';
import { ParentToChildComponent } from '../parent-to-child.component';

@Component({
  selector: 'did-ptc-child1',
  templateUrl: './ptc-child1.component.html',
  styleUrls: ['./ptc-child1.component.scss']
})
export class PtcChild1Component implements OnInit {

  public get code() {
    return this.parentToChildComponent.code1;
  }

  constructor(
      private readonly parentToChildComponent: ParentToChildComponent) {

  }

  public ngOnInit(): void {

  }

}
