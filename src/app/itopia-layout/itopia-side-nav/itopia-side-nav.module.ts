import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {MatToolbarModule, MatIconModule, MatListModule, MatSidenavModule, MatRadioModule, MatMenuModule } from '@angular/material';

import { ItopiaSideNavComponent } from './itopia-side-nav.component';
import { ItopiaToolbarModule } from './../itopia-toolbar/itopia-toolbar.module';
import { DeploymentsMenuModule } from './../../deployments/deployments-menu/deployments-menu.module';

@NgModule({
  declarations: [
    ItopiaSideNavComponent
  ],
  imports: [
    TranslateModule,
    AngularFontAwesomeModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
    MatMenuModule,
    RouterModule,
    ItopiaToolbarModule,
    NgMaterialMultilevelMenuModule,
    DeploymentsMenuModule
  ],
  exports: [ItopiaSideNavComponent]
})
export class ItopiaSideNavModule {
}
