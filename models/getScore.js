function getScore() {
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var idAndApi = id + api;
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "get",
        data: JSON.stringify(),
        contentType: "application/json",
        success: function (data) {
            $("#jquery").text(data.score);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

module.exports = getScore;