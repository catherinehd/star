import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DevicePaddingDirective } from '../directives/device-padding.directives';
import { FastClickDirective } from '../directives/fast-click.directive';
import { TelFormatDirective } from '../directives/tel-format.directive';
import { TouchLoadingDirective } from '../directives/touch-loading.directive';

import { TabComponent } from './tab/tab.component';
import { NavComponent} from './nav/nav.component';
import { FlyMsgComponent } from './fly-msg/fly-msg.component';
import { ListLoadingComponent } from './list-loading/list-loading.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [
    TabComponent, NavComponent, DevicePaddingDirective, FastClickDirective, TelFormatDirective, TouchLoadingDirective,
    FlyMsgComponent, ListLoadingComponent
  ],
  exports: [
    CommonModule, RouterModule, TabComponent, NavComponent, ReactiveFormsModule, DevicePaddingDirective, FastClickDirective,
    ListLoadingComponent,
    TelFormatDirective, FlyMsgComponent, TouchLoadingDirective
  ]
})

export class SharedModule { }
