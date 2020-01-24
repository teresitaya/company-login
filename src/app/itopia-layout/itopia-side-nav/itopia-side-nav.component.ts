import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { locale as spanish } from './i18n/itopia-side-nav.es';
import { locale as english } from './i18n/itopia-side-nav.en';

@Component({
  selector: 'app-itopia-side-nav',
  templateUrl: './itopia-side-nav.component.html',
  styleUrls: ['./itopia-side-nav.component.css']
})
export class ItopiaSideNavComponent implements OnInit {
  sectionTwoRoutes: any;
  appitems: any;
  config: any;
  dashboardLabel: string;

  @Output() sidenavClose = new EventEmitter();

  constructor(private translate: TranslateService) {
    if (this.translate.getBrowserLang() === 'es') {
      this.translate.setTranslation('es', spanish);
    } else {
      this.translate.setTranslation('en', english);
    }
    this.dashboardLabel = this.translate.instant('itopia_side_nav.DASHBOARD');

    this.sectionTwoRoutes = [{route: '/', title: this.translate.instant('itopia_side_nav.TASKS'), icon: 'check_box', show_badget: '+99' },
    {route: '/', title: 'Insights', icon: 'remove_red_eye'} ];
    this.config = {
      paddingAtStart: true,
      classname: 'custom-labels',
      listBackgroundColor: '#fff',
      fontColor: '#4c4c4c',
      backgroundColor: '#fff',
      selectedListFontColor: '#262626',
      collapseOnSelect: true,
      highlightOnSelect: true
    };
    this.appitems = [
      {
        label: this.translate.instant('itopia_side_nav.CLOUD_DESKTOPS'),
        icon: 'widgets',
        items: [
          {
            label: this.translate.instant('itopia_side_nav.USERS'),
            link: '/users',
            icon: 'person'
          }
        ]
      },
      {
        label: this.translate.instant('itopia_side_nav.CLOUD_MANAGER'),
        icon: 'cloud',
        items: [
          {
            label: this.translate.instant('itopia_side_nav.VM_INSTANCES'),
            link: '/servers',
            faIcon: 'fa fa-desktop'
          }
        ]
      },
      {
        label: this.translate.instant('itopia_side_nav.CATALOG'),
        faIcon: 'fa fa-puzzle-piece',
        items: [
          {
            label: this.translate.instant('itopia_side_nav.USERS'),
            link: '/catalog-users',
            icon: 'person'
          }
        ]
      }
    ];
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  public selectedItem = ($event) => {
    console.log(`Selected ${JSON.stringify($event)}`);
  }
  ngOnInit() {
  }
}
