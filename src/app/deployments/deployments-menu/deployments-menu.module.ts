import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatIconModule, MatListModule, MatSidenavModule, MatMenuModule } from '@angular/material';

import {TranslateModule} from '@ngx-translate/core';


import { DeploymentsMenuComponent } from './deployments-menu.component';
@NgModule({
    imports: [AngularFontAwesomeModule, CommonModule, MatIconModule, MatListModule, MatSidenavModule, MatMenuModule, TranslateModule],
    declarations: [DeploymentsMenuComponent],
    exports: [DeploymentsMenuComponent]
})
export class DeploymentsMenuModule {

}
