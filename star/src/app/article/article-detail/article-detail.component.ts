import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.styl']
})
export class ArticleDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onsave() {
    console.log('save');
  }
}
