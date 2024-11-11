//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");
/*Creating the model for the surveys */
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
/*modlue exports equal to mongoose model for Survey model*/ 