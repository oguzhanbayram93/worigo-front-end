import { Component, OnInit } from '@angular/core';
import { navItems } from '../_nav';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
