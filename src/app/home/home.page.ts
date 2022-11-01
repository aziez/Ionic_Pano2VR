import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  main = 'assets/main/index.html';
  sanitize: any;
  isVisible = false;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitize = this.sanitizer.bypassSecurityTrustResourceUrl(this.main);
  }

  showModal(): void {
    this.isVisible = true;
  }

}
