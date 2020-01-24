import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeploymentsMenuService } from './deployments-menu.service';

@Component({
  selector: 'app-deployments-menu',
  templateUrl: './deployments-menu.component.html',
  styleUrls: ['./deployments-menu.component.css']
})
export class DeploymentsMenuComponent implements OnInit {
  deployments: any;
  deploymentsMenuService: DeploymentsMenuService;
  @Output() closeSideNav = new EventEmitter();

  constructor(deploymentsMenuService: DeploymentsMenuService) {
    this.deploymentsMenuService = deploymentsMenuService;
    this.deploymentsMenuService.getRecentDeployments().subscribe((data) => {
      this.deployments = data.list;
      this.setDeploymentSelected(this.deployments[0]);
    });
  }

  ngOnInit() {
  }
  public getDeploymentStatus(status: string): string {
      switch (status.toLocaleLowerCase()) {
        case 'on cloud':
          return 'c-green';
        case 'in progress':
            return null;
        default:
            return 'c-orange';
      }
  }

  public isInProgress(status): boolean {
    return status.toLowerCase() === 'in progress';
  }

  public setDeploymentSelected(deployment): void {
    this.deploymentsMenuService.setDeploymentSelected(deployment);
    this.closeSideNav.emit('close-sidenav');

  }

}
