import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

import { AuthenticationService } from '../core/security/authentication.service';
import { locale as spanish } from './i18n/login.es';
import { locale as english } from './i18n/login.en';

import { locale as spanishValidators } from '../core/shared/pipes/validator/i18n/validators.es';
import { locale as englishValidators } from '../core/shared/pipes/validator/i18n/validators.en';
@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  currentYear: string;
  isExternalLogin: boolean;
  hide: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private translate: TranslateService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
    if (this.translate.getBrowserLang() === 'es') {
      this.translate.setTranslation('es', spanish);
      this.translate.setTranslation('es', spanishValidators);
    } else {
      this.translate.setTranslation('en', english);
      this.translate.setTranslation('es', englishValidators);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.currentYear = moment().format('YYYY');
    this.isExternalLogin = false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid || this.isExternalLogin) {
      return;
    }
    this.loading = true;
    this.signIn();
  }
  public signUp(): void {
    this.authenticationService.signUp(this.f.username.value, this.f.password.value);
  }

  public signIn(): void {
    this.authenticationService.signIn(this.f.username.value, this.f.password.value).then(res => {
      console.log('Successfully signed in!');
      this.authenticationService.login(res);
      location.reload();
    })
      .catch(err => {
        console.log('Something is wrong:', err.message);
        this.error = err.message;
        this.loading = false;
      });
  }

  signOut() {
    this.authenticationService.signOut();
  }
  public signinWithGoogle(): any {
    this.f.username.setErrors(null);
    this.f.password.setErrors(null);
    this.isExternalLogin = true;
    this.authenticationService.signinWithGoogle().then(() => {
      location.reload();
    }).catch((error) => {
      console.log('Something is wrong:', error.message);
      this.error = error.message;
      this.loading = false;
    });

  }
}
