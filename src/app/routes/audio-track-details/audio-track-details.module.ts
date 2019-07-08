import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AudioTrackDetailsPage } from './audio-track-details.page';

import { AudioControlsComponent } from '../../components/audio-controls/audio-controls.component';

const routes: Routes = [
  {
    path: '',
    component: AudioTrackDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AudioTrackDetailsPage, AudioControlsComponent]
})
export class AudioTrackDetailsPageModule {}
