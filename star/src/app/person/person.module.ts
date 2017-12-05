import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [ SharedModule, PersonRoutingModule, FormsModule ],
  declarations: [ IndexComponent ],
  providers: [ ]
})
export class PersonModule { }
