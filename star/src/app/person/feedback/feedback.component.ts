import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.styl']
})
export class FeedbackComponent implements OnInit {
  allnum: number;
  havenum: number;

  constructor() {
    this.allnum = 200;
    this.havenum = 200;
  }

  ngOnInit() {
  }

  getwordnum() {
    // 得到填入的字符数
    this.havenum = 200;
  }

}
