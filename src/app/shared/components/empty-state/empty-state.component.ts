import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  public imageId = this.random(0, 1);

  private random(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
