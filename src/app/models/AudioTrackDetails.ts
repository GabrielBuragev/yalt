import { ChannelLink } from './ChannelLink';
import { AudioTrackStats } from './AudioTrackStats';
import { AudioTrackDropdownItemThumbnails } from './AudioTrackDropdownItemThumbnails';

export class AudioTrackDetails {
    public duration: number = 0;
    public id: string = '';
    public title: string = '';
    public description: string = '';
    public etag: string = '';
    public channel: ChannelLink = new ChannelLink();
    public liveContent: boolean = false;
    public stats: AudioTrackStats = new AudioTrackStats();
    public thumbnails: AudioTrackDropdownItemThumbnails = new AudioTrackDropdownItemThumbnails();

    constructor(){}
    
}