


import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { ItopiaLayoutComponent } from './itopia-layout.component';
import { ItopiaToolbarModule } from './itopia-toolbar/itopia-toolbar.module';
import { ItopiaSideNavModule } from './itopia-side-nav/itopia-side-nav.module';

@NgModule({
   declarations: [
    ItopiaLayoutComponent
  ],
  imports: [
    CommonModule,
    ItopiaToolbarModule,
    ItopiaSideNavModule,
  ],
  exports: [ItopiaLayoutComponent]
})
export class ItopiaLayoutModule {
}
