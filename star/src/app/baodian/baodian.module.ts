import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BaodianRoutingModule } from './baodian-routing.module';

import { IndexComponent } from './index/index.component';
import { BaodianDetailComponent } from './baodian-detail/baodian-detail.component';

@NgModule({
  imports: [ SharedModule, BaodianRoutingModule, FormsModule ],
  declarations: [ IndexComponent, BaodianDetailComponent ],
  providers: [ ]
})
export class BaodianModule { }
