import { NgModule } from '@angular/core';

import {SmashcordHubService} from './smashcord-hub/smashcord-hub.service';

@NgModule({
  providers: [
    SmashcordHubService
  ]
})
export class ServicesModule {}
