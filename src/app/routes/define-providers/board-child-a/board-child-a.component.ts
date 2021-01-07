import { Component, Inject, OnInit } from '@angular/core';
import { FLOWER } from '../injection-tokens';

@Component({
  selector: 'did-board-child-a',
  styleUrls: ['./board-child-a.component.scss'],
  templateUrl: './board-child-a.component.html',
})
export class BoardChildAComponent {

  constructor(
      @Inject(FLOWER) public readonly flower: string,) {

  }

}
