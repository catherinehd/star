import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ArticleRoutingModule } from './article-routing.module';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [ SharedModule, ArticleRoutingModule, FormsModule ],
  declarations: [ IndexComponent ],
  providers: [ ]
})
export class ArticleModule { }
