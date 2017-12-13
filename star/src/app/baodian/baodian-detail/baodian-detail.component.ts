import { Component, OnInit, OnChanges } from '@angular/core';
import { BaodianService } from '../../service/baodian.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-baodian-detail',
  templateUrl: './baodian-detail.component.html',
  styleUrls: ['./baodian-detail.component.styl']
})
export class BaodianDetailComponent implements OnInit, OnChanges {
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
  }

  ngOnInit() {
    this.defaultStar = localStorage.getItem('star');
    this.queryUrl = location.pathname.split('/')[2];
    if (this.queryUrl === 'character') {
      // 请求charatro对应星座的数据
      // this.baodianService.getBaodianInfo(this.defaultStar, 1).subscribe( res => {
      //   console.log(res);
      // });
    } else if (this.queryUrl === 'love') {
      // 请求love对应星座的数据
      // this.baodianService.getBaodianInfo(this.defaultStar, 2).subscribe( res => {
      //   console.log(res);
      // });
    } else if (this.queryUrl === 'music') {
      // 请求love对应星座的数据
      // this.baodianService.getBaodianInfo(this.defaultStar, 3).subscribe( res => {
      //   console.log(res);
      // });
    } else if (this.queryUrl === 'movie') {
      this.movie = true;
      // 请求love对应星座的数据
      // this.baodianService.getBaodianInfo(this.defaultStar, 4).subscribe( res => {
      //   console.log(res);
      // });
    }
    this.starDetail = {
      name: 'Taurus',
      date: '3.1-4.4',
      img: 'assets/image/taurus.svg',
      content: 'A slow sign. All things always considered before filtering, belonging to the late form of the big, the ' +
      'sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to win.',
      title: '《Wind and rain harvard road》',
      movieimg: 'assets/image/dianying@2x.png',
      brief: 'The film director is origin and desolate, as parents age eight drugs began begging, at the age of 15, her ' +
      'mother died of AIDS, then father into a shelter, dispossessed her 17 years old started learning high school courses, ' +
      'with only 2 years of optical finished high school four years course, won the New York times first-class scholarship' +
      ' in 1996 and went to harvard to study.',
      reasons: 'Aries are not afraid of the earth, and once they have made up their minds, they will never die, even if they ' +
      'have to overcome everything to achieve their purpose. The main character of "harvard road" is similar to that of Aries.' +
      ' Birth is not a choice for us, we can choose only to take the initiative to change our future.'
    };
  }

  ngOnChanges() {
    this.starDetail = this.starDetail;
  }

  gostar(star) {
    console.log(star);
    this.tabbar = false;
    // 切换到对应星座的对应内容查询
    if (this.queryUrl === 'character') {
      // 请求charatro对应星座的数据
      // this.baodianService.getBaodianInfo(this.defaultStar, 1).subscribe( res => {
      //   console.log(res);
      // });
    } else if (this.queryUrl === 'love') {
      // 请求love对应星座的数据
      // this.baodianService.getBaodianInfo(this.defaultStar, 2).subscribe( res => {
      //   console.log(res);
      // });
    } else if (this.queryUrl === 'music') {
      // 请求love对应星座的数据
      // this.baodianService.getBaodianInfo(this.defaultStar, 3).subscribe( res => {
      //   console.log(res);
      // });
    } else if (this.queryUrl === 'movie') {
      this.movie = true;
      // 请求love对应星座的数据
      // this.baodianService.getBaodianInfo(this.defaultStar, 4).subscribe( res => {
      //   console.log(res);
      // });
    }
    this.starDetail = {
      name: star,
      date: '7.24-8.21',
      img: 'assets/image/' + star.toLowerCase() + '.svg',
      content: 'A slow sign. All things always considered before filtering, belonging to the late form of the big, the ' +
      'sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to ' +
      'win.sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to ' +
      'win.sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to ' +
      'win.sentiment is also relatively late. But they have superhuman stability, and once the bet is made, it is safe to win.',
      title: '《test》',
      movieimg: 'assets/image/dianying@2x.png',
      brief: 'high school four years course, won the New York times first-class scholarship' +
      ' in 1996 and went to harvard to study.',
      reasons: 'Aries are not afraid of the earth, and once they have made up their minds, they will never die, even if they ' +
      'have to overcome everything to achieve their purpose. The main character of "harvard road" is similar to that of Aries.' +
      ' Birth is not a choice for us, we can choose only to take the initiative to change our future.for us, we can choose only to' +
      ' take the initiative to change our future.for us, we can choose only to take the initiative to change our future.'
    };
  }

}
