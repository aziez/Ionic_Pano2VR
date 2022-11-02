import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TourPage } from '../modal/tour/tour.page';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  tourId: string;

  constructor(private modalCtrl: ModalController) { }


  async showModal(tourId){
    const modal = await this.modalCtrl.create({
      component: TourPage,
      cssClass: 'modal-fullscreen',
      componentProps: {
        id : tourId
      }
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
