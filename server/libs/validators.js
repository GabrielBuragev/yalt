const { query, param } = require('express-validator');

module.exports = {
    SearchValidator: [
        query('q').exists(),
        query('pageToken').optional().isLength({ min: 1 })
    ],
    GetTrackValidator: [
        param('id').exists().isLength({ min: 1, max: 12 }),
    ]
}