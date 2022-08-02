import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
   // { path: '/icons', title: 'Icons',  icon: 'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'Profile',  icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/article', title: 'Article',   icon: 'ni-bullet-list-67 text-red', class: '' },
  // { path: '/tables', title: 'Tables',  icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/commande', title: 'commandes',  icon: 'ni-key-25 text-info', class: '' },
   { path: '/machine', title: 'machine',  icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/etape-production', title: 'Etape Production',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/client', title: 'Client',  icon: 'ni-single-02 text-yellow', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, public loginService: AuthenticationService) { }


  logout() {
    this.loginService.logOut();
  }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
