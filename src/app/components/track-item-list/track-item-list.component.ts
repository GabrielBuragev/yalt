import { Component, OnInit, Input } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { SearchDropdownItem } from '../../models/SearchDropdownItem';
import { AudioTrackDropdownService } from '../../services/audio-track-dropdown.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-track-item-list',
  templateUrl: './track-item-list.component.html',
  styleUrls: ['./track-item-list.component.scss'],
})
export class TrackItemListComponent implements OnInit {
  public dropdownItems$: Observable<SearchDropdownItem[]>

  constructor(public fs:File, public plt:Platform, audioTrackDropdownService: AudioTrackDropdownService) { 
    var self = this;
    this.dropdownItems$ = audioTrackDropdownService.getDropdownItems();
  }

  ngOnInit() {}
  
}
