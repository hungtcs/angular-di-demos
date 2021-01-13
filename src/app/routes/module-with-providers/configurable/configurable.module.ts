import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigurableModuleOptions, CONFIGURABLE_MODULE_OPTIONS } from './configurable.module.options';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ViewComponent,
  ],
  declarations: [
    ViewComponent,
  ],
})
export class ConfigurableModule {

  public static register(options: ConfigurableModuleOptions): ModuleWithProviders<ConfigurableModule> {
    return {
      ngModule: ConfigurableModule,
      providers: [
        {
          provide: CONFIGURABLE_MODULE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }

}
