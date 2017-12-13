import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.styl']
})
export class CollectionComponent implements OnInit {
  finish: boolean;
  hascollection: boolean;
  choose = 2;
  choosenum: number;
  collectList: any;

  constructor(private navigateService: NavigateService) {
    this.finish = false;
    this.hascollection = true;
    this.choosenum = 0;
  }

  ngOnInit() {
    console.log(localStorage.getItem('collections'));
  }

  onedit() {
    this.finish = true;
  }

  onfinish() {
    this.finish = false;
  }

  goPage(url) {
    if (this.finish) {
      // 相应checkbox变为checked状态
      // console.log(url.split('/')[url.split('/').length - 1]); // 获取该文章的id或者标题；
      // if ( document.getElementById('1').checked === true) {
      //   document.getElementById('1').checked = false;
      // } else {
      //   document.getElementById('1').checked = true;
      // }
    } else {
      this.navigateService.push();
      this.navigateService.pushToRoute(url);
    }
  }

  chooseall() {
    this.collectList = window.localStorage.getItem('collections'); // 获取收藏列表
  }

 }
