import { NgModule } from '@angular/core';

import { ComponentsModule, ServicesModule } from '../shared';
import {SearchComponent} from './search/search.component';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ComponentsModule,
    ServicesModule,
    MatCardModule,
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    SearchComponent,
  ],
  providers: [],
  exports: [
    SearchComponent,
  ]
})
export class RoutesModule {}
