import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {
  @Input() title: string;
  @Input() showConfig: ShowConfig;
  @Output() onSave = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onFinish = new EventEmitter();

  constructor(private navigateService: NavigateService) { }

  ngOnInit() {
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
