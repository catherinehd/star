import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class ArticleService {

  constructor(private httpService: HttpService) { }

  getArticleList(page) {
    return this.httpService.getMethod({
      url: 'Astro/GetArticle',
      data: {
        page_index: page
      }
    });
  }

  getArticle(linkUrl) {
    return this.httpService.getMethod({
      url: 'Astro/GetArticleInfo',
      data: {
        link: linkUrl
      }
    });
  }

}
