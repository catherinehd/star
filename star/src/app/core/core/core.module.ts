import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpService } from '../../service/http.service';
import { NavigateService } from '../../service/navigate.service';
import { DeviceService } from '../../service/device.service';
import { PersonService } from '../../service/person.service';
import { BaodianService } from '../../service/baodian.service';
import { ArticleService } from '../../service/article.service';
import { XingyunService } from '../../service/xingyun.service';

@NgModule({
  imports: [
    CommonModule, HttpModule, BrowserAnimationsModule
  ],
  providers: [ NavigateService, HttpService, DeviceService, PersonService, BaodianService, ArticleService, XingyunService ],
  exports: [ HttpModule, BrowserAnimationsModule ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
