import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { IndexComponent } from './index/index.component';
import { StarDetailComponent } from './star-detail/star-detail.component';

@NgModule({
  imports: [ SharedModule, HomeRoutingModule, FormsModule ],
  declarations: [ IndexComponent, StarDetailComponent ],
  providers: [ ]
})
export class HomeModule { }
