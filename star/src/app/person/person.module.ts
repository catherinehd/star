import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';

import { IndexComponent } from './index/index.component';
import { CollectionComponent } from './collection/collection.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  imports: [ SharedModule, PersonRoutingModule, FormsModule ],
  declarations: [ IndexComponent, CollectionComponent, FeedbackComponent, AboutusComponent ],
  providers: [ ]
})
export class PersonModule { }
