import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class XingyunService {

  constructor(private httpService: HttpService) { }

  // 获取幸运，type: 0 今天 1 明天  2 本周 3 本月 4 本年
  getXingyun(star, type) {
    return this.httpService.getMethod({
      url: 'Astro/Fortune',
      data: {
        group: star,
        type: type
      }
    });
  }

}
