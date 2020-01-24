import { NgModule } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [TranslateModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})
export class DashboardModule {

}
