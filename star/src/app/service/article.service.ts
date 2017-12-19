import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class ArticleService {

  cachelist: object;
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

  storeArticleList(list, complete, page) {
    this.cachelist =  new ArticleCache(list, complete, page);
    // console.log(this.cachelist);
  }

  getCacheList() {
    return this.cachelist;
  }

}

class ArticleCache {
  constructor(public list: any[],
              public complete?: boolean,
              public page?: number) {}
}
