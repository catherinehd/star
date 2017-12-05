import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

const baodianRoutes: Routes = [
  { path: 'baodian', component: IndexComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(baodianRoutes) ],
  exports: [ RouterModule ]
})

export class BaodianRoutingModule { }
