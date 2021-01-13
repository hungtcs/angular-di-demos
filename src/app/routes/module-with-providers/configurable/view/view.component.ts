import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { ConfigurableModuleOptions, CONFIGURABLE_MODULE_OPTIONS } from '../configurable.module.options';

@Component({
  selector: 'did-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @HostBinding('style.color')
  public get textColor() {
    return this.options.textColor;
  }

  @HostBinding('style.background-color')
  public get backgroundColor() {
    return this.options.backgroundColor;
  }

  constructor(
      @Inject(CONFIGURABLE_MODULE_OPTIONS) private readonly options: ConfigurableModuleOptions) {

  }

  ngOnInit(): void {
  }

}
