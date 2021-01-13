import { AppComponent } from '../../../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'did-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.scss']
})
export class ParentToChildComponent implements OnInit {

  public code1 = `
    @Component({
      selector: 'app-child',
      template: 'xxx'
    })
    export class ChildComponent {

      constructor(
          private readonly parentComponent: ParentComponent) {

      }

    }
  `;

  public get title() {
    return this.appComponent.title;
  }

  constructor(
      private readonly appComponent: AppComponent) {

  }

  ngOnInit(): void {
  }

  public changeAppTitle(title: string) {
    this.appComponent.title = title;
  }

}
