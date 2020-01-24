// require('../../models/user')

// function trackProgress6(){
//     var title = $("#heading").text()
//     var percentage = Math.ceil(correct/6 * 100)
//     User.findOne({username:"Neil Admin"}, function(error, user){
//     if(error){
//         console.log("THere has been an error" + error)
//     } else {
//         console.log("track progress6 working" + user)
//     }
// })
// }

function trackProgress6() {
    console.log("add progress function")
    var percentage = Math.ceil(correct/6 * 100)
    var title = $("#heading").text()
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$push": {
                    "quiz": title
            }   
        }),
        contentType: "application/json",
        success: function (data) {
            getScore();
            $("#jquery").text(data.score);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
};