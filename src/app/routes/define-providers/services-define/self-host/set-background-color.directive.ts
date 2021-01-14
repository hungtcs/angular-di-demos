import { Host, HostBinding, Inject, Self, SkipSelf } from '@angular/core';
import { Directive } from '@angular/core';
import { BACKGROUND_COLOR } from './injection-tokens';

@Directive({
  selector: '[didSetBackgroundColor]',
})
export class SetBackgroundColorDirective {

  @HostBinding('style.background-color')
  public get backgroundColor() {
    return this._backgroundColor;

    // //  from v4.0.0 use Type or InjectionToken
    // return this.injector.get('backgroundColor');
  }

  constructor(
      // @Inject(BACKGROUND_COLOR) private readonly _backgroundColor: string,
      // @Inject(BACKGROUND_COLOR) @SkipSelf() private readonly _backgroundColor: string,
      // @Inject(BACKGROUND_COLOR) @Self() private readonly _backgroundColor: string,
      @Inject(BACKGROUND_COLOR) @Host() private readonly _backgroundColor: string,
      ) {

  }

}
