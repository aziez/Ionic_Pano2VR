/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visi-misi',
  templateUrl: './visi-misi.page.html',
  styleUrls: ['./visi-misi.page.scss'],
})
export class VisiMisiPage implements OnInit {
  visi: string[] = ['“Menjadi universitas peringkat 40 besar pada tingkat nasional yang dilandasi oleh nilai humanis dan religius pada tahun 2024”'];
  misi: string[] = [
    'Menyelenggarakan pendidikan akademik, vokasi, dan profesi yang profesional berbasis humanis dan religius.',
    'Melaksanakan penelitian berbasis humanis dan religius yang menghasilkan inovasi untuk kesejahteraan masyarakat.',
    'Melaksanakan pengabdian kepada masyarakat implementasi penelitian berbasis humanis dan religius.',
    'Menyelenggarakan peningkatan kualitas sumber daya manusia yang kompeten dan profesional.',
    'Menyelenggarakan kerja sama dalam negeri dan luar negeri berbasis saling menguntungkan.'
  ];

  constructor(private modalCtrl: ModalController) { }

  cancel(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
