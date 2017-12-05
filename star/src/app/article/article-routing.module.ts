import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

const articleRoutes: Routes = [
  { path: './article', component: IndexComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(articleRoutes) ],
  exports: [ RouterModule ]
})

export class ArticleRoutingModule { }
