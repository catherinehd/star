import { Component, OnInit, OnChanges } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.styl']
})
export class CollectionComponent implements OnInit, OnChanges {
  finish: boolean;
  hascollection: boolean;
  choose = 2;
  choosenum: number;
  collectList: any;
  listarr: string[];
  btn: string;

  constructor(private navigateService: NavigateService) {
    this.finish = false;
    this.hascollection = true;
    this.choosenum = 0;
    this.btn = 'Check all';
  }

  ngOnInit() {
    this.collectList = localStorage.getItem('collections');
    this.listarr = this.collectList.split(',').slice(1);
  }

  ngOnChanges() {
    this.choosenum = this.choosenum;
    this.collectList = localStorage.getItem('collections');
  }

  // 进入编辑页面
  onedit() {
    if (!this.hascollection) return;
    this.finish = true;
  }

  // 进入列表状态
  onfinish() {
    this.finish = false;
  }

  // 可以编辑的时候进入编辑状态，否则进入对应页面
  goPage(url) {
    if (this.finish) {
      // 相应checkbox变为checked状态
      let n = 0;
      for (let i = 0 ; i < this.listarr.length; i++) {
        if (document.querySelectorAll('input')[i].checked === true) {
          n += 1;
        }
      }
      this.choosenum = n;
    } else {
      this.navigateService.push();
      this.navigateService.pushToRoute(url);
    }
  }

  // 选中所有列表
  chooseall() {
    let n = 0;
    for (let i = 0 ; i < this.listarr.length; i++) {
      if (document.querySelectorAll('input')[i].checked === true) {
        n++;
      }
    }
    if (n === this.listarr.length) {
      this.choosenum = 0;
      this.btn = 'Check all';
      for (let i = 0 ; i < this.listarr.length; i++) {
        document.querySelectorAll('input')[i].checked = false;
      }
    } else {
      this.choosenum = this.listarr.length;
      this.btn = 'Cancel';
      for (let i = 0 ; i < this.listarr.length; i++) {
        document.querySelectorAll('input')[i].checked = true;
      }
    }
  }

 }
