import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

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
}
