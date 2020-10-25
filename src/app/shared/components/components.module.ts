import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiscordCardComponent} from './discord-card/discord-card.component';
import {MaterialModule} from '../../material.module';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {EmptyStateComponent} from './empty-state/empty-state.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    DiscordCardComponent,
    FooterComponent,
    EmptyStateComponent,
  ],
  exports: [
    DiscordCardComponent,
    FooterComponent,
    EmptyStateComponent,
  ]
})
export class ComponentsModule {}
