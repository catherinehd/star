import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit, OnChanges, OnDestroy {

   pageSize: number;
   articleList: any[];
   linkurl: string;
   isCompleted = false;
  isPageLoading = true;
  isLoading: boolean;
    // cache: object;

  constructor(private navigateService: NavigateService,
              private articleService: ArticleService) {
    this.pageSize = 1;
    // this.cache = {
    //   list: '',
    //   complete: '',
    //   page: ''
    // };
  }

  ngOnInit() {
    // this.cache = this.articleService.getCacheList();
    this.articleService.getArticleList(this.pageSize).subscribe( res => {
      this.articleList = res.json();
      for (let i = 0 ; i < this.articleList.length; i++) {
        // 将路径里面的 \ 换成 / ,特殊符号在这里需要转义
      this.articleList[i].link = this.articleList[i].link.replace(/\//g, '\\');
    }
      if (res.json().length < 10) { this.isCompleted = true; }
    });
  }

  ngOnChanges(changes) {
  }

  ngOnDestroy() {
    this.articleService.storeArticleList(this.articleList, this.isCompleted, this.pageSize);
  }

  goPage(url) {
    // 储存此时srolltop的值，方便返回的到这个位置
    // localStorage.setItem('scrollTop' , document.getElementsByClassName('article-sec')[0].scrollTop.toString());
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  getList(pagenum) {
    this.articleService.getArticleList(pagenum).subscribe( res => {
      this.isPageLoading = false;
      this.isLoading = false;
      if (res.json().length < 10) { this.isCompleted = true; }
      this.articleList = this.articleList.concat(res.json());
      for (let i = 0 ; i < this.articleList.length; i++) {
        // 将路径里面的 \ 换成 / ,特殊符号在这里需要转义
        this.articleList[i].link = this.articleList[i].link.replace(/\//g, '\\');
      }
    });
  }

  canLoad() {
    // 下滑加载
    this.isLoading = true;
    this.getList(this.pageSize = this.pageSize + 1);
  }

}
