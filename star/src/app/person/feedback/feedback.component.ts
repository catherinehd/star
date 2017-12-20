import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { PersonService } from '../../service/person.service';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.styl']
})
export class FeedbackComponent implements OnInit {
  allnum: number;
  havenum: number;
  feedbackForm: FormGroup;
  feedback: Feedback = new Feedback('', '', '');
  telControl: AbstractControl;
  msg: string;

  validatorMsg = {
    email: {
      required: 'please input your email',
      pattern: 'please input correct email'
    },
    tel: {
      require: 'please input phonenumber',
      pattern: 'please input correct phonenumber'
    },
    word: {
      require: 'please say something',
    }
  };

  constructor(private formBuilder: FormBuilder,
              private personService: PersonService,
              private navigateService: NavigateService) {
    this.allnum = 200;
    this.havenum = 0;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.feedbackForm = this.formBuilder.group( {
      'email': [this.feedback.email, [
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9]+[_|\_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
      ]],
      'tel': [this.feedback.tel, [
        Validators.required
      ]],
      'word': [this.feedback.word, [
        Validators.required
      ]]
    });
    // this.telControl = this.feedbackForm.get('tel');
  }

  testValid() {
    for (const field in this.feedback) {
      const control = this.feedbackForm.get(field);
      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          this.showTip(this.validatorMsg[field][key]);
          return;
        }
      }
    }
  }

  getTelValue() {
    const telArr = this.telControl.value.toString().split(' ');
    return `${telArr[0]}${telArr[1]}${telArr[2]}`;
  }

  showTip(msg, callback ?: any) {
    this.msg = msg;
    setTimeout(() => {
      this.msg = '';
      if (callback) callback();
    }, 3000);
  }

  cutmsg() {
    // 当使用复制功能时候，对复制的内容只截取规定范围内的字符
    document.querySelector('textarea').value = this.feedbackForm.value.word.substring(0 , 200);
    this.havenum = document.querySelector('textarea').value.length;
  }

  onSubmit() {
    // 提交
    this.testValid();
    if (!this.feedbackForm.valid) return;
    if (this.feedbackForm.value.tel.toString().length !== 11) {
      this.showTip('please input correct phone number');
      return;
    }
    // this.personService.feedback(this.feedbackForm.value.email, this.feedbackForm.value.tel, this.feedbackForm.value.word).subscribe( res => {
    //   console.log(res);
    //   // 如果提交成功
    //   this.showTip('success!');
    //   this.feedbackForm.value.email = '';
    //   this.feedbackForm.value.tel = '';
    //   this.feedbackForm.value.word = '';
    //   // 提交失败
    //   this.showTip('error');
    // });
    this.showTip('success!', () => {
      this.navigateService.pushToRoute('./home');
    });
  }
}

class Feedback {
  constructor(public email: string,
              public tel: string,
              public word: string) {}
}
