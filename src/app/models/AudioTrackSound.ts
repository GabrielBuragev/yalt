export class AudioTrackSound {
    public loadingProgress: number = 0;
    public playing: boolean = false;
    public finishedPlaying: boolean = false;
    public finishedLoading: boolean = false;

    public playingCurrentTime: number;
    public playable: boolean;
    public duration: number;
    public binaryBuffer: any;

    constructor(){}
}