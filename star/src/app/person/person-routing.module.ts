import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

const personRoutes: Routes = [
  { path: 'person', component: IndexComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(personRoutes) ],
  exports: [ RouterModule ]
})

export class PersonRoutingModule { }
