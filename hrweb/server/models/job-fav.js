var mongoose = require('mongoose');

var JobFav = new mongoose.Schema({
    can: String,
    job_id_array:[
        {   job_id: String,
            job_title: String,
        }
    ]
});

module.exports = mongoose.model('jobFav', JobFav);