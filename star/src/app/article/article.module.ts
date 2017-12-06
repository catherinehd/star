import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ArticleRoutingModule } from './article-routing.module';

import { IndexComponent } from './index/index.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  imports: [ SharedModule, ArticleRoutingModule, FormsModule ],
  declarations: [ IndexComponent, ArticleDetailComponent ],
  providers: [ ]
})
export class ArticleModule { }
