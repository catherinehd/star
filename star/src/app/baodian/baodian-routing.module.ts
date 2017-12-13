import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BaodianDetailComponent } from './baodian-detail/baodian-detail.component';

const baodianRoutes: Routes = [
  { path: 'baodian', component: IndexComponent },
  { path: 'baodian-detail/character', component: BaodianDetailComponent},
  { path: 'baodian-detail/love', component: BaodianDetailComponent},
  { path: 'baodian-detail/music', component: BaodianDetailComponent},
  { path: 'baodian-detail/movie', component: BaodianDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(baodianRoutes) ],
  exports: [ RouterModule ]
})

export class BaodianRoutingModule { }
