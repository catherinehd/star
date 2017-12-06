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
}

class ShowConfig {
  constructor(public isCloseShow ?: boolean,
              public isArrowShow ?: boolean,
              public isRegisterShow ?: boolean,
              public isCancelShow ?: boolean,
              public isSaveShow ?: boolean) {}
}
