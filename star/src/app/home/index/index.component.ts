import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  constructor(private navigateService: NavigateService) { }

  ngOnInit() {
    const defaultStar = localStorage.getItem('star');
    if (defaultStar) {
      this.navigateService.pushToRoute('./star-detail/' + defaultStar + '/today');
    }
  }

  goPage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}
