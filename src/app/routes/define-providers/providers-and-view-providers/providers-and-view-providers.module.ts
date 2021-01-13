import { FLOWER } from '../injection-tokens';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { BoardChildAComponent } from './board-child-a/board-child-a.component';
import { BoardChildBComponent } from './board-child-b/board-child-b.component';
import { ProvidersAndViewProvidersComponent } from './providers-and-view-providers.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ProvidersAndViewProvidersComponent,
  ],
  providers: [
    // If Angular doesn't find the provider in any ElementInjectors,
    // it goes back to the element where *the request originated* and looks in the ModuleInjector hierarchy.
    // If Angular still doesn't find the provider, it throws an error.
    // https://angular.io/guide/hierarchical-dependency-injection#resolution-rules
    {
      provide: FLOWER,
      useValue: '🌷',
    },
  ],
  declarations: [
    BoardComponent,
    BoardChildAComponent,
    BoardChildBComponent,
    ProvidersAndViewProvidersComponent,
  ],
})
export class ProvidersAndViewProvidersModule {

}
