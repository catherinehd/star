import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiList } from '../config/apiList';

@Injectable()
export class PersonService {

  constructor(private httpService: HttpService) { }

  // 反馈
  feedback(email, tel, word) {
    return this.httpService.getMethod( {
      url: 'a/a',
      data: {
        email: email,
        tel: tel,
        word: word
      }
    });
  }

}
