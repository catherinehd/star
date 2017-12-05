import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [
    TabComponent
  ],
  exports: [
    TabComponent, ReactiveFormsModule
  ]
})

export class SharedModule { }
