var pupilSchema= mongoose.Schema({
    name:String,
    email:String,
    year:Number,
    points:Number
    
})

var Pupil = mongoose.model("Pupil", pupilSchema);