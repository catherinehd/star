import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class BaodianService {

  constructor(private httpService: HttpService) { }

  getCharacterInfo(star) {
    return this.httpService.getMethod({
      url: 'a/a',
      data: {
        star: star
      }
    });
  }

  getLoveInfo(star) {
    return this.httpService.getMethod(({
      url: 'a/a',
      data: {
        star: star
      }
    }));
  }

  getMusicInfo(star) {
    return this.httpService.getMethod(({
      url: 'a/a',
      data: {
        star: star
      }
    }));
  }

  getMovieInfo(star) {
    return this.httpService.getMethod(({
      url: 'a/a',
      data: {
        star: star
      }
    }));
  }

  getBaodianInfo(star, type) {
    return this.httpService.getMethod({
      url: 'a/a',
      data: {
        astro: star,
        category: type
      }
    });
  }
}
