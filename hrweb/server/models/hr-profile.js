var mongoose = require('mongoose');

var HrPro = new mongoose.Schema({
    job_id: String,
    hr_id: String,
    join_date: Date,
    fnamd: String,
    lname: String,
    phone: Number,
    title_at_work: String,
    company: String,
    start_work_date: Date,
    
});

module.exports = mongoose.model('HrPro', HrPro);