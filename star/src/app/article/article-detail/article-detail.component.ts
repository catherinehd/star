import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.styl']
})
export class ArticleDetailComponent implements OnInit {

  iscollect: boolean;
  collectmsg: string;
  articelTitle: string; // 文章标题
  content: string; // 具体内容
  author: string;  // 作者
  article: object;
  articlearr: any[] = []; // 列表对象数组
  collection = '';
  index: number; // 文章的标题的索引值

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private articelService: ArticleService) {
    this.article = {
      title: '',
      linkurl: '',
      author: ''
    };
  }

  ngOnInit() {
    this.articelService.getArticle(this.activatedRoute.snapshot.params.link.replace(/\\/g, '\/')).subscribe( res => {
      this.setArticle(res);
      // 获取文章信息；赋值到页面。确认收藏信息。
      this.collection = localStorage.getItem('collections');
      if (this.collection) {
        for (let i = 0; i <= this.collection.split(',').length; i++) {
          if (this.collection.indexOf(this.articelTitle) > -1) {
            this.iscollect = true;
            this.collectmsg = 'y';
          } else {
            this.iscollect = false;
            this.collectmsg = 'n';
          }
        }
      }
    });
  }

  setArticle(msg) {
    // 处理获取到的文章数据
    const a = JSON.stringify(msg).replace(/'/g , '"');
    this.articelTitle = msg.json().title;
    this.content = msg.json().content;
    this.author = msg.json().author;
  }

  onsave() {
    if (this.iscollect) {
      this.articlearr = [];
      this.collection = localStorage.getItem('collections').replace(/\}\,\{/g, '}{,}{');
      const listarr = this.collection.split('{,}');
      for (let i = 0; i < listarr.length; i++) {
        this.articlearr.push(eval('(' + listarr[i] + ')'));   // 添加到列表对象数组
      }
      for (let i = 0; i < this.articlearr.length; i++) {
         if (this.articlearr[i].title === this.articelTitle) {
           this.index = i;
         }
      }
      this.articlearr.splice(this.index, 1);
      localStorage.removeItem('collections');
      localStorage.setItem('collections',  JSON.stringify(this.articlearr).replace(/\[/g, '').replace(/\]/g, ''));
      this.iscollect = false;
      this.collectmsg = 'n';
    } else {
      this.article = {
        title: this.articelTitle,
        linkUrl: this.activatedRoute.snapshot.params.link,
        author: this.author
      };
      this.collection = localStorage.getItem('collections');
      if (!this.collection) {
        localStorage.setItem('collections' , JSON.stringify(this.article));
      } else {
        localStorage.setItem('collections' , this.collection + ',' + JSON.stringify(this.article));
      }
      this.iscollect = true;
      this.collectmsg = 'y';
    }
  }
}
