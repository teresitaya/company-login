import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { AuthenticationService } from './../../core/security/authentication.service';
import { User } from './../../models/user';

import { locale as spanish } from './i18n/itopia-toolbar.es';
import { locale as english } from './i18n/itopia-toolbar.en';

@Component({
  selector: 'app-itopia-toolbar',
  templateUrl: './itopia-toolbar.component.html',
  styleUrls: ['./itopia-toolbar.component.css']
})
export class ItopiaToolbarComponent implements OnInit {
  @Input() closedNav: boolean ;

  @Output() public sidenavToggle = new EventEmitter();

  links: any;
  btnIcon: string;
  currentUser: User;
  profile: any;
  profileSubmenu: any;

  constructor(private translate: TranslateService, private authenticationService: AuthenticationService, private router: Router) {
    if (this.translate.getBrowserLang() === 'es') {
      this.translate.setTranslation('es', spanish);
    } else {
      this.translate.setTranslation('en', english);
    }
    this.links = [{id: 'audits', link: '#', icon: 'list', tooltip: this.translate.instant('itopia_toolbar.AUDITS')} ,
    {id: 'feedback', link: '#', icon: 'feedback', tooltip: this.translate.instant('itopia_toolbar.FEEDBACK')},
    {id: 'help', link: '#', icon: 'help', tooltip: this.translate.instant('itopia_toolbar.HELP')},
    {id: 'notifications', link: '#', icon: 'notifications', show_badget: '101',
    tooltip: this.translate.instant('itopia_toolbar.NOTIFICATIONS')}];
    this.btnIcon = 'menu';
    this.profile = this.translate.instant('itopia_toolbar.PROFILE');
    this.profileSubmenu =
    [{id: 'myaccount', link: '#', icon: 'person_outline', tooltip: this.translate.instant('itopia_toolbar.MY_ACCOUNT')},
    {id: 'manage', link: '#', class: 'fa fa-cog', tooltip: this.translate.instant('itopia_toolbar.MANAGE')},
    {id: 'admins', link: '#', icon: 'people_alt', tooltip: this.translate.instant('itopia_toolbar.ADMINS')},
    {id: 'notifications', link: '#', class: 'fa fa-calculator', tooltip: this.translate.instant('itopia_toolbar.CLOUD_CALCULATOR')},
    {id: 'notifications', link: '#', class: 'fa fa-tag', tooltip: this.translate.instant('itopia_toolbar.SUSCRIPTION')},
    {id: 'notifications', link: '#', icon: 'device_hub', tooltip: this.translate.instant('itopia_toolbar.INTEGRATIONS')},
    {id: 'logout', link: '#', icon: 'settings_power', tooltip: this.translate.instant('itopia_toolbar.LOG_OUT')},
  ];
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit() {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  public logout() {
    this.authenticationService.signOut();
  }
  public customAction(id: string) {
    switch (id) {
      case 'logout':
          return this.logout();
    }

  }
}
