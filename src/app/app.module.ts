import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { Media } from '@ionic-native/media/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AudioTrackDropdownService } from './services/audio-track-dropdown.service';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import * as SearchDropdownReducer from './store/SearchDropdown.reducer';
import * as AudioTrackSelectedReducer from './store/AudioTrackSelected.reducer';
import * as AudioTrackPlayingReducer from './store/AudioTrackPlaying.reducer';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AudioPlayerService } from './services/audio-player.service';

@NgModule({
  declarations: [AppComponent,  ToolbarComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    StoreModule.forRoot({ 
      dropdown: SearchDropdownReducer.reducer, 
      audioTrackSelected: AudioTrackSelectedReducer.reducer, 
      audioTrackPlaying: AudioTrackPlayingReducer.reducer,
    })],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Media,
    FileTransfer,
    AudioTrackDropdownService,
    AudioPlayerService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
