import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const articleRoutes: Routes = [
  { path: 'article', component: IndexComponent },
  { path: 'article-detail/:link', component: ArticleDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(articleRoutes) ],
  exports: [ RouterModule ]
})

export class ArticleRoutingModule { }
