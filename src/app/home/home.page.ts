import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { VisiMisiPage } from '../modal/visi-misi/visi-misi.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  main = 'assets/main/index.html';
  sanitize: any;
  isVisible = false;

  constructor(private sanitizer: DomSanitizer, private modalCtrl: ModalController) {
    this.sanitize = this.sanitizer.bypassSecurityTrustResourceUrl(this.main);
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: VisiMisiPage,
    });
    modal.present();
  }

}
