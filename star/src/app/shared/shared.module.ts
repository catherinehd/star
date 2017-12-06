import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DevicePaddingDirective } from '../directives/device-padding.directives';
import { FastClickDirective } from '../directives/fast-click.directive';

import { TabComponent } from './tab/tab.component';
import { NavComponent} from './nav/nav.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [
    TabComponent, NavComponent, DevicePaddingDirective, FastClickDirective
  ],
  exports: [
    CommonModule, RouterModule, TabComponent, NavComponent, ReactiveFormsModule, DevicePaddingDirective, FastClickDirective
  ]
})

export class SharedModule { }
