import { Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { locale as spanish } from './i18n/dashboard.es';
import { locale as english } from './i18n/dashboard.en';
import { Deployment } from '../models';
import { DeploymentsMenuService } from './../deployments/deployments-menu/deployments-menu.service';


@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  deploymentSelected: Deployment;
  deploymentsMenuService: DeploymentsMenuService;

  constructor(private translate: TranslateService, deploymentsMenuService: DeploymentsMenuService) {
    if (this.translate.getBrowserLang() === 'es') {
      this.translate.setTranslation('es', spanish);
    } else {
      this.translate.setTranslation('en', english);
    }
    this.deploymentsMenuService = deploymentsMenuService;
    // this.deploymentsMenuService.deploymentSelected.subscribe(x => this.deploymentSelected = x);
  }
 ngOnInit() {
    this.deploymentsMenuService.deploymentSelected.subscribe(x => this.deploymentSelected = x);
  }

}
