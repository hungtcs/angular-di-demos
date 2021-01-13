import { FLOWER } from './injection-tokens';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDefineModule } from './services-define/services-define.module';
import { DefineProvidersComponent } from './define-providers.component';
import { DefineProvidersRoutingModule } from './define-providers-routing.module';
import { ProvidersAndViewProvidersModule } from './providers-and-view-providers/providers-and-view-providers.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesDefineModule,
    DefineProvidersRoutingModule,
    ProvidersAndViewProvidersModule,
  ],
  providers: [
    // 此处优先级高于 ProvidersAndViewProvidersModule 中的定义
    // 因为 ProvidersAndViewProvidersModule 是被 DefineProvidersModule import进来的
    // 注意文档中的 *the request originated* 而不是 *the defind originated*
    // {
    //   provide: FLOWER,
    //   useValue: '🥦',
    // },
  ],
  declarations: [
    DefineProvidersComponent,
  ],
})
export class DefineProvidersModule { }
