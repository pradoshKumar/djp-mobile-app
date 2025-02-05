import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePlaylistPageRoutingModule } from './create-playlist-routing.module';

import { CreatePlaylistPage } from './create-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlaylistPageRoutingModule
  ],
  declarations: [CreatePlaylistPage]
})
export class CreatePlaylistPageModule {}
