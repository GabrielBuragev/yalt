import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TrackItemListComponent } from '../../components/track-item-list/track-item-list.component';
import { TrackItemComponent } from '../../components/track-item/track-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, TrackItemListComponent, TrackItemComponent],
  entryComponents: [ ]
})
export class HomePageModule {}
