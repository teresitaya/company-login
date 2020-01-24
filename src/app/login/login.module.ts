// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {MatInputModule, MatIconModule} from '@angular/material';

// This Module's Components
import { LoginComponent } from './login.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, TranslateModule, MatInputModule, MatIconModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {

}
