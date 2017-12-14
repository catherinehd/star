import { Component, OnInit, OnChanges } from '@angular/core';
import { BaodianService } from '../../service/baodian.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-baodian-detail',
  templateUrl: './baodian-detail.component.html',
  styleUrls: ['./baodian-detail.component.styl']
})
export class BaodianDetailComponent implements OnInit, OnChanges {
  baodianTitle: string;
  tabbar: boolean;
  movie: boolean;
  starDetail: any;
  queryUrl: string;
  defaultStar: string;

  constructor(private baodianService: BaodianService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.tabbar = false;
    this.movie = false;
    this.starDetail = {
      name: '',
      date: '',
      img: '',
      content: '',
      title: '',
      movieimg: '',
      brief: '',
      reasons: ''
    };
  }

  ngOnInit() {
    this.defaultStar = localStorage.getItem('star');
    if (!this.defaultStar) this.defaultStar = 'aries';
    this.setStarDateImg(this.defaultStar); // 设置星座的时间和图片
    this.queryUrl = location.pathname.split('/')[2];
    if (this.queryUrl === 'character') {
      this.baodianTitle = 'Constellation character';
      // 请求charatro对应星座的数据
      this.baodianService.getBaodianInfo(this.defaultStar, 1).subscribe( res => {
        this.starDetail.content = res.json();
      });
    } else if (this.queryUrl === 'love') {
      this.baodianTitle = 'The constellation of love';
      // 请求love对应星座的数据
      this.baodianService.getBaodianInfo(this.defaultStar, 2).subscribe( res => {
        this.starDetail.content = res.json();
      });
    } else if (this.queryUrl === 'music') {
      this.baodianTitle = 'Music style';
      // 请求love对应星座的数据
      this.baodianService.getBaodianInfo(this.defaultStar, 3).subscribe( res => {
        this.starDetail.content = res.json();
      });
    } else if (this.queryUrl === 'movie') {
      this.baodianTitle = 'The movie is recommended';
      this.movie = true;
      // 请求love对应星座的数据
      this.baodianService.getBaodianInfo(this.defaultStar, 4).subscribe( res => {
        console.log(res);
      });
    }
    // this.starDetail = {
    //   name: 'Taurus',
    //   date: '3.1-4.4',
    //   img: 'assets/image/taurus.svg',
    //   content: 'A slow sign. All things always considered before filtering, belonging to the late form of the big, the ' +
    //   'sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to win.',
    //   title: '《Wind and rain harvard road》',
    //   movieimg: 'assets/image/dianying@2x.png',
    //   brief: 'The film director is origin and desolate, as parents age eight drugs began begging, at the age of 15, her ' +
    //   'mother died of AIDS, then father into a shelter, dispossessed her 17 years old started learning high school courses, ' +
    //   'with only 2 years of optical finished high school four years course, won the New York times first-class scholarship' +
    //   ' in 1996 and went to harvard to study.',
    //   reasons: 'Aries are not afraid of the earth, and once they have made up their minds, they will never die, even if they ' +
    //   'have to overcome everything to achieve their purpose. The main character of "harvard road" is similar to that of Aries.' +
    //   ' Birth is not a choice for us, we can choose only to take the initiative to change our future.'
    // };
  }

  ngOnChanges() {
    this.starDetail = this.starDetail;
  }

  gostar(star) {
    this.tabbar = false;
    // 切换到对应星座的对应内容查询
    if (this.queryUrl === 'character') {
      // 请求charatro对应星座的数据
      this.baodianService.getBaodianInfo(star, 1).subscribe( res => {
        this.starDetail.content = res.json();
        this.setStarDateImg(star); // 设置星座的时间和图片
      });
    } else if (this.queryUrl === 'love') {
      // 请求love对应星座的数据
      this.baodianService.getBaodianInfo(star, 2).subscribe( res => {
        this.starDetail.content = res.json();
        this.setStarDateImg(star); // 设置星座的时间和图片
      });
    } else if (this.queryUrl === 'music') {
      // 请求music对应星座的数据
      this.baodianService.getBaodianInfo(star, 3).subscribe( res => {
        this.starDetail.content = res.json();
        this.setStarDateImg(star); // 设置星座的时间和图片
      });
    } else if (this.queryUrl === 'movie') {
      this.setStarDateImg(star); // 设置星座的时间和图片
      this.movie = true;
      // 请求movie对应星座的数据
      this.baodianService.getBaodianInfo(star, 4).subscribe( res => {
        console.log(res.json());
      });
    }
    // this.starDetail = {
    //   name: star,
    //   date: '7.24-8.21',
    //   img: 'assets/image/' + star.toLowerCase() + '.svg',
    //   content: 'A slow sign. All things always considered before filtering, belonging to the late form of the big, the ' +
    //   'sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to ' +
    //   'win.sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to ' +
    //   'win.sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to ' +
    //   'win.sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to win.',
    //   title: '《test》',
    //   movieimg: 'assets/image/dianying@2x.png',
    //   brief: 'high school four years course, won the New York times first-class scholarship' +
    //   ' in 1996 and went to harvard to study.',
    //   reasons: 'Aries are not afraid of the earth, and once they have made up their minds, they will never die, even if they ' +
    //   'have to overcome everything to achieve their purpose. The main character of "harvard road" is similar to that of Aries.' +
    //   ' Birth is not a choice for us, we can choose only to take the initiative to change our future.for us, we can choose only to' +
    //   ' take the initiative to change our future.for us, we can choose only to take the initiative to change our future.'
    // };
  }

  setStarDateImg(star) {
    const choosestar = star.toLowerCase();
    if (choosestar === 'aries') {
      this.starDetail.date = '3.21-4.19';
    } else if (choosestar === 'taurus') {
      this.starDetail.date = '4.20-5.20';
    } else if (choosestar === 'gemini') {
      this.starDetail.date = '5.21-6.21';
    } else if (choosestar === 'cancer') {
      this.starDetail.date = '6.22-7.22';
    } else if (choosestar === 'leo') {
      this.starDetail.date = '7.23-8.22';
    } else if (choosestar === 'virgo') {
      this.starDetail.date = '8.23-9.22';
    } else if (choosestar === 'libra') {
      this.starDetail.date = '9.23-10.23';
    } else if (choosestar === 'scorpio') {
      this.starDetail.date = '10.24-11.22';
    } else if (choosestar === 'sagittarius') {
      this.starDetail.date = '11.23-12.21';
    } else if (choosestar === 'capricorn') {
      this.starDetail.date = '12.22-1.19';
    } else if (choosestar === 'aquarii') {
      this.starDetail.date = '1.20-2.18';
    } else if (choosestar === 'pisces') {
      this.starDetail.date = '2.19-3.20';
    }
    this.starDetail.name = star.substr(0, 1).toUpperCase() + star.substring(1);
    this.starDetail.img = 'assets/image/' + star.toLowerCase() + '.svg';
  }

}
