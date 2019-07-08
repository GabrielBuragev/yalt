const yt = require('youtube-node');
const { InvalidParamsError } = require('./errors');

class YTClient {
    constructor(params){

        this.API_KEY = params.api_key || process.env.YT_API_KEY;
        this.client = new yt();
        this.client.setKey(this.API_KEY);
    }
}

module.exports = new YTClient({});