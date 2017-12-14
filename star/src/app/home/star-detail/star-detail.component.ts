import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from '../../service/navigate.service';
import { XingyunService } from '../../service/xingyun.service';
import { XingyunModel } from '../../model/xingyun.model';

@Component({
  selector: 'app-star-detail',
  templateUrl: './star-detail.component.html',
  styleUrls: ['./star-detail.component.styl']
})
export class StarDetailComponent implements OnInit, OnChanges {
  type: number;
  tabbar: boolean;
  starname: string;
  smallname: string;  // 名称小写开头
  day: any;
  xingyundetail: XingyunModel = new XingyunModel();
  alllightnum: string[];
  allthinnum: string[];
  lovelightnum: string[];
  lovethinnum: string[];
  worklightnum: string[];
  workthinnum: string[];
  moneylightnum: string[];
  moneythinnum: string[];

  constructor(private navigateService: NavigateService,
              private activedRoute: ActivatedRoute,
              private xingyunService: XingyunService) {
    this.tabbar = false;
    this.type = 0;
  }

  ngOnInit() {
    const choosedstar = this.activedRoute.snapshot.params.name;  // 第一次点击进入的星座
    this.starname = choosedstar[0].toUpperCase() + choosedstar.substring(1);
    this.smallname = choosedstar;
    this.day = new Date();
    this.day = this.day.toLocaleString().substring(0 , 10).replace(/\//g, '-'); // 获取当天日期
    let defaultStar = localStorage.getItem('star');
    if (!defaultStar) {
      defaultStar = choosedstar;
      localStorage.setItem( 'star' , choosedstar );    // 第一次点击进入的星座作为默认星座
    }
    this.xingyunService.getXingyun(defaultStar, 0).subscribe( res => {
      this.setscore(res);
    });
  }

  ngOnChanges() {
    this.xingyundetail = this.xingyundetail;
  }

  // tab中点击星运的时候跳转到默认星座
  godefault() {
    this.type = 0;
    const defaultStar = localStorage.getItem('star');
    this.starname = defaultStar[0].toUpperCase() + defaultStar.substring(1);
    this.xingyunService.getXingyun(defaultStar, 0).subscribe( res => {
      this.setscore(res);
    });
  }

  // 查看不同时间的星运
  changedate(date) {
    const choosedstar = this.activedRoute.snapshot.params.name;
    this.settime(date);
    this.xingyunService.getXingyun(choosedstar, this.type).subscribe( res => {
      this.setscore(res);
    });
  }

  gostar(msg) {
    // 跳转到对应星座页面
    this.type = 0;
    this.navigateService.push();
    this.navigateService.pushToRoute('./star-detail/' + msg);
    this.tabbar = false;
    this.starname = msg[0].toUpperCase() + msg.substring(1);
    this.smallname = msg;
    this.xingyunService.getXingyun(msg, 0).subscribe( res => {
      this.setscore(res);
    });
  }

  // 将各项分数设置到页面
  setscore(res) {
    this.xingyundetail = new XingyunModel(res.json());
    this.alllightnum = new Array(res.json().score);
    this.allthinnum = new Array(5 - res.json().score);
    this.lovelightnum = new Array(res.json().love_score);
    this.lovethinnum = new Array(5 - res.json().love_score);
    this.worklightnum = new Array(res.json().work_score);
    this.workthinnum = new Array(5 - res.json().work_score);
    this.moneylightnum = new Array(res.json().rich_score);
    this.moneythinnum = new Array(5 - res.json().rich_score);
  }

  // 获取需要得到星运的时间
  settime(time) {
    switch (time) {
      case 'today':
        this.type = 0;
        break;
      case 'tomorrow':
        this.type = 1;
        break;
      case 'week':
        this.type = 2;
        break;
      case 'month':
        this.type = 3;
        break;
      case 'year':
        this.type = 4;
        break;
      default:
        break;
    }
  }

}
