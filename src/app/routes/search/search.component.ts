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
  public local = this.service.local;
  public others = this.service.others;

  public isEmpty(): boolean {
    return this.characters.length <= 0 && this.local.length <= 0 && this.others.length <= 0;
  }

  public onSearchValueChange(): void {
    const search = this.searchValue.toLowerCase();
    this.characters = this.service.characters.filter(it => it.name.toLowerCase().includes(search) ||
      it.keywords.map(kw => kw.toLowerCase()).filter(kw => kw.includes(search)).length > 0);
    this.local = this.service.local.filter(it => it.name.toLowerCase().includes(search) ||
      it.keywords.map(kw => kw.toLowerCase()).filter(kw => kw.includes(search)).length > 0);
    this.others = this.service.others.filter(it => it.name.toLowerCase().includes(search) ||
      it.keywords.map(kw => kw.toLowerCase()).filter(kw => kw.includes(search)).length > 0);
  }
}
