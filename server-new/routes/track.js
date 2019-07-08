const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;
const router = require('express').Router();
const youtubedl = require('ytdl-core');
const { validationResult } = require('express-validator');
const yt = require('../libs/yt_client');
const { GetTrackValidator } = require('../libs/validators');
const YoutubeVideoURL = 'https://www.youtube.com/watch?v=';
const moment = require('moment');
/** 
 * GET - /track/metadata/:id
 */
router.get('/metadata/:id', [ GetTrackValidator ], function(req, res){

    var videoID = req.params.id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    yt.client.getById(videoID, (err, response) => {
        if(err){
            res.status(500).send();
        }
        console.log(response.items[0]);
        var item = response.items[0];

        res.send({
            id: item.id || item.snippet.channelId,
            details:{
                etag: item.etag,
                channel:{
                    id: item.snippet.channelId,
                    title: item.snippet.channelTitle,
                },
                thumbnails: item.snippet.thumbnails,
                live: item.liveBroadcastContent,
                title: item.snippet.title,
                description: item.snippet.description,
                stats: item.statistics,
            },
            sound: {
                playable: (typeof item.id == 'undefined')?(false):(true),
                duration: moment.duration(item.contentDetails.duration).asMilliseconds(),
            }
        });
    })
});

/**
 * GET - /track/:id
 */
router.get('/:id', [ GetTrackValidator ], (req, res) => {

    var videoID = req.params.id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

     // try {
    //     var trackID = new ObjectID(videoID);
    //   } catch(err) {
    //     return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" }); 
    //   }

    var url = YoutubeVideoURL + videoID;
    res.set('content-type', 'audio/mp3');
    res.set('accept-ranges', 'bytes');
  
    // let downloadStream = bucket.openDownloadStream(trackID);

    // let bucket = new mongodb.GridFSBucket(db, {
    //   bucketName: 'tracks'
    // });
  
    // downloadStream.on('data', (chunk) => {
    //   res.write(chunk);
    // });
  
    // downloadStream.on('error', () => {
    //   res.sendStatus(404);
    // });
  
    // downloadStream.on('end', () => {
    //   res.end();
    // });

    var stream = youtubedl.getInfo(url, function(err, info) {
        if (!err) {
            // res.setHeader('Content-Disposition', 'attachment; filename="' + info.title + '".mp3');
            console.log(url);
            youtubedl(url, {
                filter: 'audioonly'
            }).pipe(res);
        } else {
            res.end(err);
        }
    })
})

module.exports = router;