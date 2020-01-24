import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatIconModule, MatListModule, MatTooltipModule, MatMenuModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';

import { ItopiaToolbarComponent } from './itopia-toolbar.component';


@NgModule({
  declarations: [
    ItopiaToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    TranslateModule
  ],
  exports: [ItopiaToolbarComponent]
})
export class ItopiaToolbarModule {
}
