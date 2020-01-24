import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  userData: Observable<firebase.User>;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private angularFireAuth: AngularFireAuth, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.userData = angularFireAuth.authState;
  }
  /* Sign up */
  public signUp = (email: string, password: string) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  public signIn = (email: string, password: string) => {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /* Sign out */
  public signOut = () => {
    this.angularFireAuth.auth.signOut().then(() => {
      // remove user from local storage to log user out
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('deploymentSelected');
      localStorage.removeItem('miniSideBar');
      this.currentUserSubject.next(null);
      this.router.navigate(['/login']);
      location.reload();
    });
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login = (user) => {
    if (user) {
      user.authdata = user.user._lat;
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.userData = user;
      this.http.get<any>(`${environment.apiUrl}admins/current`).subscribe((current) => {
          this.router.navigate(['/']);
      });
    }
    return user;
  }
  // Firebase SignInWithPopup
  public oAuthProvider = (provider) => {
    return this.angularFireAuth.auth.signInWithPopup(provider);
  }
  // Firebase Google Sign-in
  public signinWithGoogle = () => {
    return this.oAuthProvider(new auth.GoogleAuthProvider())
    .then((res) => {
      console.log('Successfully logged in!');
      this.login(res);
    }).catch((error) => {
      console.log(error);
    });
  }

}
