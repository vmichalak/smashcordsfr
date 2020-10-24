import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ComponentsModule, ServicesModule} from './shared';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoutesModule} from './routes';
import {AppRoutes} from './app.routes';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    ServicesModule,
    RoutesModule,
    MaterialModule
  ],
  exports: [
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
