import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { StarDetailComponent } from './star-detail/star-detail.component';

const homeRoutes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'star-detail/:name', component: StarDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ]
})

export class HomeRoutingModule { }
