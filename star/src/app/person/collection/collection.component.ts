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

  constructor(private navigateService: NavigateService) {
    this.finish = false;
    this.hascollection = true;
  }

  ngOnInit() {
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
    } else {
      this.navigateService.push();
      this.navigateService.pushToRoute(url);
    }
  }
 }
