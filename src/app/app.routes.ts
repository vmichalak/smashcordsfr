import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import {SearchComponent} from './routes/search/search.component';

const ROUTES: Routes = [
  { path: '', component: SearchComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ]
})
export class AppRoutes {}
