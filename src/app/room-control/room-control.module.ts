import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomControlPageRoutingModule } from './room-control-routing.module';

import { RoomControlPage } from './room-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomControlPageRoutingModule
  ],
  declarations: [RoomControlPage]
})
export class RoomControlPageModule {}
