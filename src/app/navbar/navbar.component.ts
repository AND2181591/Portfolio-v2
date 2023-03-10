import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ABOUT_ROUTE, CONTACT_ROUTE, PROJECTS_ROUTE } from '../constants/route.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public aboutRoute = ABOUT_ROUTE;
  public projectsRoute = PROJECTS_ROUTE;
  public contactRoute = CONTACT_ROUTE;

  @Output() public closeSideNav = new EventEmitter();

  constructor(
    private _iconRegistry: MatIconRegistry, 
    private _domSanitizer: DomSanitizer
  ) {
    _iconRegistry.addSvgIcon(
      'home_icon', 
      _domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home_icon.svg')
    );

    _iconRegistry.addSvgIcon(
      'about_icon', 
      _domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/about_icon.svg')
    );

    _iconRegistry.addSvgIcon(
      'skills_icon', 
      _domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/skills_icon.svg')
    );

    _iconRegistry.addSvgIcon(
      'projects_icon', 
      _domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/projects_icon.svg')
    );

    _iconRegistry.addSvgIcon(
      'contact_icon', 
      _domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/contact_icon.svg')
    );
  }

  public onCloseSideNav(): void {
    this.closeSideNav.emit();
  }
}
