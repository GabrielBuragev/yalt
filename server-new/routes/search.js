const mongodb = require('mongodb');
const router = require('express').Router();
const yt = require('../libs/yt_client');
const { SearchValidator } = require('../libs/validators');
const { validationResult } = require('express-validator');
/** GET - /search?q= */
router.get('/', [ SearchValidator ], function(req, res){
    var q = req.query.q;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    yt.client.search(q, 12, { part: 'snippet' }, function(error, result){

        if(error){
            res.status(500);
            res.send(JSON.stringify(error));
        }

        let response = {
            nextPageToken: result.nextPageToken,
            items:result.items.map( (val) => {
                return {
                    videoId: val.id.videoId,
                    ...val.snippet,
                }
            })
        };

        res.send(response);

    })
    
});

module.exports = router;