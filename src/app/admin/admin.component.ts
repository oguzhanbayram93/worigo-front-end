import { Component, OnInit } from '@angular/core';
import { navItems } from '../_nav';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor() { }

  ngOnInit(): void {
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
