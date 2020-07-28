function addBronze() {
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$inc": {
                "bronze": 1
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

