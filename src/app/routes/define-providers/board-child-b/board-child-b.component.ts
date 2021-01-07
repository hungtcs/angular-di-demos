import { Component, Inject, OnInit } from '@angular/core';
import { FLOWER } from '../injection-tokens';

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
