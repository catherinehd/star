import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-star-detail',
  templateUrl: './star-detail.component.html',
  styleUrls: ['./star-detail.component.styl']
})
export class StarDetailComponent implements OnInit {
  tabbar: boolean;
  starname: string;
  smallname: string;  // 名称小写开头
  day: any;

  constructor(private navigateService: NavigateService,
              private activedRoute: ActivatedRoute) {
    this.tabbar = false;
  }

  ngOnInit() {
    const choosedstar = this.activedRoute.snapshot.params.name;
    this.starname = choosedstar[0].toUpperCase() + choosedstar.substring(1);
    this.smallname = choosedstar;
    this.day = new Date();
    this.day = this.day.toLocaleString().substring(0 , 10).replace(/\//g, '-');
    const defaultStar = localStorage.getItem('star');
    if (!defaultStar) {
      localStorage.setItem( 'star' , choosedstar );
    }
  }

  gostar(msg) {
    // 跳转到对应星座页面
    this.navigateService.push();
    this.navigateService.pushToRoute('./star-detail/' + msg + '/today');
    this.tabbar = false;
    this.starname = msg[0].toUpperCase() + msg.substring(1);
    this.smallname = msg;
  }

}
