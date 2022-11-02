import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisiMisiPage } from './visi-misi.page';

const routes: Routes = [
  {
    path: '',
    component: VisiMisiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisiMisiPageRoutingModule {}
