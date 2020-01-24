
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule} from '@angular/core';
import { MatTabsModule, MatSidenavModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

/* Firebase services */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { appRoutingModule } from './app.routing';
import { DashboardModule } from './dashboard/dashboard.module';
import { ItopiaToolbarModule } from './itopia-layout/itopia-toolbar/itopia-toolbar.module';
import { ItopiaSideNavModule } from './itopia-layout/itopia-side-nav/itopia-side-nav.module';
import { LoginModule } from './login/login.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ErrorInterceptor, AuthInterceptor } from './core/security';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
  } as any;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFontAwesomeModule,
    appRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    MatTabsModule,
    MatSidenavModule,
    ItopiaToolbarModule,
    ItopiaSideNavModule,
    DashboardModule,
    LoginModule,
    ReactiveFormsModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }
  ],
   bootstrap: [AppComponent]
})

export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
