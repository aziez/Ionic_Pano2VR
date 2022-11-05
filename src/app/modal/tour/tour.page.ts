import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.page.html',
  styleUrls: ['./tour.page.scss'],
})
export class TourPage implements OnInit, AfterViewInit {
  asset = 'assets/output/index.html#';
  url: any;
  id: any;
  constructor(private sanitize: DomSanitizer,private modalCtrl: ModalController, private loadingCtrl: LoadingController) {
    this.url = sanitize.bypassSecurityTrustResourceUrl(this.asset);

  }
  closeModal(){
    this.modalCtrl.dismiss();
  }
  async loadingShow(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 1500,
      cssClass: 'custom-loading'
    }).then((res)=> {
      res.present();
    });
  }
  ngOnInit() {
    this.loadingShow();
  }
  ngAfterViewInit() {
    const select = this.asset+this.id;
    this.url = this.sanitize.bypassSecurityTrustResourceUrl(select);
  }

}
