import { FLOWER } from '../../injection-tokens';
import { Component, Inject, OnInit, SkipSelf } from '@angular/core';

@Component({
  selector: 'did-board',
  providers: [
    {
      provide: FLOWER,
      useValue: '💐',
    }
  ],
  viewProviders: [
    {
      provide: FLOWER,
      useValue: '🌼',
    }
  ],
  styleUrls: ['./board.component.scss'],
  templateUrl: './board.component.html',
})
export class BoardComponent implements OnInit {

  constructor(
      @Inject(FLOWER) @SkipSelf() public readonly flower: string,) {

  }

  public ngOnInit(): void {

  }

}
