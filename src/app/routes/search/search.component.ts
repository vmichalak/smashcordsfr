import { Component } from '@angular/core';
import {SmashcordHubService} from '../../shared/services/smashcord-hub/smashcord-hub.service';

@Component({
  selector: 'app-characters',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private readonly service = new SmashcordHubService();

  public searchValue: string;
  public characters = this.service.characters;

  public onSearchValueChange(): void {
    this.characters = this.service.characters.filter(it => it.name.includes(this.searchValue));
  }
}
