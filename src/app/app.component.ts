import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'portfolio';
  public screenWidth: number = window.innerWidth;
  public showHamburgerMenu: boolean = false;

  ngOnInit() {
    this.onScreenResize();
  }
  
  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.onScreenResize();
  }

  public onScreenResize(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 1250) {
      this.showHamburgerMenu = true;
    } else {
      this.showHamburgerMenu = false;
    }
  }
}
