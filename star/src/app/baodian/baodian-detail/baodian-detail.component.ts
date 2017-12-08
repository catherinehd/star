import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baodian-detail',
  templateUrl: './baodian-detail.component.html',
  styleUrls: ['./baodian-detail.component.styl']
})
export class BaodianDetailComponent implements OnInit {
  tabbar: boolean;
  movie: boolean;

  constructor() {
    this.tabbar = false;
    this.movie = true;
  }

  ngOnInit() {
  }

  gostar(star) {
    // 切换到对应星座
  }

}
