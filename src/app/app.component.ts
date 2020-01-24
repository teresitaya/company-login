import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService } from './core/security/authentication.service';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   closedNavParent: string;
   currentUser: User;
   userData: any;
   @Input() onCloseSideNav: string;

  constructor(private translate: TranslateService, private authenticationService: AuthenticationService) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.use('es');
    this.closedNavParent = 'menu';
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  public onSidenavClose() {
    this.closedNavParent = this.closedNavParent === 'arrow_back' ? 'menu' : 'arrow_back';
  }

}
