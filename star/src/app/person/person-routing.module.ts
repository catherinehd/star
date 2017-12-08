import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CollectionComponent } from './collection/collection.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const personRoutes: Routes = [
  { path: 'person', component: IndexComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'about', component: AboutusComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(personRoutes) ],
  exports: [ RouterModule ]
})

export class PersonRoutingModule { }
