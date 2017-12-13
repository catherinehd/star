import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() showConfig: ShowConfig;
  @Input() iscollect: string;
  @Output() onSave = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onFinish = new EventEmitter();

  collect: boolean;
  constructor(private navigateService: NavigateService) {
  }

  ngOnInit() {
   if (this.iscollect === 'y') {
     this.collect = true;
   } else {
     this.collect = false;
   }
  }

  ngOnChanges() {
    if (this.iscollect === 'y') {
      this.collect = true;
    } else {
      this.collect = false;
    }
  }

  goBack() {
    this.navigateService.popRoute();
  }

  pushToRegister() {
    this.navigateService.push();
    this.navigateService.pushToRoute('/register');
  }

  save() {
    this.onSave.emit();
  }

  Edit() {
    this.onEdit.emit();
  }

  Finish() {
    this.onFinish.emit();
  }
}

class ShowConfig {
  constructor(public isCloseShow ?: boolean,
              public isArrowShow ?: boolean,
              public isEditShow ?: boolean,
              public isFinishShow ?: boolean,
              public isCancelShow ?: boolean,
              public isSaveShow ?: boolean) {}
}
