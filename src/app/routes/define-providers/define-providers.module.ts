import { FLOWER } from './injection-tokens';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { DefineProvidersRoutingModule } from './define-providers-routing.module';
import { BoardChildAComponent } from './board-child-a/board-child-a.component';
import { DefineProvidersComponent } from './define-providers.component';
import { BoardChildBComponent } from './board-child-b/board-child-b.component';

@NgModule({
  imports: [
    CommonModule,
    DefineProvidersRoutingModule,
  ],
  providers: [
    {
      provide: FLOWER,
      useValue: '🌷',
    },
  ],
  declarations: [
    BoardComponent,
    BoardChildAComponent,
    BoardChildBComponent,
    DefineProvidersComponent,
  ],
})
export class DefineProvidersModule { }
