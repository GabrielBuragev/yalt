import { Component, OnInit, Input } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { AudioTrackDropdownItem } from '../../models/AudioTrackDrodownItem';
import { AudioTrackDropdownService } from '../../services/audio-track-dropdown.service';

@Component({
  selector: 'app-track-item-list',
  templateUrl: './track-item-list.component.html',
  styleUrls: ['./track-item-list.component.scss'],
})
export class TrackItemListComponent implements OnInit {
  tracks:AudioTrackDropdownItem[];
  
  constructor(public fs:File, private media: Media, public transfer:FileTransfer, public plt:Platform, public audioTrackDropdownService:AudioTrackDropdownService) { }

  ngOnInit() {
    // this.plt.ready().then(() => this.download());
    // this.plt.ready().then(() => this.playSum());
    // this.fs.listDir('file:///', '').then(entries => { window.alert(entries); })
  }
  onDeviceReady() {


      // const file = this.media.create('http://res.cloudinary.com/dtj7y1r0l/video/upload/v1458851262/msgSound_x2laav.mp3');

      // file.onStatusUpdate.subscribe(status => window.alert(status));
      // file.onSuccess.subscribe(() => window.alert('success'));
      // file.onError.subscribe(error => window.alert('error'));

      // file.play();

      // file.getCurrentPosition().then((position) => {
      //   window.alert(position);
      // });
  }
  playSum(){
    const f = this.media.create(this.fs.dataDirectory + 'temp.mp3');

    f.play();
  }

  download() {

    const url = 'http://res.cloudinary.com/dtj7y1r0l/video/upload/v1458851262/msgSound_x2laav.mp3';
    const fileTransfer = this.transfer.create();

    fileTransfer.download(url, this.fs.dataDirectory + 'temp.mp3').then((entry) => {
      window.alert('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }

}
