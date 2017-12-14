import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

   pageSize: number;
   articleList: any[];
   linkurl: string;
   isCompleted = false;
  isPageLoading = true;
  isLoading: boolean;

  constructor(private navigateService: NavigateService,
              private articleService: ArticleService) {
    this.pageSize = 1;
  }

  ngOnInit() {
    this.articleService.getArticleList(this.pageSize).subscribe( res => {
      this.articleList = res.json();
      for (let i = 0 ; i < this.articleList.length; i++) {
        // 将路径里面的 \ 换成 / ,特殊符号在这里需要转义
      this.articleList[i].link = this.articleList[i].link.replace(/\//g, '\\');
    }
      const listNum = this.articleList.length;
      if (listNum < 20) {
        this.pageSize ++;
        this.articleService.getArticleList(this.pageSize).subscribe( res2 => {
          this.articleList = this.articleList.concat(res2.json());
          for (let i = 0 ; i < this.articleList.length; i++) {
            // 将路径里面的 \ 换成 / ,特殊符号在这里需要转义
            this.articleList[i].link = this.articleList[i].link.replace(/\//g, '\\');
          }
        });
      }
    });
  }

  goPage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  getList(pagenum) {
    this.articleService.getArticleList(pagenum).subscribe( res => {
      this.isPageLoading = false;
      this.isLoading = false;
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
