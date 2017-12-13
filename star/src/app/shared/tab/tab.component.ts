import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.styl']
})
export class TabComponent implements OnInit {
  homeurl: string;

  constructor() {
    this.homeurl = 'home';
  }

  ngOnInit() {
    const defaultStar = localStorage.getItem('star');
    if (defaultStar) {
      this.homeurl = '/star-detail/' + defaultStar + '/today';
    }
  }

}
