import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class BaodianService {

  constructor(private httpService: HttpService) { }

  getBaodianInfo(star, type) {
    return this.httpService.getMethod({
      url: 'Astro/GetProp',
      data: {
        astro: star,
        category: type
      }
    });
  }
}
