import {Component, OnInit, NgZone} from '@angular/core';
import { NavigateService } from './service/navigate.service';
import { HttpService } from './service/http.service';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'app-root',
  template: `
    <p class="offline-tip" *ngIf="isOffline" [style.top.px]="top" (click)="isOffline = false">当前无网络连接</p>
    <router-outlet></router-outlet>`,
})

export class AppComponent implements OnInit {
  top: number;
  ad: any;
  isOffline: boolean;
  constructor(private ngZone: NgZone,
              private navigateService: NavigateService,
              private httpService: HttpService) {}

  ngOnInit() {
    try {
      if (cordova) {
        document.addEventListener('deviceready', () => {
          this.hideScreen();
          this.ad = new Ad();
          this.ad.ad_func();
        }, false);
        setTimeout(() => {
          this.pushToFalsePage();
        }, 3000);
        // this.pushToFalsePage();
      }
    } catch (e) {
      this.pushToFalsePage();
      console.log('app----', e);
    }
  }

  pushToFalsePage() {
    this.hideScreen();
    this.navigateService.pushToRoute('./home');
    this.navigateService.storeNextRoute('./home');
  }

  hideScreen() {
    try {
      navigator.splashscreen.hide();
    }catch (e) {
      console.log('screen----', e);
    }
  }

  onDeviceReady() {
    this.listenNetInfo();
  }

  setOfflineTip() {
    try {
      if (cordova) {
        this.top = (cordova.platformId === 'android') ? 44 : 64;
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      }
    } catch (e) {
      console.log('appInitCordova----', e);
      this.top = 44;
    }
  }

  listenNetInfo() {
    document.addEventListener('offline', () => this.setOffline(true), false);
    document.addEventListener('online', () => this.setOffline(false), false);
  }

  setOffline(status: boolean) {
    this.ngZone.run(() => this.isOffline = status);
  }
}
