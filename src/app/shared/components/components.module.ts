import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiscordCardComponent} from './discord-card/discord-card.component';
import {MaterialModule} from '../../material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    DiscordCardComponent,
  ],
  exports: [
    DiscordCardComponent,
  ]
})
export class ComponentsModule {}
