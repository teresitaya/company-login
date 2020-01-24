import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Deployment } from 'src/app/models';
@Injectable({
  providedIn: 'root'
})
export class DeploymentsMenuService {
  private deploymentSelectedSubject: BehaviorSubject<Deployment>;
  public deploymentSelected: Observable<Deployment>;

  constructor(private http: HttpClient) {
    this.deploymentSelectedSubject = new BehaviorSubject<Deployment>(JSON.parse(localStorage.getItem('deploymentSelected')));
    this.deploymentSelected = this.deploymentSelectedSubject.asObservable();
  }

  public getRecentDeployments(): Observable<any> {
    const params = new HttpParams().set('countVisit', '3');
    return this.http.get<any>(`${environment.apiUrl}deployments/recents`, {params: params});
  }
  public setDeploymentSelected(deployment): void {
    localStorage.setItem('deploymentSelected', JSON.stringify(deployment));
    this.deploymentSelectedSubject.next(deployment);
  }
}
