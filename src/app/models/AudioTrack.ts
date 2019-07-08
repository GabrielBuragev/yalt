import { AudioTrackDetails } from './AudioTrackDetails';
import { AudioTrackSound } from './AudioTrackSound';
export class AudioTrack {
    public id: string;
    public details: AudioTrackDetails = new AudioTrackDetails();
    public sound: AudioTrackSound = new AudioTrackSound();
    constructor(){}
    
}