import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    RouterModule,
    RoutesModule,
    BrowserModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
})
export class AppModule {

}
