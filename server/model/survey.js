//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");
/*Creating the model for the survey */
let surveyModel = mongoose.Schema({
    Name: String,
    JobTitle: String,
    Satisfaction: String,
    DurationOfEmployment: Number,
    Improvments: String
},

{
    collection:"Job_surveys"
});
module.exports =mongoose.model('Survey',surveyModel);
/*module exports equal to mongoose model for Survey model*/ 