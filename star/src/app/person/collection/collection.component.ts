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
  choosenum: number;    // 选择了的文章数目
  collectList: any;   // 本地存储的字符串列表
  listarr: string;     // 字符串数组格式化
  articlearr: any[] = [];   // 对象数组
  btn: string;
  article: object;  // 文章对象

  constructor(private navigateService: NavigateService) {
    this.finish = false;
    this.hascollection = true;
    this.choosenum = 0;
    this.btn = 'Check all';
  }

  ngOnInit() {
    if (localStorage.getItem('collections')) {
      this.hascollection = true;
      this.collectList = localStorage.getItem('collections').replace(/\}\,\{/g, '}{,}{');
      this.listarr = this.collectList.split('{,}');
      for (let i = 0; i < this.listarr.length; i++) {
        this.articlearr.push(eval('(' + this.listarr[i] + ')'));   // 添加到列表对象数组
      }
      for (let i = 0 ; i < this.articlearr.length; i++) {
        // 将路径里面的 \ 换成 / ,特殊符号在这里需要转义
        this.articlearr[i].linkUrl = this.articlearr[i].linkUrl.replace(/\//g, '\\');
      }
    } else {
      this.hascollection = false;
    }
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
      this.collectList = localStorage.getItem('collections').replace(/\}\,\{/g, '}{,}{');
      this.listarr = this.collectList.split('{,}');
      this.choosenum = 1;
      for (let i = 0 ; i < this.listarr.length - 1; i++) {
        if (document.querySelectorAll('input')[i].checked === true) {
          // choosenum
        }
      }
      if (this.choosenum === this.listarr.length) {
        this.btn = 'Cancel';
      } else {
        this.btn = 'Check all';
      }
    } else {
      this.navigateService.push();
      this.navigateService.pushToRoute(url);
    }
  }

  // 选中所有列表
  chooseall() {
    if (!localStorage.getItem('collections')) return;
    this.collectList = localStorage.getItem('collections').replace(/\}\,\{/g, '}{,}{');
    this.listarr = this.collectList.split('{,}');
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

  // 删除选中项目
  delete() {
    if (this.choosenum === 0) return;
    this.choose = 2;
    this.articlearr = [];
    this.collectList = '';
    for (let i = 0 ; i < this.listarr.length; i++) {
      if (document.querySelectorAll('input')[i].checked === false) {
        this.article = {
          title: document.getElementsByClassName('smalltitle')[i].innerHTML.replace(/\n/g, ''),
          linkUrl: document.querySelectorAll('input')[i].id,
          author: document.getElementsByClassName('author')[i].innerHTML.replace(/\n/g, '')
        };
        this.collectList +=  JSON.stringify(this.article) + ',';
        this.articlearr.push(this.article);
      }
    }
    localStorage.setItem('collections' , this.collectList.substring(0 , this.collectList.length - 1));
    this.choosenum = 0;
    this.btn = 'Check all';
    if (!localStorage.getItem('collections')) {
      this.hascollection = false;
      this.finish = false;
    } else {
      this.hascollection = true;
    }
  }

 }
