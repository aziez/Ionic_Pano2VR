import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VisiMisiPageRoutingModule } from './visi-misi-routing.module';
import { VisiMisiPage } from './visi-misi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisiMisiPageRoutingModule
  ],
  declarations: [VisiMisiPage]
})
export class VisiMisiPageModule {}
