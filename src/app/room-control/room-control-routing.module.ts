import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomControlPage } from './room-control.page';

const routes: Routes = [
  {
    path: '',
    component: RoomControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomControlPageRoutingModule {}
