import { AudioTrackDropdownItemThumbnail } from './AudioTrackDropdownItemThumbnail';

export class SearchDropdownItem {
    videoId:string;
    channelId:string;
    isLive:boolean;
    title:string;
    description:string;
    thumbnails:AudioTrackDropdownItemThumbnail[];
    channelTitle:string;
}
