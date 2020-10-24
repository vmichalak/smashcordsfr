import {Component, Input} from '@angular/core';
import {Discord} from '../../services/smashcord-hub/models/discord';

@Component({
  selector: 'app-discord-card',
  templateUrl: './discord-card.component.html',
  styleUrls: ['./discord-card.component.scss']
})
export class DiscordCardComponent {
  mouseHovered = false;

  @Input()
  public discord: Discord;

  click(): void {
    window.open('https://discord.gg/' + this.discord.invitationId, '_blank');
  }
}
