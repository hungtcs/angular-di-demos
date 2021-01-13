import { InjectionToken } from '@angular/core';

export const CONFIGURABLE_MODULE_OPTIONS = new InjectionToken('configurable module options injection token');

export interface ConfigurableModuleOptions {
  textColor: string;
  backgroundColor: string;
}
