import { FLOWER } from '../../injection-tokens';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'did-board-child-b',
  templateUrl: './board-child-b.component.html',
  styleUrls: ['./board-child-b.component.scss']
})
export class BoardChildBComponent {

  constructor(
      @Inject(FLOWER) public readonly flower: string,) {

  }

}
